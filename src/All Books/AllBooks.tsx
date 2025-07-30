import { Link } from "react-router";
import { useGetBooksQuery } from "../Api/baseApi";
import { selectBooks } from "../Store and Book/BookSlice"
import { useAppSelector } from "../Store and Book/hooks"
import Book from "./Book";

function AllBooks() {
  const books = useAppSelector((state) => selectBooks(state));
  const { data } = useGetBooksQuery(undefined);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Library Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.data?.map((book: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {book.title}
            </h2>
            <p className="text-gray-600 mb-1"><span className="font-medium">Author:</span> {book.author}</p>
            <p className="text-gray-600 mb-1"><span className="font-medium">Genre:</span> {book.genre}</p>
            <p className="text-gray-600 mb-1"><span className="font-medium">ISBN:</span> {book.isbn}</p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium"> Status:</span> {book.available ? 'Available' : 'Not Available'}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Added on: {new Date(book.createdAt).toLocaleDateString()}
            </p>
            <div className="flex space-x-1.5 mt-2">
              <button className="bg-red-600 p-1 rounded-2xl">Delete</button>
              <Link to={`/edit-book/${book._id}`}><button className="bg-yellow-600 p-1 rounded-2xl">Edit</button></Link>
              <button className="bg-green-600 p-1 rounded-2xl">Borrow</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default AllBooks
