import { useState, useEffect } from "react";
import {
    FaBook,
    FaHeart,
    FaDownload,
    FaDonate,
    FaUser,
    FaCog,
    FaSearch,
    FaSlidersH,
    FaBars,
} from "react-icons/fa";
import BookCard from "../components/books/BookCard";

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    const categories = [
        "All",
        "Business",
        "Productivity",
        "Discipline",
        "FInance",
        "Personal Development",
        "Biography"
    ];

    const books = [
        { id: 1, title: "Atomic habits", image: "https://covers.openlibrary.org/b/id/10521270-L.jpg" }, 
        { id: 1, title: "Rich Dad Poor Dad", image: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
        { id: 1, title: "Boundaries", image: "https://covers.openlibrary.org/b/id/10594765-L.jpg" },
        { id: 1, title: "The Subtle Art of Not Giving a F*ck", image: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
    ];

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500); // Simulate API load
    }, []);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">

            {/* SIDEBAR */}
            <aside
                className={`bg-blue-800 text-white flex-col transition-all duration-300
                ${sidebarOpen ? "w-64" : "w-20"}
                hidden md:flex`}
            >
                <div className="flex items-center jusify-between p-6">
                    {sidebarOpen && <h1 className="text-xl font-bold">📚 B-Lib</h1>}
                    <FaBars
                        className="cursor-pointer"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    />
                </div>

                <nav className="flex flex-col gap-4 px-4 text-sm">
                    <SidebarItem icon={<FaBook />} label="Library" open={sidebarOpen} active />
                    <SidebarItem icon={<FaHeart />} label="Favorites" open={sidebarOpen} />
                    <SidebarItem icon={<FaDownload />} label="Downloads" open={sidebarOpen} />
                    <SidebarItem icon={<FaDonate />} label="Donate" open={sidebarOpen} />

                    <div className="mt-auto space-y-4 mb-6">
                        <SidebarItem icon={<FaUser />} label="Profile" open={sidebarOpen} />
                        <SidebarItem icon={<FaCog />} label="Settings" open={sidebarOpen} />
                    </div>
                </nav>
            </aside>

            {/* Mobile TOP BAR */}
            <div className="md-hidden fixed top-0 left-0 right-0 bg-white shadow p-4
            flex justify-between item-center z-50">
                <FaBars onClick={() => setSidebarOpen(!sidebarOpen)} />
                <h1 className="font-bold">📚 B-Lib</h1>
                <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            </div>

            {/* MAIN */}
            <main className="flex-1 overflow-y-auto p-6 md:p-8 mt-16 md:mt-0">

                {/* SEARCH BAR */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

                    <div className="flex items-center gap-3 w-full md:w-xl">
                        <div className="relative w-full">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for..."
                                className="w-full pl-12 pr-4 py-2 rounded-full border 
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="p-2 border rounded-full hover:bg-gray-200">
                            <FaSlidersH />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <FaCog className="cursor-pointer hover:text-blue-600" />
                        <img
                            src="https://i.pravatar.cc/40"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                    </div>
                </div>

                {/* CATEGORIES */}
                <div className="flex gap-3 overflow-x-auto pb-3 mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition
                                ${
                                    activeCategory === cat
                                    ? "bg-blue-700 text-white"
                                    : "bg-white border hover:bg-blue-50"
                                }`
                            } 
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 📚 BOOK GRID */}
                {loading ? (
                    <BookSkeleton />
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                        {books.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

/* SIDEBAR ITEM */
function SidebarItem({ icon, label, open, active }) {
    return (
        <div
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
                ${active ? "bg-white text-blue-800 font-semibold" : "hover:bg-blue-700"}
            `}
        >
            {icon}
            {open && <span>{label}</span>}
        </div>
    );
}

