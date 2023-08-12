import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/header.css"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
                <Link className="nav-link" to="/experience" onClick={() => setMenuOpen(false)}>Expérience</Link>
                <Link className="nav-link" to="/formation" onClick={() => setMenuOpen(false)}>Formation</Link>
                <Link className="nav-link" to="/competence" onClick={() => setMenuOpen(false)}>Compétence</Link>
                <Link className="nav-link" to="/info" onClick={() => setMenuOpen(false)}>Informations personnelles</Link>
            </nav>
        </header>
    );
}

export default Header;
