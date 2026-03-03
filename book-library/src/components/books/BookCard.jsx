function BookCard({ book }) {
    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "https://via.placeholder.com/150";


    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg p-3 transition">
            <img 
                src={coverUrl}
                alt={book.title}
                className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="mt-2 font-medium text-sm">{book.title}</h3>
            <p className="text-xs text-gray-500">{book.author_name?.[0]}</p>
        </div>
    );
}

export default BookCard;