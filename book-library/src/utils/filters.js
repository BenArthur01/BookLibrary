// Helpers for search and category filtering.

export function searchBooks(books, term) {
    if (!term) return books;
    const q = term.toLowerCase();
    return books.filter(
        (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
}

export function filterByCategory(books, category) {
    if (!category || category === 'All') return books;
    return books.filter((b) => b.categories.includes(category));
}