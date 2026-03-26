import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Hamburger Button */}
      <header style={{ padding: '20px', position: 'fixed', top: 0, right: 0, zIndex: 1100 }}>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', outline: 'none' }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* The Menu Drawer and Backdrop */}
      {isOpen && (
        <>
          {/* Clicking this invisible background closes the menu */}
          <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>
          
          {/* The actual sliding drawer */}
          <div className="menu-drawer">
            <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link to="/archive" onClick={() => setIsOpen(false)}>ARCHIVE</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
            <Link to="/submit" onClick={() => setIsOpen(false)}>SUBMIT</Link>
          </div>
        </>
      )}
    </>
  );
}