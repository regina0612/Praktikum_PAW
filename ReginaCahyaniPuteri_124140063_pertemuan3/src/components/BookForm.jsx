
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function BookForm({ onSubmit, editingBook, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("owned");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setStatus(editingBook.status);
    } else {
      setTitle("");
      setAuthor("");
      setStatus("owned");
    }

    setError("");
  }, [editingBook]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError("Judul buku dan nama penulis wajib diisi.");
      return;
    }

    onSubmit({
      title: title.trim(),
      author: author.trim(),
      status,
    });

    setTitle("");
    setAuthor("");
    setStatus("owned");
    setError("");
  }

  function handleCancel() {
    setTitle("");
    setAuthor("");
    setStatus("owned");
    setError("");
    onCancelEdit();
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>{editingBook ? "Edit Buku" : "Tambah Buku"}</h2>

      <label htmlFor="book-title">Judul Buku</label>
      <input
        id="book-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Masukkan judul buku"
      />

      <label htmlFor="book-author">Nama Penulis</label>
      <input
        id="book-author"
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        placeholder="Masukkan nama penulis"
      />

      <label htmlFor="book-status">Status Buku</label>
      <select
        id="book-status"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="owned">Sudah Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-actions">
        <button type="submit">
          {editingBook ? "Simpan Perubahan" : "Tambah Buku"}
        </button>

        {editingBook && (
          <button type="button" onClick={handleCancel}>
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editingBook: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["owned", "reading", "wishlist"]).isRequired,
  }),
  onCancelEdit: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  editingBook: null,
};

export default BookForm;
