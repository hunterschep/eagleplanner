import React from 'react';
import '../stylesheets/footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope" style={{ color: 'white' }}></i> {/* Email Icon */}
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style={{ color: 'grey' }}></i> {/* LinkedIn Icon */}
        </a>
      </div>
      <div className="text">
        Made with <span role="img" aria-label="heart">❤️</span> at Boston College
      </div>
    </footer>
  );
};

export default Footer;
