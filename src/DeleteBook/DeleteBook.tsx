import { Link } from "react-router";
import { useDeleteBookMutation } from "../Api/baseApi";


export default function DeleteBook({ book }: { book: any }) {
    const [deleteBook] = useDeleteBookMutation();

    const handleDelete = async () => {
        const confirmed = window.confirm(`Are you sure you want to delete "${book.title}"?`);
        if (!confirmed) return;

        try {
            await deleteBook(book._id).unwrap();
            alert("Book deleted successfully!");
        } catch (err) {
            alert("Failed to delete book");
        }
    };

    return (
        <div className="border p-4 rounded-md shadow">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>{book.author}</p>

            <div className="flex space-x-2 mt-2">
                <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-3 py-1 rounded-2xl"
                >
                    Delete
                </button>

                <Link to={`/edit-book/${book._id}`}>
                    <button className="bg-yellow-600 text-white px-3 py-1 rounded-2xl">
                        Edit
                    </button>
                </Link>

                <button className="bg-green-600 text-white px-3 py-1 rounded-2xl">
                    Borrow
                </button>
            </div>
        </div>
    );
}
