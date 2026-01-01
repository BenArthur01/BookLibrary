// Settings page features the dark mode, grid density, reset data

import useLocalStorage from "../hooks/useLocalStorage.js";
import seedBooks from '../data/books.js';

function Settings({ darkMode, setDarkMode, gridDensity, setGridDensity }) {
    const [, setBooks] = useLocalStorage('booklibrary_books', seedBooks);

    const resetData = () => {
        localStorage.removeItem('booklibrary_books');
        localStorage.removeItem('booklibrary_dark');
        localStorage.removeItem('booklibrary_grid');
        setBooks(seedBooks);
        alert('Data reset. Reload the page to see defaults.')
    };

    return (
        <section aria-label="Settings" className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={(event) => setDarkMode(event.target.checked)}
                        aria-label="Toggle dark mode"
                    />      
                    <span>Dark mode</span>    
                </label>
            </div>

            <div className="flex items-center gap-4">
                <span>Grid density:</span>
                <select
                    value={gridDensity}
                    onChange={(event) => setGridDensity(event.target.value)}
                    className="px-2 py-1 rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Grid density"
                >
                    <option value="confortable">Comfortable</option>
                    <option value="compact">Compact</option>
                </select>    
            </div>

            <button onClick={resetData} className="px-3 py-2 rounded bg-red-600 text-white">
                Reset data
            </button>
        </section>
    );
}

export default Settings;