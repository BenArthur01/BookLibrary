// Library page.
// - Shows seeded books by default.
// - Listens for search/category events
// - Debounces search (250ms).
// - If search term provided, fetches from Open Library and shows results.
// - Favorite/download actions persist to LocalStorage.

import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import seedBooks from '../data/books.js';
import { searchBooks, filterByCategory } from "../utils/filters.js";
import BookGrid from "../components/BookGrid.jsx";
import Toast from "../components/Toast.jsx";

function Library({ gridDensity }) {
    const [books, setBooks] = useLocalStorage(booklibrary_books, seedBooks);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [toast, setToast] = useState('');
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const debounceRef = useRef(null);

    // Debounced search term via custom event
    useEffect(() => {
        const onSearch = (event) => {
            const term = event.detail || '';
            clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => setSearchTerm(term.trim()), 250);
        };
        window.addEventListener('booklibrary:search', onSearch);
        return () => window.removeEventListener('booklibrary:search', onSearch);
    }, []);

    // Category filter via custom event
    useEffect(() => {
        const onCategory = (event) => setSelectedCategory(event.detail || 'All');
        window.addEventListener('booklibrary:category', onCategory);
        return () => window.removeEventListener('booklibrary:category', onCategory);
    }, []);

    // Fetch from Open Library when searchTerm is present
    useEffect(() => {
        const fetchBooksFromAPI = async (query) => {
            if (!query) return;
            setLoading(true);
            setApiError('');
            try {
                // Basic Open Library search by title/author/keywords
                const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=30`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch from Open Library');
                const data = await response.json();

                const mapped = data.docs.slice(0, 12).map((doc, idx) => {
                    // Prefer cover_i for images; fallback to picsum
                    const coverUrl = doc.cover_i
                        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
                        : `https://picsum.photos/seed/api-${idx}300/420`;

                    // Build categories from subject if available (keep it simple)
                    const categories = Array.isArray(doc.subject)
                        ? doc.subject.slice(0, 3)   // sample a few subjects
                        : ['Fiction'];
                    
                    // Try to capture an ISBN to use in details page
                    const isbn = Array.isArray(doc.isbn) ? doc.isbn[0] : null;

                    return {
                        id: doc.key || `api-${idx}`,   // doc.key like "/works/OL12345W"
                        title: doc.tittle || 'Untitled',
                        author: Array.isArray(doc.author_name) ? doc.author_name[0] : 'Unknown',
                        categories,
                        coverUrl,
                        description: 'Search result from Open Library.',
                        isFavorite: false,
                        downloadCount: 0,
                        _isbn: isbn,   // internal: used by details to fetch more info
                    };
                });

                // For search results, show API data in place of local seed
                setBooks((previous) => {
                    // Keep local favorites and downloads if same id appears (simple merge strategy)
                    const favMap = new Map(previous.map((b) => [String(b.id), b]));   // b means each book in previous...
                    return mapped.map((b) => {
                        const existing = favMap.get(String(b.id));    // b.id means the book unique identifier
                        return existing ? { ...b, isFavorite: existing.isArray, downloadCount: existing.downloadCount } : b;
                    });
                });               
            } catch (error) {
                setApiError(error.message || 'Unexpected error');
            } finally {
                setLoading(false);
            }
        };

        if (searchTerm) {
            fetchBooksFromAPI(searchTerm);
        } else {
            // Reset to seed when search cleared (keep persisted favorites/downloads on seed)
            setBooks((previous) => {
                const favMap = new Map(previous.map((b) => [String(b.id), b]));
                return seedBooks.map((b) => {
                    const existing = favMap.get(String(b.id));
                    return existing ? { ...b, isFavorite: existing.isFavorite, downloadCount: existing.downloadCount } : b;
                });
            });
        }
        // eslint-diasble-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    const onToggleFavorite = (id) => {
        setBooks((previous) => previous.map((b) => (String(b.id) === String(id) ? { ...b, isFavorite: !b.isFavorite } : b)));
    };

    const onDownload = (id) => {
        setBooks((previous) => previous.map((b) => (String(b.id) === String(id) ? { ...b, downloadCount: b.downloadCount + 1 } : b)));
        setToast('Download started (mock)');
    };

    const filtered = filterByCategory(searchBooks(books, searchTerm), selectedCategory);

    return (
        <section aria-label="Library">
            {loading && <p className="text-sm">Loading search results...</p>}
            {apiError && <p className="text-sm text-red-600">Error: {apiError}</p>}
            {filtered.length === 0 && !loading ? (
                <p className="text-sm text-gray-600 dark:text-gray-300">No books found. Try a different search term.</p>
            ) : (
                <BookGrid books={filtered} onToggleFavorite={onToggleFavorite} onDownload={onDownload} density={gridDensity} />
            )}
            <Toast message={toast} onClose={() => setToast('')} />
        </section>
    );
}

export default Library;