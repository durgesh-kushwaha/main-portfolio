"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsOpen(false);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          Durgesh Kushwaha
        </Link>

        <div className="navbar-links">
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#certificates">Certificates</Link>
          <Link href="/blogs">All Posts</Link>
          <Link href="/#contact">Contact</Link>
          <ThemeSwitcher />
        </div>

        <div className="mobile-nav-header">
            <ThemeSwitcher />
            <button onClick={toggleMenu} className="mobile-nav-toggle" aria-label="Open Menu">
                <FaBars />
            </button>
        </div>
      </nav>

      <div className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="mobile-nav-toggle" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} aria-label="Close Menu">
            <FaTimes />
        </button>
        <Link href="/#home" onClick={closeMenu}>Home</Link>
        <Link href="/#about" onClick={closeMenu}>About</Link>
        <Link href="/#projects" onClick={closeMenu}>Projects</Link>
        <Link href="/#certificates" onClick={closeMenu}>Certificates</Link>
        <Link href="/blogs" onClick={closeMenu}>All Posts</Link>
        <Link href="/#contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;

