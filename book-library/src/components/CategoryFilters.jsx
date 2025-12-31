// Category chips
// - Single-select; Library listens and updates filter.

const categories = [
    'All',
    'Productivity',
    'Business',
    'Fiction',
    'Discipline',
    'Communication',
    'Personal Finance',
    'Biography',
];

function CategoryFilters() {
    const onSelect = (cat) => {
        window.dispatchEvent(new CustomEvent('b-lib:category', { detail: cat }));
    };

    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    role="button"
                    aria-pressed="false"
                    className="px-3 py-1 rounded-full border dark:border-gray-700 hover:bg-blue-50 
                    dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => onSelect(cat)}
                >
                    {cat}
                </button>    
            ))}
        </div>
    )
}

export default CategoryFilters;