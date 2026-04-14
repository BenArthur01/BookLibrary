import { useState } from "react";
import {
    FaDownload,
    FaFilePdf,
    FaFileAlt,
    FaSearch,
    FaTrash,
} from "react-icons/fa";

const DownloadsPage = () => {
    const [search, setSearch] = useState("");

    // Dummy downloaded book (replace with real data later)
    const downloads = [
        {
            id: 1,
            title: "Atomic Habits",
            author: "James Clear",
            type: "PDF",
            size: "2.4 MB",
            cover: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
        },
        {
            id: 2,
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            type: "EPUB",
            size: "1.8 MB",
            cover: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
        },
    ];

    const filtered = downloads.filter(
        (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SideBar */}
            <aside className="hidden md:flex flex-col w-20 bg-blue-700 text-white items-center py-6 space-y-6">
                <FaDownload size={22} />
                <span className="text-xs">Downloads</span>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    📥 Downloads
                </h1>

                {/* Search */}
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow mb-6">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search downloaded books..."
                        className="w-full outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div> 

                {/* Downloads Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center mt-20 text-gray-500">
                        <p>No downloads found 📭</p>
                    </div>
                ): (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filtered.map((book) => (
                            <div
                                key={book.id}
                                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                            >
                                {/* Cover */}
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-full h-48 object-cover rounded-lg mb-3"
                                />

                                {/* Info */}
                                <h2 className="font-semibold text-gray-800 text-sm">
                                    {book.title}
                                </h2>
                                <p className="text-xs text-gray-500 mb-2">
                                    {book.author}
                                </p>        

                                {/* File Type */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                        <FaFilePdf />
                                        {book.type}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        <FaFileAlt />
                                        {book.size}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-between items-center">
                                    <button className="flex items-center gap-1 text-blue-600 text-sm hover:underline">
                                        <FaDownload /> Open
                                    </button>

                                    <button className="text-red-500 hover:text-red-600">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default DownloadsPage;