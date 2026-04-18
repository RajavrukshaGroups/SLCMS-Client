import React, { useState, useEffect } from 'react';

// Updated 20 Questions Data (from your Quiz component)
const QUESTIONS = [
  {
    id: 1,
    text: "Outstanding expenses are:",
    options: ["Assets", "Liabilities", "Income", "Capital"],
    correct: 1
  },
  {
    id: 2,
    text: "The concept that business and owner are separate is known as:",
    options: ["Going Concern Concept", "Money Measurement Concept", "Business Entity Concept", "Dual Aspect Concept"],
    correct: 2
  },
  {
    id: 3,
    text: "Who is the present governor of RBI?",
    options: ["Raghuram Rajan", "Shaktikanta Das", "Sanjay Malhotra", "Narendra Modi"],
    correct: 1
  },
  {
    id: 4,
    text: "Who is the finance minister of India?",
    options: ["Pramitha Sen", "Nirmala Sitharaman", "Droupadi Murmu", "Umashree"],
    correct: 1
  },
  {
    id: 5,
    text: "According to the Law of Demand, if the price of a product increases, the quantity demanded will:",
    options: ["Stay the same", "Decrease", "Increase", "Shift the demand curve to the right"],
    correct: 1
  },
  {
    id: 6,
    text: "The median is best defined as:",
    options: ["The average value", "The middle value when data is arranged in order", "The most repeated value", "The total of all observations"],
    correct: 1
  },
  {
    id: 7,
    text: "‘ಪಂಪ’ ಯಾವ ಯುಗದ ಕವಿ?",
    options: ["ಆಧುನಿಕ ಯುಗ", "ನವೋದಯ ಯುಗ", "ಪ್ರಾಚೀನ ಯುಗ", "ಮಧ್ಯಯುಗ"],
    correct: 2
  },
  {
    id: 8,
    text: "‘ವಚನ ಸಾಹಿತ್ಯ’ ಯಾರಿಗೆ ಸಂಬಂಧಿಸಿದೆ?",
    options: ["ದಾಸ ಸಾಹಿತ್ಯ", "ಜೈನ ಸಾಹಿತ್ಯ", "ವಚನಕಾರರು", "ನವೋದಯ ಕವಿಗಳು"],
    correct: 2
  },
  {
    id: 9,
    text: "‘ದಾಸ ಸಾಹಿತ್ಯ’ ಮುಖ್ಯವಾಗಿ ಯಾವ ವಿಷಯವನ್ನು ಒಳಗೊಂಡಿದೆ?",
    options: ["ರಾಷ್ಟ್ರಭಕ್ತಿ", "ಭಕ್ತಿ", "ಪ್ರೇಮ", "ಸಾಮಾಜಿಕ ವಿಚಾರ"],
    correct: 1
  },
  {
    id: 10,
    text: "भारत की राजधानी क्या है?",
    options: ["मुंबई", "नई दिल्ली", "चेन्नई"],
    correct: 2
  },
  {
    id: 11,
    text: "ताजमहल कहाँ स्थित है?",
    options: ["दिल्ली", "आगरा", "जयपुर"],
    correct: 2
  },
  {
    id: 12,
    text: "Fill in the blank: There are many butterflies ____ the garden.",
    options: ["in", "on", "at", "under"],
    correct: 0
  },
  {
    id: 13,
    text: "Fill in the blank: Sam went to the market ____ his parents.",
    options: ["with", "by", "from", "into"],
    correct: 0
  },
  {
    id: 14,
    text: "Fill in the blank: ____ river Nile is the longest river.",
    options: ["A", "An", "The", "No article"],
    correct: 2
  },
  {
    id: 15,
    text: "Fill in the blank: We have to submit assignments in ____ hour.",
    options: ["a", "an", "the", "no article"],
    correct: 1
  },
  {
    id: 16,
    text: "Fill in the blank: The birds ____ flying.",
    options: ["is", "are"],
    correct: 1
  },
  {
    id: 17,
    text: "Fill in the blank: The writer ____ honoured.",
    options: ["was", "were"],
    correct: 0
  },
  {
    id: 18,
    text: "Rearrange: heavy rainfall there in Karnataka was this year",
    options: [
      "Heavy rainfall was there in Karnataka this year",
      "There heavy rainfall was in Karnataka this year",
      "This year Karnataka rainfall heavy was there",
      "Karnataka was heavy rainfall there this year"
    ],
    correct: 0
  },
  {
    id: 19,
    text: "Rearrange: cricket match team Indian won has the",
    options: [
      "The Indian team has won the cricket match",
      "Indian team the cricket match has won",
      "The cricket has Indian team won match",
      "Won the Indian team cricket match has"
    ],
    correct: 0
  },
  {
    id: 20,
    text: "Opposite of 'wise' is:",
    options: ["Smart", "Clever", "Foolish", "Bright"],
    correct: 2
  }
];

const CollegeConcessionPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: info, 2: quiz, 3: result
  const [studentData, setStudentData] = useState({ 
    name: '', 
    email: '', 
    mobile: '', 
    course: 'B.Com - Bachelor of Commerce' 
  });
  const [userAnswers, setUserAnswers] = useState(new Array(20).fill(null));
  const [finalScore, setFinalScore] = useState(0);
  const [concessionCoupon, setConcessionCoupon] = useState('');
  const [concessionAmount, setConcessionAmount] = useState('');

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setStudentData({ 
        name: '', 
        email: '', 
        mobile: '', 
        course: 'B.Com - Bachelor of Commerce' 
      });
      setUserAnswers(new Array(20).fill(null));
      setFinalScore(0);
      setConcessionCoupon('');
      setConcessionAmount('');
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({ ...prev, [name]: value }));
  };

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = parseInt(value);
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correct = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (userAnswers[i] !== null && userAnswers[i] === QUESTIONS[i].correct) {
        correct++;
      }
    }
    return correct;
  };

  const generateConcession = (score) => {
    if (score >= 15) {
      return { coupon: "SLCMS10000", amount: "₹10,000/- fee concession" };
    } else if (score >= 10 && score <= 14) {
      return { coupon: "SLCMS5000", amount: "₹5,000/- fee concession" };
    } else {
      return { coupon: "SLCMS2500", amount: "₹2,500/- fee concession" };
    }
  };

  const validateStep1 = () => {
    if (!studentData.name.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!studentData.email.trim()) {
      alert("Please enter your email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(studentData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!/^\d{10}$/.test(studentData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (!studentData.course) {
      alert("Please select a course.");
      return false;
    }
    return true;
  };

  const handleStartTest = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmitQuiz = () => {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    if (answeredCount < 20) {
      alert(`Please answer all 20 questions. You have answered ${answeredCount} out of 20.`);
      return;
    }
    const score = calculateScore();
    setFinalScore(score);
    const { coupon, amount } = generateConcession(score);
    setConcessionCoupon(coupon);
    setConcessionAmount(amount);
    setStep(3);
  };

  const redirectToWhatsApp = () => {
    const { name, email, mobile, course } = studentData;
    const message = `Hello SLCMS Admissions,%0A%0AI have completed the College Concession Test.%0A%0A📌 Name: ${name}%0A📧 Email: ${email}%0A📞 Mobile: ${mobile}%0A📚 Preferred Course: ${course}%0A🎯 Test Score: ${finalScore}/20%0A🎟️ Concession Coupon: ${concessionCoupon}%0A💰 Concession Value: ${concessionAmount}%0A%0APlease guide me for admission process and redeem my coupon. Thank you!`;
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const answeredCount = userAnswers.filter(a => a !== null).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all">
      <div className="bg-white rounded-3xl max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-gray-600 transition-colors"
        >
          &times;
        </button>

        {/* Step 1: User Info */}
        {step === 1 && (
          <div className="p-7 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e4663]">📋 Quick Registration</h2>
              <p className="text-gray-500 mt-2">Fill your details to start the test</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={studentData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Riya Sharma"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:border-[#d94a2b] focus:ring-2 focus:ring-[#d94a2b]/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={studentData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:border-[#d94a2b] focus:ring-2 focus:ring-[#d94a2b]/20 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={studentData.mobile}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:border-[#d94a2b] focus:ring-2 focus:ring-[#d94a2b]/20 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Preferred Course *</label>
                <select
                  name="course"
                  value={studentData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-full focus:border-[#d94a2b] focus:ring-2 focus:ring-[#d94a2b]/20 outline-none transition bg-white"
                >
                  <option value="B.Com - Bachelor of Commerce">B.Com - Bachelor of Commerce</option>
                  <option value="BBA - Bachelor of Business Administration">BBA - Bachelor of Business Administration</option>
                  <option value="BCA - Bachelor of Computer Applications">BCA - Bachelor of Computer Applications</option>
                  <option value="B.Sc - Bachelor of Science">B.Sc - Bachelor of Science</option>
                  <option value="BA - Bachelor of Arts">BA - Bachelor of Arts</option>
                  <option value="M.Com - Master of Commerce">M.Com - Master of Commerce</option>
                  <option value="MBA - Master of Business Administration">MBA - Master of Business Administration</option>
                  <option value="MCA - Master of Computer Applications">MCA - Master of Computer Applications</option>
                </select>
              </div>
              
              <button
                onClick={handleStartTest}
                className="w-full bg-[#0f4c5f] text-white font-bold py-3 rounded-full mt-4 hover:bg-[#0b3d4d] transition shadow-md"
              >
                ▶ Start 20 Questions Test
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-3">✅ No spam, just assessment for concession</p>
            </div>
          </div>
        )}

        {/* Step 2: 20 Questions */}
        {step === 2 && (
          <div className="p-7 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e4663]">🧠 Knowledge Assessment</h2>
              <p className="text-gray-500 mt-2">Answer 20 questions & get concession amount</p>
            </div>
            
            <div className="space-y-6 max-h-[50vh] overflow-y-auto px-1">
              {QUESTIONS.map((q, idx) => (
                <div key={q.id} className="border-b border-gray-100 pb-4">
                  <div className="font-semibold text-gray-800 mb-2">{q.text}</div>
                  <div className="flex flex-wrap gap-3">
                    {q.options.map((opt, optIdx) => (
                      <label key={optIdx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition">
                        <input
                          type="radio"
                          name={`q${idx}`}
                          value={optIdx}
                          checked={userAnswers[idx] === optIdx}
                          onChange={(e) => handleAnswerChange(idx, e.target.value)}
                          className="accent-[#d94a2b] w-4 h-4"
                        />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-3 border-t border-gray-100">
              <span className="bg-green-50 px-4 py-2 rounded-full text-green-700 font-medium">
                Answered: {answeredCount}/20
              </span>
              <button
                onClick={handleSubmitQuiz}
                className="bg-[#d94a2b] text-white font-bold px-6 py-2 rounded-full hover:bg-[#b83b1f] transition shadow"
              >
                Submit Test
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Result & Coupon */}
        {step === 3 && (
          <div className="p-7 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e4663] mb-2">🎓 Your Concession Coupon</h2>
            
            {finalScore >= 15 && (
              <p className="text-green-600 font-medium mt-2">🏆 Excellent performance! You've secured the highest concession.</p>
            )}
            {finalScore >= 10 && finalScore < 15 && (
              <p className="text-blue-600 font-medium mt-2">👍 Good! You've earned a solid concession amount.</p>
            )}
            {finalScore < 10 && (
              <p className="text-orange-600 font-medium mt-2">📚 Keep improving! You've received a concession to support your journey.</p>
            )}
            
            <p className="text-gray-700 mt-3">
              <strong>{concessionAmount}</strong> on tuition fee.
            </p>
            
            <div className="bg-green-50 border-2 border-dashed border-green-600 rounded-full py-4 px-6 my-5">
              <span className="text-2xl font-bold text-green-700 tracking-wider">🎟️ {concessionCoupon}</span>
            </div>
            
            <p className="text-gray-600 mb-4">Your score: {finalScore} / 20</p>
            
            <button
              onClick={redirectToWhatsApp}
              className="w-full bg-[#25D366] text-white font-bold py-3 rounded-full hover:bg-[#20bd59] transition flex items-center justify-center gap-2 shadow-md"
            >
              📲 Share on WhatsApp & Claim
            </button>
            
            <p className="text-xs text-gray-400 mt-3">Clicking will redirect to WhatsApp with coupon details</p>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-200 text-gray-700 font-medium py-2 rounded-full mt-3 hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeConcessionPopup;