import { useState } from "react";

function SearchBar({ setBooks }) {
    const [query, setQuery] = useState("");

    const searchBooks = async () => {
        const response = await fetch(
            `https://openlibrary.org/search.json?title=${query}`
        );
        const data = await response.json();
        setBooks(data.docs.slice(0, 12));
    };


    return (
        <div className="flex gap-3 w-full max-w-3xl mx-auto">
            <input
                type="text"
                placeholder="Searck books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 y-2 rounded-full border 
                focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
                onClick={searchBooks}
                className="bg-blue-700 text-white px-6-rounded-lg"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;