// Grid wrapper for bood cards.

import BookCard from "./BookCard.jsx";

function BookGrid({ books, onToggleFavorite, onDownload, density }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((b) => (
                <BookCard
                    key={b.id}
                    book={b}
                    onToggleFavorite={onToggleFavorite}
                    onDownload={onDownload}
                    density={density}
                />    
            ))}
        </div>
    );
}

export default BookGrid;