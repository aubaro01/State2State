import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <div className="me-2" style={{ width: '40px', height: '40px' }}>
          <svg viewBox="0 0 100 100" className="w-100 h-100">
            <circle cx="50" cy="50" r="48" fill="#f5f5f0" stroke="#2d3a3a" strokeWidth="4" />
            <circle cx="25" cy="30" r="5" fill="#2d3a3a" />
            <polygon points="50,25 65,55 35,55" fill="#4ade80" />
            <polygon points="50,25 70,70 30,70" fill="#2d3a3a" />
            <polygon points="20,60 40,40 55,60" fill="#1e3a3a" />
            <polygon points="80,60 65,40 50,60" fill="#1e3a3a" />
            <rect x="0" y="60" width="100" height="20" fill="#d4b483" />
            <path d="M50,70 L55,60 Q50,55 45,60 Z" fill="#6d2932" />
            <rect x="48" y="60" width="4" height="15" fill="#6d2932" />
          </svg>
        </div>
        <span className="fs-4 fw-semibold text-dark">State2State</span>
      </a>
      
      <button 
        className="navbar-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <a 
              className="nav-link px-3 py-2 text-dark fw-medium rounded hover-primary" 
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link px-3 py-2 text-dark fw-medium rounded hover-primary" 
              href="/gallery"
            >
              Galeria
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link px-3 py-2 text-dark fw-medium rounded hover-primary" 
              href="/about"
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  );
};

export default Header;