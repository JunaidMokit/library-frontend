import { useParams, useNavigate } from "react-router";
import { useGetBookByIdQuery, useBorrowBookMutation } from "../Api/baseApi";
import { useState } from "react";

export default function BorrowPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = useGetBookByIdQuery(id);
    const [borrowBook] = useBorrowBookMutation();
    const book = data?.data;

    const [quantity, setQuantity] = useState(1);
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (quantity > book.copies) {
            alert("Cannot borrow more than available copies!");
            return;
        }

        // const updatedCopies = book.copies - quantity;
        // const available = updatedCopies > 0;

        try {
            await borrowBook({
                book: id,
                quantity,
                dueDate,
            });

            alert("Book borrowed successfully!");
            navigate("/borrow-summary");
        } catch (err: any) {
            console.error("Borrow Error:", err);
            alert("Borrow failed.");
        }
    };

    if (!book) return <p>Loading...</p>;

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow mt-10">
            <h2 className="text-2xl font-bold mb-4">Borrow: {book.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min={1}
                        max={book.copies}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Borrow Now
                </button>
            </form>
        </div>
    );
}
