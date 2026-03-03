// Desktop + Mobile 
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";
import { FaBars } from "react-icons/fa";

function Layout() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">

            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Mobile Drawer */}
            <MobileDrawer open={open} setOpen={setOpen} />

            <main className="flex-1 overflow-y-auto p-6">
                {/* Mobile Topbar */}
                <div className="md:hidden mb-6 flex justify-between items-center">
                    <FaBars onClick={() => setOpen(true)} className="text-xl" />
                    <h1 className="font-bold text-lg">B-lib</h1>    
                </div>

                <Outlet />
            </main>
        </div>
    );
}

export default Layout;