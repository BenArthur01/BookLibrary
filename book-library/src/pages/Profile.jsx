// A Simple page with avatar and favorite list

import useLocalStorage from "../hooks/useLocalStorage.js";
import seedBooks from '../data/books.js';

function Profile() {
    const [books] = useLocalStorage('booklibrary_books', seedBooks);
    const favorites = books.filter((b) => b.isFavorite);
    
    return (
        <section aria-label="Profile" className="space-y-4">
            <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/profile/96" alt="User avatar" className="w-16 h-16 rounded-full object-cover" />
                <div>
                    <h2 className="text-xl font-semibold">Reader</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Book-Library member</p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold">Favorite books</h3>
                {favorites.length === 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-300">No favorites yet.</p>
                ) : (
                    <ul className="list-disc pl-5">
                        {favorites.map((b) => (
                            <li key={b.id}>
                                {b.title} - <span className="text-sm">{b.author}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div> 
        </section>
    );
}

export default Profile;