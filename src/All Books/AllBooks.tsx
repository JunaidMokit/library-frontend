import { Link } from "react-router";
import { useDeleteBookMutation, useGetBooksQuery } from "../Api/baseApi";


import Swal from "sweetalert2";


function AllBooks() {

  const { data } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();


  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This book will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire("Deleted!", "The book has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the book.", "error");
      }
    }
  };




  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 max-w-7xl m-auto">
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
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={() => handleDelete(book._id)}
                className="px-4 py-1 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition"
              >
                Delete
              </button>

              <Link to={`/edit-book/${book._id}`}>
                <button
                  className="px-4 py-1 bg-yellow-500 text-white text-sm rounded-full hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
              </Link>

              <Link to={`/borrow-book/${book._id}`}>
                <button
                  className="px-4 py-1 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition"
                >
                  Borrow
                </button>
              </Link>
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}

export default AllBooks
