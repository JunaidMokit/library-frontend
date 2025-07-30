import { createSlice, isAction, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "./BookType";
import type { RootState } from "./Store";


interface InitialState {
    books: IBook[],
}

const initialState: InitialState = {
    books: [
        {
            title: "Good Book",
            author: "Good Man",
            genre: "FICTION",
            isbn: "978-0-123456-06-7",
            description: "The empowering journey of a Bang",
            copies: 4,
            available: true,



        },
        {
            title: "Good Book 2",
            author: "Good Man",
            genre: "FICTION",
            isbn: "978-0-123456-06-7",
            description: "The empowering journey of a Bang",
            copies: 4,
            available: true,



        }
    ]
}

const bookSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            const taskData = action.payload
            state.books.push(taskData)
        },
    }
})

export const selectBooks = (state: RootState) => {
    return state.lib.books;
}
export default bookSlice.reducer;