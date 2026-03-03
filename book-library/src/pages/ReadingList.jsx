import { useApp } from "../context/AppContext";

function ReadingList() {
    const { readingList, updateStatus } = useApp();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">My Reading List</h1>

            {readingList.map(book => (
                <div key={book.key} className="bg-white p-4 rounded shadow mb-4">

                    <h3 className="font-bold">{book.title}</h3>

                    <select
                        value={book.status}
                        onChange={(e) => updateStatus(book.key, e.target.value)}
                        className="mt-2 p-2 border rounded"
                    >
                        <option>Want to Read</option>
                        <option>Currently Reading</option>
                        <option>Completed</option>
                    </select>
                </div>        
            ))}
        </div>
    );
}

export default ReadingList;