import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className={`loader ${loading ? '' : 'hidden'}`} aria-hidden={!loading}>
        <div style={{ textAlign: 'center' }}>
          <div className="loader-mark">
            <span>&lt;</span>
            <span>Priyanshu.dev</span>
            <span>/&gt;</span>
          </div>
          <div className="loader-bar" />
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
