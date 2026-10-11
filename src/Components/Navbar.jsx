import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import "../Styles/navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        CHHABI
        <span>BEAUTY STUDIO</span>
      </a>

      <nav
        className={`navbar-links${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="navbar-appointment navbar-appointment-mobile"
          onClick={closeMenu}
        >
          Book Appointment <FiArrowUpRight aria-hidden="true" />
        </a>
      </nav>

      <a href="#contact" className="navbar-appointment navbar-appointment-desktop">
        Book Appointment
        <FiArrowUpRight aria-hidden="true" />
      </a>

      <button
        type="button"
        className="navbar-menu"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

export default Navbar;
