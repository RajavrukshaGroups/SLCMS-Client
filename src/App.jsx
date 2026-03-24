import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Courses from './pages/Courses';
import PlaceholderPage from './pages/PlaceholderPage';
import { useEffect } from 'react';
import Gallery from './pages/Gallery'
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<PlaceholderPage title="About Us" />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/placements" element={<PlaceholderPage title="Placements" />} />
              <Route path="/e-library" element={<PlaceholderPage title="E-Library" />} />
              <Route path="/aicte" element={<PlaceholderPage title="AICTE Information" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/feedback" element={<PlaceholderPage title="Student Feedback" />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
