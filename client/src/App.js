import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />}  />
            <Route path="/Gallery" element={<Gallery />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
