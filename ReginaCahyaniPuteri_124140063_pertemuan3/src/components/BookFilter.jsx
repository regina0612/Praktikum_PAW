
import PropTypes from "prop-types";

function BookFilter({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
}) {
  return (
    <section className="book-filter">
      <label htmlFor="book-search">Cari Buku</label>
      <input
        id="book-search"
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Cari judul atau penulis..."
      />

      <label htmlFor="status-filter">Filter Status</label>
      <select
        id="status-filter"
        value={statusFilter}
        onChange={(event) => onStatusChange(event.target.value)}
      >
        <option value="all">Semua Status</option>
        <option value="owned">Sudah Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
    </section>
  );
}

BookFilter.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  statusFilter: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default BookFilter;
