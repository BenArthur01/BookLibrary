// A page that shows only favorited books.
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import seedBooks from '../data/books.js';
import BookGrid from "../components/BookGrid.jsx";
import Toast from "../components/Toast.jsx";

function Favorites({ gridDensity }) {
    const [books, setBooks] = useLocalStorage('booklibrary_books', seedBooks);
    const [toast, setToast] = useState('');
    const favorites = books.filter((b) => b.isFavorite);

    const onToggleFavorite = (id) => {
        setBooks((previous) => previous.map((b) => (String(b.id) === String(id) ? { ...b, isFavorite: !b.isFavorite } : b)));
    };
    const onDownload = (id) => {
        setBooks((previous) => previous.map((b) => (String(b.id) === String(id) ? { ...b, downloadCount: b.downloadCount + 1 } : b)));
        setToast('Download started (mock)');
    };

    return (
        <section aria-label="Favorites">
            {favorites.length === 0 ? (
                <p className="text-sm text-gray-600 dark:text-gray-300">No favorites yet.</p>
            ) : (
                <BookGrid books={favorites} onToggleFavorite={onToggleFavorite} onDownload={onDownload} density={gridDensity} />
            )}
            <Toast message={toast} onClose={() => setToast('')} />
        </section>
    );
}

export default Favorites;