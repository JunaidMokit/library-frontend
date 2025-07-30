# Library Management System

This is a full-stack Library Management System built with React, TypeScript, Redux Toolkit (RTK Query), Express, and MongoDB. It allows users to manage a collection of books, including functionality to add, edit, delete, and borrow books, along with viewing a summary of borrowed items.

## Features

- View all books in a responsive grid layout
- Add new books with title, author, genre, ISBN, description, and availability
- Edit and delete existing books
- Borrow books by specifying quantity and due date  
  - Prevent borrowing more than available copies  
  - Automatically update availability status when no copies left
- View a borrow summary with total quantity borrowed per book
- Interactive confirmation dialogs using SweetAlert2
- Data updates in real-time without page reloads using RTK Query cache invalidation

## Technologies Used

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Redux Toolkit & RTK Query

### Backend

- Express.js
- MongoDB
- Mongoose

## API Endpoints

### Book Management

- `GET /api/books` – Retrieve all books  
- `POST /api/books` – Add a new book  
- `PATCH /api/books/:id` – Update a book  
- `DELETE /api/books/:id` – Delete a book  
- `GET /api/books/:id` – Get a single book by ID  

### Borrow Management

- `POST /api/borrow` – Borrow a book (reduces copies and updates availability)  
- `GET /api/borrow` – Aggregated borrow summary  

## Folder Structure

src/
├── AllBooks/
├── AddBook/
├── EditBook/
├── BorrowBook/
├── Navbar/
├── Footer/
├── Store and Book/
├── Api/
├── routes/
├── App.tsx
├── main.tsx


## Special Logic

- Borrowing logic is validated on both client and server side
- Borrow summary uses MongoDB aggregation to calculate total borrowed quantity
- State management handled with Redux Toolkit and queries are auto-synced after any mutation

## Getting Started

### Backend

1. Install dependencies:
   ```bash
   npm install
Start server:

bash
Copy
Edit
npm run dev
Frontend
Navigate to the frontend directory:

bash
Copy
Edit
cd library-frontend
Install dependencies:

bash
Copy
Edit
npm install
Start frontend:

bash
Copy
Edit
npm run dev
Deployment Notes
Make sure CORS is properly configured for your frontend domain in the Express server

MongoDB connection must be active and accessible