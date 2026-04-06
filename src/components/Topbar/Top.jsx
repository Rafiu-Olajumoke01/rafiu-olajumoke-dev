import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './top.css';

function Top({ isSidebarOpen, setIsSidebarOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
      <button
        className="top-menu-btn"
        onClick={setIsSidebarOpen}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <a
        href="mailto:rafiuolajumoke7@gmail.com?subject=Let's Work Together"
        className="top-hire-btn"
      >
        Hire me
      </a>
    </header>
  );
}

export default Top;