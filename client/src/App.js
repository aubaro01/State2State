import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { DotLoader } from 'react-spinners';

const delayImport = (factory, delay = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(factory()), delay));

const Home = lazy(() => delayImport(() => import('./pages/MainPage')));
const About = lazy(() => delayImport(() => import('./pages/About')));
const Gallery = lazy(() => delayImport(() => import('./pages/Gallery')));

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 py-3">
          <Suspense
            fallback={
              <div
                className="d-flex justify-content-center align-items-center vh-100 w-100 bg-white"
                role="status"
                aria-live="polite"
              >
                <DotLoader size={120} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
