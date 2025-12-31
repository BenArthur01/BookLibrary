// Book card:
// - Shows cover, title, author, categories, description.
// - Favorite toggle and mock download button.
// - Clicking the image/title navigates to details with state.

import { Link } from 'react-router-dom';

function BookCard({ book, onToggleFavorite, onDownload, density = 'comfortable'}) {
    const pad = density === 'compact' ? 'p-3' : 'p-4';

    return (
        <article className={`rounded-xl shadow hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border dark:border-gray-700 ${pad}`}>
            <Link to={`/book/${book.id}`} state={{ book }}>
                <img
                    src={book.coverUrl}
                    alt={`${book.title} cover`}
                    className="w-full h-56 object-cover rounded-lg mb-3"
                />    
            </Link>

            <Link to={`/book/${book.id}`} state={{ book }}>
                <h3 className="text-lg font-semibold hover:underline">{book.title}</h3>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>

            <div className="mt-2 flex flex-wrap gap-1">
                {book.categories.map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-full border dark:border-gray-700">
                        {c}
                    </span>
                ))}
            </div>

            <p className="text-sm mt-2">{book.description}</p>

            <div className="mt-3 flex items-center gap-2">
                <button
                    aria-label={book.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    onClick={() => onToggleFavorite(book.id)}
                    className={`px-3 py-1 rounded ${book.isFavorite ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                    {book.isFavorite ? '★ Favorite' : '☆ Favorite'}
                </button>    

                <button
                    aria-label="Download book (mock)"
                    onClick={() => onDownload(book.id)}
                    className="px-3 py-1 rounded bg-green-600 text-white"
                >
                    Download
                </button>   

                <span className="ml-auto text-xs text-gray-600 dark:text-gray-300">Downloads: {book.downloadCount}</span> 
            </div>
        </article>
    );
}

export default BookCard;