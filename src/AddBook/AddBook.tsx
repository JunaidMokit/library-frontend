import { useNavigate } from "react-router";
import { useAddBookMutation } from "../Api/baseApi";
import { useState } from "react";

export default function AddBook() {
    const [addBook] = useAddBookMutation();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: 1,
        available: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "number") {
            setForm({ ...form, [name]: Number(value) });
        } else if (type === "checkbox") {
            setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addBook(form).unwrap();
            alert("Book added successfully!");
            setForm({
                title: "",
                author: "",
                genre: "",
                isbn: "",
                description: "",
                copies: 1,
                available: true,
            });
            navigate("/books")
        } catch (err) {
            console.error(err);
            alert("Failed to add book");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Add New Book</h2>

            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-md"
                required
            />

            <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author"
                className="w-full px-4 py-2 border rounded-md"
                required
            />

            <select
                name="genre"
                value={form.genre}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
            >
                <option value="">Select Genre</option>
                <option value="FICTION">Fiction</option>
                <option value="NONFICTION">Non-fiction</option>
                <option value="SCIENCE">Science</option>
                <option value="HISTORY">History</option>
            </select>

            <input
                type="text"
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
                placeholder="ISBN"
                className="w-full px-4 py-2 border rounded-md"
                required
            />

            <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full px-4 py-2 border rounded-md"
                required
            />

            <input
                type="number"
                name="copies"
                value={form.copies}
                onChange={handleChange}
                placeholder="Number of Copies"
                className="w-full px-4 py-2 border rounded-md"
                min={1}
                required
            />

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="available"
                    checked={form.available}
                    onChange={handleChange}
                    className="w-4 h-4"
                />
                <label htmlFor="available" className="text-sm">Available</label>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
                Add Book
            </button>
        </form>
    );
}
