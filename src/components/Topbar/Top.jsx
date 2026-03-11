import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './top.css'

function Top({ isSidebarOpen, setIsSidebarOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-bar ${scrolled ? 'scrolled' : ''}`}>

      {/* LEFT — Hamburger + Logo */}
      <div className="header-left">
        <button
          onClick={setIsSidebarOpen}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo" onClick={() => navigate('/home')}>
          <div className="logo-icon">RO</div>
          <div className="logo-text">
            <span className="logo-name">Rafiu <span className="logo-accent">Olajumoke</span></span>
            <span className="logo-sub">Fullstack Developer</span>
          </div>
        </div>
      </div>

      {/* CENTER — Search */}
      <div className="header-center">
        <div className="search-wrapper">
          <svg className="search-icon" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search projects, skills..."
            className="search-input"
          />
        </div>
      </div>

      {/* RIGHT — Status */}
      <div className="header-right">
        <div className="status-badge">
          <span className="status-dot" />
          <span className="status-text">Available for work</span>
        </div>
      </div>

    </header>
  );
}

export default Top;