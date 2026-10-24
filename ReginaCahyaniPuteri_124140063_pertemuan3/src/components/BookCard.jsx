
import PropTypes from "prop-types";

function BookCard({ book, onEdit, onDelete }) {
  const statusLabels = {
    owned: "Sudah Dimiliki",
    reading: "Sedang Dibaca",
    wishlist: "Ingin Dibeli",
  };

  return (
    <article className="book-card">
      <div className="book-card-info">
        <h3>{book.title}</h3>
        <p>Penulis: {book.author}</p>

        <span className={`status status-${book.status}`}>
          {statusLabels[book.status]}
        </span>
      </div>

      <div className="book-card-actions">
        <button type="button" onClick={() => onEdit(book)}>
          Edit
        </button>

        <button type="button" onClick={() => onDelete(book.id)}>
          Hapus
        </button>
      </div>
    </article>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["owned", "reading", "wishlist"]).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookCard;
