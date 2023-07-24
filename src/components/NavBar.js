import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import moon from '../svg/moon.svg'
import sun from '../svg/sun.svg'

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navBarStyle = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: theme === 'light' ? 'var(--color-navbar-background-light)' : 'var(--color-navbar-background-dark)',
    color: theme === 'light' ? 'var(--color-text-light)' : 'var(--color-text-dark)',
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <nav style={navBarStyle}>
      <Link style={linkStyle} draggable={false} to="/">Home</Link>
      <Link style={linkStyle} draggable={false} to="/about-us">About Us</Link>
      <Link style={linkStyle} draggable={false} to="/services">Services</Link>
      <Link style={linkStyle} draggable={false} to="/demo-technologies">Demo Technologies</Link>
      <Link style={linkStyle} draggable={false} to="/graphs">Graphs</Link>
      <Link style={linkStyle} draggable={false} to="/contact-us">Contact Us</Link>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <img height={20} draggable={false} alt="Dark Theme" src={moon} /> : <img draggable={false} height={20} alt="Light Theme" src={sun} />}
      </button>
    </nav>
  );
};

export default NavBar;
