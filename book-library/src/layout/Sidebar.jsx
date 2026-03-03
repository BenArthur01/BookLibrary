// NavLInk + Donate page to new tab
import { NavLink } from "react-router-dom";
import {
    FaBook,
    FaHeart,
    FaDownload,
    FaDonate,
    FaUser,
    FaCog,
} from "react-icons/fa";

function Sidebar() {
    const linkStyle =
        "flex items-center gap-3 px-4 py-2 rounded-lg transition";

    const activeStyle = 
        "bg-white text-blue-800 font-semibold";
        
    return (
        <aside className="w-64 bg-blue-800 text-white flex flex-col p-6">
            <h1 className="text-2xl font-bold mb-8">📚 B-lib</h1>

            <nav className="flex flex-col gpa-3 text-sm">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-700"}`
                    }
                >
                    <FaBook /> Library
                </NavLink>  

                <NavLink to="/genres" className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-700"}`
                }>
                    <FaBook /> Genres 
                </NavLink>  

                <NavLink to="/favorites" className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-700"}`
                }>
                    <FaHeart /> Favorites 
                </NavLink>  

                <NavLink to="/downloads" className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-700"}`
                }>
                    <FaDownload /> Downloads 
                </NavLink>  

                {/* Donate - Open New Tab */}
                <a
                    href="https://www.paypal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkStyle} hover:bg-blue-700`}
                >
                    <FaDonate /> Donate
                </a>

                <div className="mt-auto space-y-3">
                    <NavLink to="/profile" className={({ isActive }) =>
                        `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-700"}`
                    }>
                        <FaUser /> Profile 
                    </NavLink>  

                    <NavLink to="/settings" className={({ isActive }) =>
                        `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-700"}`
                    }>
                        <FaCog /> Settings 
                    </NavLink>  
                </div>

            </nav>
        </aside>
    );    
}

export default Sidebar;