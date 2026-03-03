function BookDetails() {

    const fetchDetails = async (isbn) => {
        const response = await fetch(
            `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
        );
        const data = await response.json();
        return data[`ISBN:${isbn}`];
    }
}

export default BookDetails;