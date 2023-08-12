import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../style/header.css"
import i18n from "../config/i18n.jsx"
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation(); 

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <header className="main-header">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>{t('Accueil')}</Link>
                <Link className="nav-link" to="/experience" onClick={() => setMenuOpen(false)}>{t('Expérience')}</Link>
                <Link className="nav-link" to="/formation" onClick={() => setMenuOpen(false)}>{t('Formation')}</Link>
                <Link className="nav-link" to="/competence" onClick={() => setMenuOpen(false)}>{t('Compétence')}</Link>
                <Link className="nav-link" to="/info" onClick={() => setMenuOpen(false)}>{t('Informations personnelles')}</Link>
            </nav>
                <div className="language-buttons">
                    <button onClick={() => changeLanguage('en')}>EN</button>
                    <button onClick={() => changeLanguage('fr')}>FR</button>
                </div>
        </header>
    );
}

export default Header;