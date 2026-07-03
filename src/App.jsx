import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Courses from "./pages/Courses";
import PlaceholderPage from "./pages/PlaceholderPage";
import Gallery from "./pages/Gallery";
import AboutPage from "./pages/AboutPage";
import IASKSPage from "./pages/IASKSPage";

import Overview from "./components/AboutUs/Overview";
import Administration from "./components/AboutUs/Administration";
import ChairmansMessage from "./components/AboutUs/ChairmansMessage";
import College from "./components/AboutUs/College";

import CoursePage from "./pages/CoursePage.jsx";
import CourseDetailPage from "./components/CourseDetailPage.jsx";

import PlacementsPage from "./pages/Placements.jsx";
import Contact from "./pages/ContactPage";
import ELibrary from "./pages/E-Library";

import CollegeConcessionPopup from "./components/CollegeConcessionPopup.jsx";
import WhatsAppWidget from "./components/WhatsAppWidget.jsx";
import EnquiryButton from "./components/EnquiryButton";

import FeedbackPage from "./pages/FeedbackPage.jsx";
import FeeClearanceForm from "./pages/FeeClearanceForm.jsx";
import GoogleAnalytics from "./components/GoogleAnalytics.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  const shouldHidePopup = location.pathname !== "/";

  const [isOpen, setIsOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const completed = localStorage.getItem("quizCompleted");
    const minimised = localStorage.getItem("popupMinimized");
    const shown = localStorage.getItem("popupShown");

    // If quiz completed → no popup
    if (completed) {
      try {
        const parsed = JSON.parse(completed);
        const now = Date.now();
        const diff = now - parsed.date;
        const days7 = 7 * 24 * 60 * 60 * 1000;

        if (diff < days7) {
          return;
        } else {
          localStorage.removeItem("quizCompleted");
        }
      } catch {
        localStorage.removeItem("quizCompleted");
      }
    }

    // show floating if already shown or minimized
    if (shown || minimised) {
      setShowFloating(true);
      return;
    }

    // otherwise show popup
    const timer = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem("popupShown", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <GoogleAnalytics />

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/about/overview" element={<Overview />} />

              <Route
                path="/about/administration"
                element={<Administration />}
              />

              <Route
                path="/about/chairmans-message"
                element={<ChairmansMessage />}
              />

              <Route path="/about/college" element={<College />} />

              <Route
                path="/ias-kas-upsc-training-bangalore"
                element={<IASKSPage />}
              />

              <Route path="/courses" element={<CoursePage />} />

              <Route
                path="/course/bba"
                element={
                  <Navigate to="/course/bba-colleges-in-bangalore" replace />
                }
              />

              <Route
                path="/course/bca"
                element={
                  <Navigate to="/course/bca-colleges-in-bangalore" replace />
                }
              />

              <Route
                path="/course/bcom"
                element={
                  <Navigate to="/course/bcom-colleges-in-bangalore" replace />
                }
              />

              <Route
                path="/course/bsc-cbz"
                element={
                  <Navigate
                    to="/course/bsc-cbz-colleges-in-bangalore"
                    replace
                  />
                }
              />

              <Route
                path="/course/mba"
                element={
                  <Navigate to="/course/mba-colleges-in-bangalore" replace />
                }
              />

              <Route
                path="/course/mca"
                element={
                  <Navigate to="/course/mca-colleges-in-bangalore" replace />
                }
              />

              <Route
                path="/course/mcom"
                element={
                  <Navigate to="/course/mcom-colleges-in-bangalore" replace />
                }
              />

              <Route
                path="/course/ba-hep"
                element={
                  <Navigate to="/course/ba-hep-colleges-in-bangalore" replace />
                }
              />

              <Route path="/course/:courseId" element={<CourseDetailPage />} />

              <Route path="/admissions" element={<Admissions />} />

              <Route path="/gallery" element={<Gallery />} />

              <Route path="/placements" element={<PlacementsPage />} />

              <Route path="/e-library" element={<ELibrary />} />

              <Route
                path="/aicte"
                element={<PlaceholderPage title="AICTE Information" />}
              />

              <Route path="/contact" element={<Contact />} />

              <Route
                path="/fee-clearance-form"
                element={<FeeClearanceForm />}
              />

              <Route path="/feedback" element={<FeedbackPage />} />

              <Route
                path="/faculty"
                element={<PlaceholderPage title="Faculties" />}
              />

              <Route
                path="/staff"
                element={<PlaceholderPage title="Staff" />}
              />

              <Route
                path="/alumni"
                element={<PlaceholderPage title="Alumni" />}
              />
            </Routes>
          </AnimatePresence>
        </main>

        {/* POPUP */}
        {!shouldHidePopup && (
          <CollegeConcessionPopup
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onMinimize={() => {
              setIsOpen(false);

              setShowFloating(true);

              localStorage.setItem("popupMinimized", "true");
            }}
          />
        )}

        {/* FLOATING BUTTON */}
        {showFloating && !shouldHidePopup && (
          <div
            onClick={() => {
              setIsOpen(true);
              setShowFloating(false);
            }}
            className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-xl cursor-pointer z-50 hover:scale-105 transition animate-bounce"
          >
            <span className="text-lg">🎓</span>

            <span className="text-sm font-semibold whitespace-nowrap">
              Get Fee Concession
            </span>
          </div>
        )}

        <WhatsAppWidget />

        <EnquiryButton />

        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
