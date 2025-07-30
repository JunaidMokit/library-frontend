

function Footer() {
    return (
        <div>
            <footer className="w-7xl m-auto bg-gray-900 text-white py-8 mt-16">
                <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Library Management System</h2>
                        <p className="text-gray-400">A digital platform to manage books, borrowing, and tracking efficiently.</p>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-300">Powered by MERN Stack</p>
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Footer
