import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

    const [readingList, setReadingList] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const addToReadingList = (book) => {
        setReadingList([...readingList, {...book, status: "Want to Read" }]);
    };

    const updateStatus = (key, status) => {
        setReadingList(readingList.map(book =>
            book.key === key ? { ...book, status } : book
        ));
    };

    return (
        <AppContext.Provider value={{
            readingList,
            addToReadingList,
            updateStatus,
            darkMode,
            setDarkMode
        }}>
            {children}
        </AppContext.Provider>   
    );
}

export const useApp = () => useContext(AppContext);