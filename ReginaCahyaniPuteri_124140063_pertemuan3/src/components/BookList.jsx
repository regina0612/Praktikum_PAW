
import PropTypes from "prop-types";
import BookCard from "./BookCard";

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return (
      <p className="empty-message">
        Belum ada buku yang sesuai.
      </p>
    );
  }

  return (
    <section className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.oneOf(["owned", "reading", "wishlist"]).isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
