


import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../All Books/AllBooks";
import AddBook from "../AddBook/AddBook";

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
            }

        ]
    },
]);

export default router;