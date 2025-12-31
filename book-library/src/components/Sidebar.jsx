// Sidebar with responsive drawer on mobile
// - Desktop: md:w-64 fixed column.
// - Mobile: slide-in with backdrop.
// - Donate link opens in new tab.

import { NavLink } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Library' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/downloads', label: 'Downloads' },
    { to: '/profile', label: 'Profile' },
    { to: '/settings', label: 'Settings' },
    { to: '/https://example.com/donate', label: 'Donate', external: true },
];

function Sidebar({ open, onClose }) {
    return (
        <>
            {/* Desktop */}
            <aside className="hidden md:block md:w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700
            min-h-screen p-4 sticky top-0">
                <h1 className="text-2xl font-bold mb-6">B-lib</h1>
                <nav className="space-y-2">
                    {navItems.map((item) =>
                        item.external ? (
                            <a
                                key={item.label}
                                href={item.to}
                                target="_blank"
                                rel="nonreferrer"
                                className="block px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
                            >
                                {item.label}
                            </a>    
                        ) : (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700 ${
                                        isActive ? 'bg-blue-600 text-white' : ''
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>    
                        )
                    )}
                </nav>
            </aside>

            {/* Mobile drawer */}
            <div className={`md:hidden fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                    onClick={onClose}
                />
                <div
                   role="dialog"
                   aria-modal="true"
                   className={`absolute top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4 transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <h1 className="text-2xl font-bold mb-6">B-lib</h1>
                    <nav className="space-y-2">
                        {navItems.map((item) =>
                            item.external ? (
                                <a
                                    key={item.label}
                                    href={item.to}
                                    target="_blank"
                                    rel="nonreferrer"
                                    className="block px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
                                    onClick={onClose}
                                >
                                    {item.label}
                                </a>    
                            ) : (
                                <NavLink
                                    key={item.label}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700 ${
                                            isActive ? 'bg-blue-600 text-white' : ''
                                        }`
                                    }
                                    onClick={onClose}
                                >
                                    {item.label}
                                </NavLink>
                            )
                        )}
                    </nav>
                </div>    
            </div>       
        </>
    );
}

export default Sidebar;