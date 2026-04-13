import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Timer, 
  Award, 
  AlertCircle,
  RefreshCcw,
  LogOut,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

// const questions = [
//   { id: 1, text: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correctAnswer: 2 },
//   { id: 2, text: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
//   { id: 3, text: "What is 15 + 27?", options: ["32", "42", "52", "45"], correctAnswer: 1 },
//   { id: 4, text: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], correctAnswer: 1 },
//   { id: 5, text: "What is the chemical symbol for water?", options: ["CO2", "O2", "H2O", "NaCl"], correctAnswer: 2 },
//   { id: 6, text: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: 3 },
//   { id: 7, text: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
//   { id: 8, text: "Which country is home to the Great Barrier Reef?", options: ["USA", "Australia", "Brazil", "Japan"], correctAnswer: 1 },
//   { id: 9, text: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], correctAnswer: 2 },
//   { id: 10, text: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
//   { id: 11, text: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correctAnswer: 1 },
//   { id: 12, text: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: 2 },
//   { id: 13, text: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: 1 },
//   { id: 14, text: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2 },
//   { id: 15, text: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correctAnswer: 2 },
//   { id: 16, text: "Which organ in the human body pumps blood?", options: ["Lungs", "Brain", "Heart", "Liver"], correctAnswer: 2 },
//   { id: 17, text: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correctAnswer: 2 },
//   { id: 18, text: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Lithium", "Beryllium"], correctAnswer: 1 },
//   { id: 19, text: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: 1 },
//   { id: 20, text: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correctAnswer: 1 },
// ];

