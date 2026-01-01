// Search input:
// - Emits a custom event that Library listens to (simple communication without prop drilling).

function SearchBar() {
    return (
        <input
            type="search"
            aria-label="Search books"
            placeholder="Search by title or author..."
            className="w-full px-3 py-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
                const term = e.target.value;
                window.dispatchEvent(new CustomEvent('booklibrary:search', { detail: term}));
            }}
        />    
    );
}

export default SearchBar;