// App shell: sidebar + header + routed pages
// - Manages dark mode and grid density (persisted via LocalStorage).
// - Mobile drawer for sidebar

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Library from './pages/Library.jsx';
import Favorites from './pages/Favorites.jsx';
import Downloads from './pages/Downloads.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import BookDetails from './pages/BookDetails.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage('booklibrary_dark', false);
  const [gridDensity, setGridDensity] = useLocalStorage('booklibrary_grid', 'comfortable'); // 'comfortable' | 'compact'

  // Apply Tailwind dark mode to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1">
          <Header onOpenSidebar={() => setSidebarOpen(true)} />
          <main className="p-4 md:p-6">
            <Routes>
              <Route path="/" element={<Library gridDensity={gridDensity} />} />
              <Route path="/favorites" element={<Favorites gridDensity={gridDensity} />} />
              <Route path="/downloads" element={<Downloads gridDensity={gridDensity} />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/settings"
                element={
                  <Settings
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    gridDensity={gridDensity}
                    setGridDensity={setGridDensity}
                  />                   
                }
              />
              {/* Details page can receive state or fetch by ISBN */}
              <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
          </main>  
        </div>
      </div>
    </div> 
  );
}

export default App();