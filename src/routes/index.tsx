


import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../All Books/AllBooks";
import AddBook from "../AddBook/AddBook";
import EditBook from "../EditBook/EditBook";

import BorrowPage from "../BorrowBook/BorrowPage";
import BorrowSummary from "../BorrowBook/BorrowSummary";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AllBooks></AllBooks>
            },
            {

                path: "books",
                element: <AllBooks></AllBooks>
            },
            {
                path: "add-book",
                element: <AddBook></AddBook>
            },
            {
                path: "edit-book/:id",
                element: <EditBook></EditBook>
            },
            {
                path: "borrow-book/:id",
                element: <BorrowPage></BorrowPage>
            },
            {
                path: "borrow-summary",
                element: <BorrowSummary></BorrowSummary>
            }



        ]
    },
]);

export default router;