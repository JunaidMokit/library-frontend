


import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../All Books/AllBooks";
import AddBook from "../AddBook/AddBook";
import Edit from "../EditBook/Edit";
import EditBook from "../EditBook/EditBook";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
            }


        ]
    },
]);

export default router;