// A page that shows books with downloadCount > 0.

import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import seedBooks from '../data/books.js';
import BookGrid from "../components/BookGrid.jsx";
import Toast from "../components/Toast.jsx";

function Downloads({ gridDensity }) {
    const [books, setBooks] = useLocalStorage('booklibrary_books', seedBooks);
    const [toast, setToast] = useState('');
    const downloaded = books.filter((b) => b.downloadCount > 0);
    
    const onToggleFavorite = (id) => {
        setBooks((previous) => previous.map((b) => (String(b.id) === String(id) ? { ...b, isFavorite: !b.isFavorite } : b)));
    };
    const onDownload = (id) => {
        setBooks((previous) => previous.map((b) => (String(b.id) === String(id) ? { ...b, downloadCount: b.downloadCount + 1 } : b)));
        setToast('Download started (mock)');
    };
    
    return (
        <section aria-label="Downloads">
            {downloaded.length === 0 ? (
                <p className="text-sm text-gray-600 dark:text-gray-300">No downloads yet. Download from Library.</p>
            ) : (
                <BookGrid books={downloaded} onToggleFavorite={onToggleFavorite} onDownload={onDownload} density={gridDensity} />
            )}
            <Toast message={toast} onClose={() => setToast('')} />
        </section>
    );
}

export default Downloads;