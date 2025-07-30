import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-semibold text-gray-800">Library System</div>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <Link to="/books" className="hover:text-blue-600 transition">
                            All Books
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-book" className="hover:text-blue-600 transition">
                            Add Book
                        </Link>
                    </li>
                    <li>
                        <Link to="/borrow-summary" className="hover:text-blue-600 transition">
                            Borrow Summary
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
