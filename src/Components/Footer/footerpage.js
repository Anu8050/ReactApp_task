import React from 'react';
import './footerpage.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} my react application.</p>
    </footer>
  );
}

export default Footer;
