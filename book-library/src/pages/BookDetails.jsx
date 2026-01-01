// Book Details page:
// - It receives `state.book` from (BookCard).
// - If book has an ISBN (_isbn), it fetches richer details from Open Library Books API.
// - It also shows the description, publish date, publisher, number of pages, subjects if available.

import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-dom';

function BookDetails() {
    const { state } = useLocation();
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [error, setError] = useState('');

    const base = state?.book || null;

    useEffect(() => {
        const fetchDetailsByISBN = async(isbn) => {
            try {
                const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch book details');
                const data = await response.json();
                const key = `ISBN:${isbn}`;
                const info = data[key];

                if (!info) {
                    setDetails(null);
                    return;
                }

                setDetails({
                    title: info.title,
                    authors: Array.isArray(info.authors) ? info.authors.map((a) => a.name).join(', ') : base?.author || 'Unknown',
                    coverUrl: info.cover?.medium || base?.coverUrl,
                    description:
                        typeof info.description === 'string'
                            ? info.description
                            : info.description?.value || 'No description available.',
                    publish_date: info.publish_date || 'Unknown',
                    publishers: Array.isArray(info.publishers) ? info.publishers.map((p) => p.name || p).join(', ') : 'Unknown',
                    pages: info.number_of_pages || "-",
                    subjects: Array.isArray(info.subjects) ? info.subjects.map((s) => (s.name || s)).slice(0, 8) : [],
                    isbn,
                });
            } catch (error) {
                setError(error.message || 'Unexpected error');
            }
        };

        if (base?._isbn) {
            fetchDetailsByISBN(base._isbn);
        } else {
            setDetails({
                title:base?.title || 'Unknown',
                authors: base?.author || 'Unknown',
                coverUrl: base?.coverUrl,
                description: base?.description || 'No description available.',
                publish_date: '-',
                publishers: '-',
                pages: '-',
                subjects: base?.categories || [],
                isbn: '-',
            });
        }
        // esliint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!base && !details) {
        return <p className="text-sm text-gray-600 dark:text-gray-300">No book data found.</p>;
    }

    const d = details || base;

    return (
        <section aria-label="Book details" className="max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-4">
                <img
                    src={d.coverUrl}
                    alt={`${d.title} cover`}
                    className="w-48 h-64 object-cover rounded-lg border dark:border-gray-700"
                />
                <div>
                    <h2 className="text-2xl font-bold">{d.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">By {id.authors}</p>
                    <p className="mt-2">{d.description}</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div><span className="font-semibold">Publish date:</span> {d.publish_date}</div>
                        <div><span className="font-semibold">Publisher:</span> {d.publishers}</div>
                        <div><span className="font-semibold">Pages:</span> {d.pages}</div>
                        <div><span className="font-semibold">ISBN:</span> {d.isbn}</div>
                    </div>
                    {Array.isArray(d.subjects) && d.subjects.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {d.subjects.map((s) => (
                                <span key={s} className="text-xs px-2 py-0.5 rounded-full border dark:border-gray-700">{s}</span>
                            ))}
                        </div>    
                    )}
                    {error && <p className="mt-2 text-sm text-red-600">Error: {error}</p>}
                </div>    
            </div>
        </section>
    );
}

export default BookDetails;