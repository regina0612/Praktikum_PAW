
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <div className="app-container">
          <nav className="navbar">
            <Link to="/">Manajemen Buku</Link>
            <div className="nav-links">
              <Link to="/">Daftar Buku</Link>
              <Link to="/stats">Statistik</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <footer className="app-footer">
            <p>Manajemen Buku Pribadi</p>
          </footer>
        </div>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
