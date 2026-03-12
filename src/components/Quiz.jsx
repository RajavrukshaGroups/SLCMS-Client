import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Timer, 
  Award, 
  AlertCircle,
  RefreshCcw,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

const questions = [
  { id: 1, text: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correctAnswer: 2 },
  { id: 2, text: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
  { id: 3, text: "What is 15 + 27?", options: ["32", "42", "52", "45"], correctAnswer: 1 },
  { id: 4, text: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], correctAnswer: 1 },
  { id: 5, text: "What is the chemical symbol for water?", options: ["CO2", "O2", "H2O", "NaCl"], correctAnswer: 2 },
  { id: 6, text: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: 3 },
  { id: 7, text: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
  { id: 8, text: "Which country is home to the Great Barrier Reef?", options: ["USA", "Australia", "Brazil", "Japan"], correctAnswer: 1 },
  { id: 9, text: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], correctAnswer: 2 },
  { id: 10, text: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
  { id: 11, text: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correctAnswer: 1 },
  { id: 12, text: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: 2 },
  { id: 13, text: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: 1 },
  { id: 14, text: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2 },
  { id: 15, text: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correctAnswer: 2 },
  { id: 16, text: "Which organ in the human body pumps blood?", options: ["Lungs", "Brain", "Heart", "Liver"], correctAnswer: 2 },
  { id: 17, text: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correctAnswer: 2 },
  { id: 18, text: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Lithium", "Beryllium"], correctAnswer: 1 },
  { id: 19, text: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: 1 },
  { id: 20, text: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correctAnswer: 1 },
];

export default function Quiz({ userName, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isFinished) {
      handleFinish();
    }
  }, [timeLeft, isFinished]);

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
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
    onFinish(score);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isFinished) {
    const score = Object.keys(selectedAnswers).reduce((acc, index) => {
      const idx = parseInt(index);
      return acc + (selectedAnswers[idx] === questions[idx].correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Completed!</h2>
          <p className="text-slate-500 mb-8">Great job, {userName}!</p>
          
          <div className="bg-slate-50 rounded-2xl p-6 mb-8">
            <div className="text-5xl font-bold text-emerald-600 mb-2">{score} / {questions.length}</div>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">Final Score</p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full py-4 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Exit Portal
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-neutral-50 py-33 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Entrance Quiz</h1>
            <p className="text-sm text-slate-500">Question {currentQuestionIndex + 1} of {questions.length}</p>
          </div>
          <div className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold",
            timeLeft < 60 ? "bg-rose-50 text-rose-600 animate-pulse" : "bg-emerald-50 text-emerald-600"
          )}>
            <Timer className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-200 rounded-full mb-12 overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={cn(
                    "w-full p-5 rounded-2xl text-left font-medium transition-all border-2 flex items-center justify-between group",
                    selectedAnswers[currentQuestionIndex] === index
                      ? "bg-emerald-50 border-emerald-600 text-emerald-700 shadow-md"
                      : "bg-white border-slate-100 text-slate-600 hover:border-emerald-200 hover:bg-slate-50"
                  )}
                >
                  <span>{option}</span>
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                    selectedAnswers[currentQuestionIndex] === index
                      ? "bg-emerald-600 border-emerald-600"
                      : "border-slate-200 group-hover:border-emerald-300"
                  )}>
                    {selectedAnswers[currentQuestionIndex] === index && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                className={cn(
                  "px-10 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-2",
                  selectedAnswers[currentQuestionIndex] === undefined
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-emerald-600 text-white hover:bg-emerald-700 hover:-translate-y-0.5"
                )}
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Info */}
        <div className="mt-8 flex items-center gap-3 text-slate-400 justify-center">
          <AlertCircle className="w-4 h-4" />
          <p className="text-xs font-medium">Please do not refresh the page during the quiz.</p>
        </div>
      </div>
    </div>
  );
}
