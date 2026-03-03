import { useState } from "react";
import {
    FaSearch,
    FaHeart,
    FaDownload,
    FaStar,
    FaBars,
    FaTimes,
    FaHome,
    FaBook,
    FaSpinner,
} from "react-icons/fa";

function Favorites() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Search Books function
    const searchBooks = async () => {
        if (!search.trim()) return;

        setLoading(true);

        try {
            // Search by Title
            let response = await fetch(
                `https://openlibrary.org/search.json?title=${search}`
            );
            let data = await response.json();

            // If no title results > search by Author
            if (data.docs.length === 0) {
                response = await fetch(
                    `https://openlibrary.org/search.json?author=${search}`
                );
                data = await response.json();
            }

            setBooks(data.docs.slice(onabort, 15));
        } catch (error) {
            console.error("Error fetching books:", error);
        }

        setLoading(false);
    };

    return (
        <div className="flex min-h-screen">

            {/* ================ DESKTOP SIDEBAR =============== */}
            <div className="hidden md:flex flex-col w-20 bg-blue-900 text-white items-center py-6 space-y-10">
                <FaHome className="cursor-pointer hover:text-blue-300" size={18} />
                <FaBook className="cursor-pointer hover:text-blue-300" size={18} />
                <FaHeart className="text-blue-300" size={18} />
            </div>

            {/* ================== MOBILE SIDEBAR =============== */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition--transform duration-300 md:hidden z-50`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="font-bold text-lg">B-Lib</h2>
                    <FaTimes
                        className="cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                < div className="flex flex-col space-y-6 p-6">
                    <FaHome className="cursor-pointer" />
                    <FaBook className="cursor-pointer" />
                    <FaHeart className="text-blue-300" />
                </div>
            </div>    

            {/* ================= MAIN CONTENT ==================== */}
            <div className="flex-1 bg-blue-800 text-white p-6 md:p-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

                    <div className="flex items-center gap-3">
                        <FaBars
                            className="md:hidden cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                        <div>
                            <p className="text-sm opacity-80">Favorites</p>
                            <h1 className="text-2xl md:text-3xl font-semibold">
                                Find your saved books here.
                            </h1>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72">
                        <input 
                            type="text"
                            placeholder="Search favorites..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            onKeyDown={(event) => event.key === " Enter" && searchBooks()}
                            className="w-full py-2 pl-4 pr-10 rounded-full text-gray-700 focus:outline-none"
                        />
                        <FaSearch
                            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                            onClick={searchBooks}
                        />
                    </div>
                </div>

                {/* Loading Spinner */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <FaSpinner className="animate-spin text-3xl" />
                    </div>    
                )}

                {/* Books Grid */}
                {!loading && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                        {books.map((book, index) => {
                            const coverUrl = book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                            : "https://via.placeholder.com/150x220?text=No+Cover";

                            return (
                                <div
                                    key={index}
                                    className="bg-white text-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition flex flex-col"
                                >
                                    {/* Cover */}
                                    <img
                                        src={coverUrl}
                                        alt={book.title}
                                        className="h-40 object-cover rounded-md mb-3"
                                    />

                                    {/* Title */}
                                    <h3 className="font-semibold text-sm line-clamp-1">
                                        {book.title}
                                    </h3>

                                    {/* Author */}
                                    <p className="text-xs text-gray-500 mb-2">
                                        {book.author_name?.[0] || "Unknown Author"}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex mb-3">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className="text-yellow-400 text-xs mr-1"
                                            />
                                        ))}
                                    </div>

                                    {/* Actions */}    
                                    <div className="mt-auto flex justify-between pt-2 border-t">
                                        <button className="text-blue-600 hover:text-red-500 transition">
                                            <FaHeart />
                                        </button>

                                        <button className="text-blue-600 hover:text-blue-800 transition">
                                            <FaDownload />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Empty State */}
                {!loading && books.length === 0 && (
                    <div className="text-center mt-20 opacity-70">
                        No favorites found. Try searching for a book.
                    </div>
                )}
            </div>
        </div>            
    );
}

export default Favorites;