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
import AboutPage from './pages/AboutPage'
import IASKS from './pages/IASKSPage';
import IASKSPage from './pages/IASKSPage';
import Overview from './components/AboutUs/Overview';
import Administration from './components/AboutUs/Administration';
import ChairmansMessage from './components/AboutUs/ChairmansMessage';
import College from './components/AboutUs/College';
import CoursePage from './pages/CoursePage.jsx'
import CourseDetailPage from './components/CourseDetailPage.jsx';
import PlacementsPage from './pages/Placements.jsx';
import Contact from './pages/ContactPage';
import ELibrary from './pages/E-Library';
import Faculty from './pages/Faculty';



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
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/overview" element={<Overview />} />
              <Route path="/about/administration" element={<Administration />} />
              <Route path="/about/chairmans-message" element={<ChairmansMessage />} />
              <Route path="/about/college" element={<College />} />
              <Route path='/iaskas' element={<IASKSPage />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/course/:courseId" element={<CourseDetailPage />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/e-library" element={<ELibrary />} />
              <Route path="/aicte" element={<PlaceholderPage title="AICTE Information" />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<PlaceholderPage title="Student Feedback" />} />
              <Route path='/student-faculty-feedback' element={<PlaceholderPage title="Student & Faculty Feedback" />} />
              <Route path='/faculty' element={<PlaceholderPage title="Faculties" />} />  
              <Route path='/staff' element={<PlaceholderPage title="Staff" />} />
              <Route path='/alumni' element={<PlaceholderPage title="Alumni" />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
