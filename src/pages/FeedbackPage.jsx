import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackPage = () => {
  const [filterRole, setFilterRole] = useState('all'); // 'all', 'student', 'faculty'

  // Sample feedback data (no form – display only)
  const feedbackList = [
    {
      id: 1,
      name: "Dr. Ramesh N",
      role: "faculty",
      rating: 5,
      comment: "Excellent platform for student-teacher interaction. The new digital initiatives have greatly enhanced learning outcomes.",
      date: "2025-03-15"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "student",
      rating: 4,
      comment: "Great infrastructure and supportive faculty. Lab facilities are world-class. Would love more industry workshops.",
      date: "2025-03-14"
    },
    {
      id: 3,
      name: "Prof. Clara Robert",
      role: "faculty",
      rating: 5,
      comment: "Research support has improved significantly. The library digital resources are a game changer.",
      date: "2025-03-12"
    },
    {
      id: 4,
      name: "Anjali Verma",
      role: "student",
      rating: 5,
      comment: "Placement training and career guidance are outstanding. Very happy with my decision to study here.",
      date: "2025-03-10"
    },
    {
      id: 5,
      name: "Dr. Vikram",
      role: "faculty",
      rating: 4,
      comment: "Collaborative culture among departments has improved. More interdisciplinary projects would be great.",
      date: "2025-03-08"
    }
  ];

  // Statistics
  const totalFeedback = feedbackList.length;
  const avgRating = (feedbackList.reduce((sum, f) => sum + f.rating, 0) / totalFeedback).toFixed(1);
  const studentCount = feedbackList.filter(f => f.role === 'student').length;
  const facultyCount = feedbackList.filter(f => f.role === 'faculty').length;

  // Filtering
  const filteredFeedback = feedbackList.filter(f =>
    filterRole === 'all' ? true : f.role === filterRole
  );

  // Helper to render star icons (non‑interactive for display)
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-gold' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-bg-premium py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with theme fonts */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-electric-blue mb-4">
            Student & Faculty <span className="text-gold">Feedback</span>
          </h1>
          <p className="text-lg text-dark-text/70 max-w-2xl mx-auto font-poppins">
            Your voice shapes our future. Real experiences from our community.
          </p>
        </motion.div>

        {/* Statistics Cards – using gold-gradient and teal-gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="premium-card p-6 text-center">
            <div className="text-3xl font-bold text-primary">{totalFeedback}</div>
            <div className="text-sm text-dark-text/60 mt-1">Total Feedback</div>
          </div>
          <div className="premium-card p-6 text-center">
            <div className="text-3xl font-bold text-gold">{avgRating}</div>
            <div className="text-sm text-dark-text/60 mt-1">Average Rating</div>
            <div className="flex justify-center mt-2">{renderStars(parseFloat(avgRating))}</div>
          </div>
          <div className="premium-card p-6 text-center">
            <div className="text-3xl font-bold text-primary-dark">{studentCount}</div>
            <div className="text-sm text-dark-text/60 mt-1">Students</div>
          </div>
          <div className="premium-card p-6 text-center">
            <div className="text-3xl font-bold text-accent">{facultyCount}</div>
            <div className="text-sm text-dark-text/60 mt-1">Faculty Members</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {['all', 'student', 'faculty'].map((role) => (
            <button
              key={role}
              onClick={() => setFilterRole(role)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filterRole === role
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white/50 backdrop-blur-sm text-dark-text hover:bg-primary/10 border border-gray-200'
              }`}
            >
              {role === 'all' ? 'All' : role === 'student' ? 'Students' : 'Faculty'}
            </button>
          ))}
        </div>

        {/* Feedback Cards */}
        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredFeedback.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="premium-card p-12 text-center text-dark-text/60"
              >
                No feedback available for this category.
              </motion.div>
            ) : (
              filteredFeedback.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="premium-card p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-electric-blue">
                        {item.name}
                      </h3>
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-2 ${
                          item.role === 'student'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        {item.role === 'student' ? 'Student' : 'Faculty'}
                      </span>
                    </div>
                    <div className="text-right">
                      {renderStars(item.rating)}
                      <div className="text-xs text-dark-text/40 mt-1">{item.date}</div>
                    </div>
                  </div>
                  <p className="text-dark-text/80 mt-4 leading-relaxed font-poppins">
                    "{item.comment}"
                  </p>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <div className="mt-16 text-center text-sm text-dark-text/40 border-t border-gray-200 pt-6">
          <p>Based on authentic feedback from our community members.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;