import { useApp } from "../../context/AppContext";

function Navbar() {
    const { darkMode, setDarkMode } = useApp();

    return (
        <div className="flex justify-between p-4 bg-primary text-white">
            <h1>Book Library</h1>

            <button
                onClick={() => {
                    setDarkMode(!darkMode);
                    document.documentElement.classList.toggle("dark");
                }}
            >
                {darkMode ? "Light" : "Dark"}
            </button>    
        </div>
    );
}
export default Navbar;