const questions = [
  {
    id: 1,
    text: "Outstanding expenses are:",
    options: ["Assets", "Liabilities", "Income", "Capital"],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "The concept that business and owner are separate is known as:",
    options: ["Going Concern Concept", "Money Measurement Concept", "Business Entity Concept", "Dual Aspect Concept"],
    correctAnswer: 2
  },
  {
    id: 3,
    text: "Who is the present governor of RBI?",
    options: ["Raghuram Rajan", "Shaktikanta Das", "Sanjay Malhotra", "Narendra Modi"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Who is the finance minister of India?",
    options: ["Pramitha Sen", "Nirmala Sitharaman", "Droupadi Murmu", "Umashree"],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "According to the Law of Demand, if the price of a product increases, the quantity demanded will:",
    options: ["Stay the same", "Decrease", "Increase", "Shift the demand curve to the right"],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "The median is best defined as:",
    options: ["The average value", "The middle value when data is arranged in order", "The most repeated value", "The total of all observations"],
    correctAnswer: 1
  },

  // Kannada Section
  {
    id: 7,
    text: "‘ಪಂಪ’ ಯಾವ ಯುಗದ ಕವಿ?",
    options: ["ಆಧುನಿಕ ಯುಗ", "ನವೋದಯ ಯುಗ", "ಪ್ರಾಚೀನ ಯುಗ", "ಮಧ್ಯಯುಗ"],
    correctAnswer: 2
  },
  {
    id: 8,
    text: "‘ವಚನ ಸಾಹಿತ್ಯ’ ಯಾರಿಗೆ ಸಂಬಂಧಿಸಿದೆ?",
    options: ["ದಾಸ ಸಾಹಿತ್ಯ", "ಜೈನ ಸಾಹಿತ್ಯ", "ವಚನಕಾರರು", "ನವೋದಯ ಕವಿಗಳು"],
    correctAnswer: 2
  },
  {
    id: 9,
    text: "‘ದಾಸ ಸಾಹಿತ್ಯ’ ಮುಖ್ಯವಾಗಿ ಯಾವ ವಿಷಯವನ್ನು ಒಳಗೊಂಡಿದೆ?",
    options: ["ರಾಷ್ಟ್ರಭಕ್ತಿ", "ಭಕ್ತಿ", "ಪ್ರೇಮ", "ಸಾಮಾಜಿಕ ವಿಚಾರ"],
    correctAnswer: 1
  },
  // {
  //   id: 10,
  //   text: "‘ಗದ್ಯ’ ಎಂಬುದು ಏನು?",
  //   options: ["ಛಂದಸ್ಸಿನಲ್ಲಿ ಬರೆದ ಸಾಹಿತ್ಯ", "ಪದ್ಯ ರೂಪದ ಸಾಹಿತ್ಯ", "ಸಾಮಾನ್ಯ ವಾಕ್ಯ ರೂಪದ ಸಾಹಿತ್ಯ", "ನಾಟಕ ರೂಪದ ಸಾಹಿತ್ಯ"],
  //   correctAnswer: 2
  // },
  // {
  //   id: 11,
  //   text: "ಮಲೆಗಳಲ್ಲಿ ಮಧುಮಗಳು ಕೃತಿಯ ಕರ್ತೃ ಯಾರು?",
  //   options: ["ಕುವೆಂಪು", "ದ. ರಾ. ಬೇಂದ್ರೆ", "ಜಿ. ಎಸ್. ಶಿವರುದ್ರಪ್ಪ", "ಗಿರೀಶ್ ಕಾರ್ನಾಡ್"],
  //   correctAnswer: 3
  // },
  {
    id: 10,
    text: "भारत की राजधानी क्या है?",
    options: ["मुंबई", "नई दिल्ली", "चेन्नई"],
    correctAnswer: 2
  },
  {
    id: 11,
    text: "ताजमहल कहाँ स्थित है?",
    options: ["दिल्ली", "आगरा", "जयपुर"],
    correctAnswer: 2
  },

  // English Section
  {
    id: 12,
    text: "Fill in the blank: There are many butterflies ____ the garden.",
    options: ["in", "on", "at", "under"],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Fill in the blank: Sam went to the market ____ his parents.",
    options: ["with", "by", "from", "into"],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "Fill in the blank: ____ river Nile is the longest river.",
    options: ["A", "An", "The", "No article"],
    correctAnswer: 2
  },
  {
    id: 15,
    text: "Fill in the blank: We have to submit assignments in ____ hour.",
    options: ["a", "an", "the", "no article"],
    correctAnswer: 1
  },
  {
    id: 16,
    text: "Fill in the blank: The birds ____ flying.",
    options: ["is", "are"],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "Fill in the blank: The writer ____ honoured.",
    options: ["was", "were"],
    correctAnswer: 0
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
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Opposite of 'wise' is:",
    options: ["Smart", "Clever", "Foolish", "Bright"],
    correctAnswer: 2
  }
];

export default function Quiz({ userName, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionTimer, setQuestionTimer] = useState(30); // 30 seconds per question
  const [isFinished, setIsFinished] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);

  // Individual question timer
  useEffect(() => {
    if (!isFinished && questionTimer > 0) {
      const timer = setTimeout(() => setQuestionTimer(questionTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (questionTimer === 0 && !isFinished) {
      // Auto-move to next question when time runs out
      handleNext();
    }
  }, [questionTimer, isFinished, currentQuestionIndex]);

  // Reset timer when question changes
  useEffect(() => {
    setQuestionTimer(30);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
    const score = Object.keys(selectedAnswers).reduce((acc, index) => {
      const idx = parseInt(index);
      return acc + (selectedAnswers[idx] === questions[idx].correctAnswer ? 1 : 0);
    }, 0);
    
    // Check eligibility (10 or more marks)
    setShowEligibility(score >= 10);
    onFinish(score);
  };

  const formatTime = (seconds) => {
    return `00:${seconds.toString().padStart(2, '0')}`;
  };

  if (isFinished) {
    const score = Object.keys(selectedAnswers).reduce((acc, index) => {
      const idx = parseInt(index);
      return acc + (selectedAnswers[idx] === questions[idx].correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4 py-28">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 text-center border border-slate-100"
        >
          {showEligibility ? (
            <>
              <div className="w-16 h-16 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">🎉 Congratulations! 🎉</h2>
              <div className="bg-linear-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 mb-4">
                <p className="text-emerald-700 font-bold text-xl">You're Eligible!</p>
                <p className="text-emerald-600 text-sm">Score: {score}/{questions.length}</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Quiz Completed!</h2>
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <p className="text-slate-700 font-bold text-xl">Score: {score}/{questions.length}</p>
                <p className="text-slate-500 text-sm">Need 10+ to be eligible</p>
              </div>
            </>
          )}
          
          <p className="text-slate-500 mb-6 text-sm">Great effort, {userName}!</p>

          <div className="space-y-2">
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <RefreshCcw className="w-3 h-3" />
              Try Again
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full py-3 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <LogOut className="w-3 h-3" />
              Exit Portal
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const score = Object.keys(selectedAnswers).reduce((acc, index) => {
    const idx = parseInt(index);
    return acc + (selectedAnswers[idx] === questions[idx].correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Compact Header */}
        <div className="flex justify-between items-center mb-4 bg-white rounded-xl shadow-sm p-3 border border-slate-100">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Quick Quiz</h1>
            <p className="text-xs text-slate-500">Q{currentQuestionIndex + 1}/{questions.length}</p>
          </div>
          
          {/* Score Badge */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-50 px-3 py-1 rounded-full">
              <span className="text-sm font-bold text-amber-700">Score: {score}</span>
            </div>
            
            {/* Timer */}
            <div className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-full font-mono font-bold text-sm",
              questionTimer < 10 ? "bg-rose-50 text-rose-600 animate-pulse" : "bg-emerald-50 text-emerald-600"
            )}>
              <Timer className="w-3 h-3" />
              {formatTime(questionTimer)}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-200 rounded-full mb-4 overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Card - Smaller */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-4"
          >
            <h2 className="text-base font-bold text-slate-900 mb-4 leading-relaxed">
              {currentQuestion.text}
            </h2>

            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={cn(
                    "w-full p-3 rounded-xl text-left font-medium transition-all border flex items-center justify-between text-sm",
                    selectedAnswers[currentQuestionIndex] === index
                      ? "bg-emerald-50 border-emerald-600 text-emerald-700"
                      : "bg-white border-slate-100 text-slate-600 hover:border-emerald-200 hover:bg-slate-50"
                  )}
                >
                  <span>{option}</span>
                  <div className={cn(
                    "w-5 h-5 rounded-full border flex items-center justify-center",
                    selectedAnswers[currentQuestionIndex] === index
                      ? "bg-emerald-600 border-emerald-600"
                      : "border-slate-200"
                  )}>
                    {selectedAnswers[currentQuestionIndex] === index && (
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                className={cn(
                  "px-6 py-2 rounded-full font-bold shadow-sm transition-all flex items-center gap-1 text-sm",
                  selectedAnswers[currentQuestionIndex] === undefined
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                )}
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Eligibility Target */}
        {/* <div className="mt-4 flex items-center justify-between bg-white rounded-lg p-2 border border-slate-100">
          <span className="text-xs text-slate-500">Target: 10 marks</span>
          <div className="flex items-center gap-1">
            <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-600"
                style={{ width: `${(score/10)*100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-emerald-600">{score}/10</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}