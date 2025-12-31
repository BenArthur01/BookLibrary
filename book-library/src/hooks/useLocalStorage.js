// LocalStorage hook: persist state across reloads.
// - JSON.parse on load; JSON stringify on save.

import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw != null ? JSON.parse(raw) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // storage maybe unavailable; ignore
        }
    }, [key, value]);

    return [value, setValue];
}