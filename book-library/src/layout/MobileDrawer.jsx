import Sidebar from "./Sidebar";

function MobileDrawer({ open, setOpen }) {
    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-blue-800 z-50
                    transform transition-transform duration-300 md:hidden
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Sidebar /> 
            </div>    
        </>
    );
}

export default MobileDrawer;