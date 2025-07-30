import { useParams } from "react-router";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../Api/baseApi";

export default function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetBookByIdQuery(id);
    const [updateBook] = useUpdateBookMutation();

    const [form, setForm] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: 0,
        available: true,
    });

    useEffect(() => {
        if (data?.data) {
            setForm(data.data);
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, type, value } = e.target;
        let newVal: any = type === "number" ? Number(value) : value;
        if (type === "checkbox") newVal = (e.target as HTMLInputElement).checked;

        const updated = { ...form, [name]: newVal };
        if (name === "copies" && Number(value) === 0) updated.available = false;
        setForm(updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateBook({ id, ...form }).unwrap();
            alert("Book updated!");
            navigate("/books");
        } catch (err) {
            alert("Failed to update book");
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4">
            <h2 className="text-2xl font-semibold text-center">Edit Book</h2>

            <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full px-4 py-2 border rounded" />
            <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Author" className="w-full px-4 py-2 border rounded" />
            <select name="genre" value={form.genre} onChange={handleChange} className="w-full px-4 py-2 border rounded">
                <option value="">Select Genre</option>
                <option value="FICTION">Fiction</option>
                <option value="NONFICTION">Non-fiction</option>
                <option value="SCIENCE">Science</option>
                <option value="HISTORY">History</option>
            </select>
            <input type="text" name="isbn" value={form.isbn} onChange={handleChange} placeholder="ISBN" className="w-full px-4 py-2 border rounded" />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 border rounded" />
            <input type="number" name="copies" value={form.copies} onChange={handleChange} placeholder="Copies" min={0} className="w-full px-4 py-2 border rounded" />
            <div className="flex items-center space-x-2">
                <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
                <label>Available</label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Update Book</button>
        </form>
    );
}
