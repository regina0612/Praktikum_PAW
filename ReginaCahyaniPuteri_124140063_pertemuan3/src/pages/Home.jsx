
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter";

function Home() {
  const { books, addBook, updateBook, deleteBook } = useBooks();

  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [message, setMessage] = useState("");

  function handleSubmit(bookData) {
    if (editingBook) {
      updateBook(editingBook.id, bookData);
      setMessage("Buku berhasil diperbarui!");
      setEditingBook(null);
    } else {
      addBook(bookData);
      setMessage("Buku berhasil ditambahkan!");
    }
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Apakah kamu yakin ingin menghapus buku ini?"
    );

    if (confirmed) {
      deleteBook(id);

      if (editingBook?.id === id) {
        setEditingBook(null);
      }

      setMessage("Buku berhasil dihapus!");
    }
  }

  const filteredBooks = books.filter((book) => {
    const keyword = search.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword);

    const matchesStatus =
      statusFilter === "all" || book.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="home-page">
      <header className="page-header">
        <div>
          <h1>Perpustakaan Pribadiku</h1>
          <p>Catat dan kelola koleksi buku favoritmu.</p>
        </div>

        <Link to="/stats" className="button-link">
          Lihat Statistik
        </Link>
      </header>

      {message && (
        <p className="success-message" role="status">
          {message}
        </p>
      )}

      <BookForm
        onSubmit={handleSubmit}
        editingBook={editingBook}
        onCancelEdit={() => setEditingBook(null)}
      />

      <BookFilter
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <section>
        <h2>Daftar Buku ({filteredBooks.length})</h2>

        <BookList
          books={filteredBooks}
          onEdit={(book) => {
            setEditingBook(book);
            setMessage("");
          }}
          onDelete={handleDelete}
        />
      </section>
    </main>
  );
}

export default Home;
