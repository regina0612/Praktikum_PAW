
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage("books", []);

  function addBook(book) {
    const newBook = {
      ...book,
      id: crypto.randomUUID(),
    };

    setBooks((previousBooks) => [...previousBooks, newBook]);
  }

  function updateBook(id, updatedBook) {
    setBooks((previousBooks) =>
      previousBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  }

  function deleteBook(id) {
    setBooks((previousBooks) =>
      previousBooks.filter((book) => book.id !== id)
    );
  }

  return (
    <BookContext.Provider
      value={{ books, addBook, updateBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  return useContext(BookContext);
}
