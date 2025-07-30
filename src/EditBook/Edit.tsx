import { useState } from "react";
import { useGetBooksQuery } from "../Api/baseApi";
import EditBook from "./EditBook";



export default function BookList() {
    const { data } = useGetBooksQuery(undefined);
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div>
            {data?.data?.map((book: any) => (
                <div key={book._id}>
                    <h3>{book.title}</h3>
                    <button onClick={() => setSelectedBook(book)}>Edit</button>
                </div>
            ))}

            {selectedBook && <EditBook book={selectedBook} onClose={() => setSelectedBook(null)} />}
        </div>
    );
}
