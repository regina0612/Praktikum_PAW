
import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import useBookStats from "../hooks/useBookStats";

function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <main className="stats-page">
      <header className="page-header">
        <div>
          <h1>Statistik Buku</h1>
          <p>Ringkasan koleksi buku pribadimu.</p>
        </div>

        <Link to="/" className="button-link">
          Kembali ke Daftar Buku
        </Link>
      </header>

      <section className="stats-grid">
        <article className="stat-card">
          <h2>Total Buku</h2>
          <p>{stats.total}</p>
        </article>

        <article className="stat-card">
          <h2>Sudah Dimiliki</h2>
          <p>{stats.owned}</p>
        </article>

        <article className="stat-card">
          <h2>Sedang Dibaca</h2>
          <p>{stats.reading}</p>
        </article>

        <article className="stat-card">
          <h2>Ingin Dibeli</h2>
          <p>{stats.wishlist}</p>
        </article>
      </section>
    </main>
  );
}

export default Stats;
