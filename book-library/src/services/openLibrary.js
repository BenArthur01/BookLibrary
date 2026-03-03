import axios from "axios";

const BASE_URL = "https://openlibrary.org";

export const searchBooks = async (query) => {
    const response = await axios.get(`${BASE-URL}/search.json?q=${query}`);
    return response.data.docs;
};

export const getBookDetails = async (isbn) => {
    const response = await axios.get(
        `${BASE_URL}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
    ); 
    return response.data[`ISBN:${isbn}`];
};