import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="text-2xl font-bold text-blue-700 tracking-wide">
                        Library System
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <Link to="/books" className="hover:text-blue-600 transition duration-200">
                            All Books
                        </Link>
                        <Link to="/add-book" className="hover:text-blue-600 transition duration-200">
                            Add Book
                        </Link>
                        <Link to="/borrow-summary" className="hover:text-blue-600 transition duration-200">
                            Borrow Summary
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
