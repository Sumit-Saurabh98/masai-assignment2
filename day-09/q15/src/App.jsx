import React, { useState } from 'react';

// Navbar Component
function Navbar({ currentPage, setCurrentPage }) {
  const linkStyle = (page) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: currentPage === page ? 'bold' : 'normal',
    color: currentPage === page ? 'blue' : 'black',
    textDecoration: 'none'
  });

  return (
    <nav style={{ background: '#f0f0f0', padding: '10px' }}>
      <span style={linkStyle('Home')} onClick={() => setCurrentPage('Home')}>
        Home
      </span>
      <span style={linkStyle('About')} onClick={() => setCurrentPage('About')}>
        About
      </span>
      <span style={linkStyle('Contact')} onClick={() => setCurrentPage('Contact')}>
        Contact
      </span>
    </nav>
  );
}

// Home Page Component
function Home() {
  return <h1 style={{ color: 'green' }}>Welcome to Home</h1>;
}

// About Page Component
function About() {
  return <h1 style={{ color: 'purple' }}>About Us</h1>;
}

// Contact Page Component
function Contact() {
  return <h1 style={{ color: 'orange' }}>Contact Us</h1>;
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div style={{ padding: '20px', minHeight: '200px' }}>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
