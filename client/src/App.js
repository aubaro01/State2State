import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMain from './pages/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<PageMain />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
