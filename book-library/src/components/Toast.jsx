// Simple toast with auto-dismiss after 2s.

import { useEffect } from "react";

function Toast({ message, onClose }) {
    useEffect(() => {
        if (!message) return;
        const t = setTimeout(onClose, 2000);
        return () => clearTimeout(t);
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-black text-white px-3 py2 rounded shadow-lg">
            {message}
        </div>
    );
}

export default Toast;