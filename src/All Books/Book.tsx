import type { IBook } from "../Store and Book/BookType"

interface IProps {
    book: IBook;
}
function Book({ book }: IProps) {
    return (
        <div>
            <h1>This are also book</h1>
        </div>
    )
}

export default Book
