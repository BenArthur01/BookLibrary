// Stictly header with hamburger (mobile), search bar, category chips.
// Search/category are handled inside Library via props.

import SearchBar from "./SearchBar.jsx";
import CategoryFilters from "./CategoryFilters.jsx";
import { useLocation } from "react-router-dom";

function Header({ onOpenSidebar }) {
    const location = useLocation();
    const showFilters = location.pathname === '/';

    return (
        <header className="sticky top-0 z-30 bg-white/80 dark: bg-gray-900/80 backdrop-blur border-b dark:border-gray-700">
            <div className="flex items-center gap-3 p-3">
                <button
                    className="md:hidden p-2 rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Open sidebar"
                    aria-expanded="false"
                    onClick={onOpenSidebar}
                >
                    <span className="block w-5 h-0.5 bg-current mb-1"></span>
                    <span className="block w-5 h-0.5 bg-current mb-1"></span>
                    <span className="block w-5 h-0.5 bg-current"></span>
                </button>  

                <div className="flex-1">
                    <SearchBar />
                </div>  
            </div>

            {showFilters && (
                <div className="px-3 pb-3">
                    <CategoryFilters />
                </div>
            )}
        </header>
    );
}

export default Header;