import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane, FaMinus } from "react-icons/fa";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef(null);
  const widgetRef = useRef(null);

  const PHONE_NUMBER = "+919535003404"; // CHANGE THIS
  const GREETING = "👋 Hi there! How can we help you today?";

  const quickReplies = [
    "📚 Courses & Fees",
    "🎓 Admission Process",
    "🏆 Placements",
    "📅 Campus Tour",
    "💰 Scholarship Info",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("whatsappWidgetMinimized");
    if (saved === "true") setIsMinimized(true);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMsg}`, "_blank");
    setIsOpen(false);
    setMessage("");
    setHasUnread(false);
  };

  const handleQuickReply = (text) => {
    const encodedMsg = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMsg}`, "_blank");
    setIsOpen(false);
    setHasUnread(false);
  };

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setHasUnread(false);
      if (isMinimized) setIsMinimized(false);
    }
  };

  const handleMinimize = () => {
    setIsOpen(false);
    setIsMinimized(true);
    localStorage.setItem("whatsappWidgetMinimized", "true");
  };

  const handleRestore = () => {
    setIsMinimized(false);
    setIsOpen(true);
    localStorage.removeItem("whatsappWidgetMinimized");
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    if (message.length > 0) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Inject CSS animations inline */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes bloom {
          0% { transform: scale(0.8); opacity: 0.5; filter: blur(8px); }
          50% { transform: scale(1.2); opacity: 0.8; filter: blur(12px); }
          100% { transform: scale(0.9); opacity: 0.4; filter: blur(10px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .animate-bloom {
          animation: bloom 3s ease-in-out infinite;
        }
      `}</style>

      <div ref={widgetRef} className="fixed bottom-22 right-6 z-50 flex flex-col items-end">
        {/* Chat Card */}
        {isOpen && !isMinimized && (
          <div className="mb-4 w-80 sm:w-96 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/30 transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-5 fade-in">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-xl" />
                <span className="font-semibold tracking-wide">Chat with us</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleMinimize}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition transform hover:scale-105"
                >
                  <FaMinus />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition transform hover:scale-105"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="bg-gray-100/80 rounded-2xl p-3 text-gray-800 text-sm shadow-inner">
                {GREETING}
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 text-gray-800 text-xs px-3 py-1.5 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              {isTyping && (
                <div className="text-xs text-gray-500 italic flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></span>
                  typing...
                </div>
              )}
              <div className="flex gap-2 mt-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition bg-white/80"
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className={`p-2 rounded-full transition-all duration-200 transform active:scale-95 ${
                    message.trim()
                      ? "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
            <div className="bg-white/50 text-center text-[10px] text-gray-500 py-2 border-t border-white/30 backdrop-blur-sm">
              We'll respond on WhatsApp within minutes
            </div>
          </div>
        )}

        {/* Minimized pill */}
        {isMinimized && !isOpen && (
          <div
            onClick={handleRestore}
            className="mb-4  bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-2.5 rounded-full shadow-lg cursor-pointer flex items-center gap-2 animate-bounce transition-all duration-300 hover:scale-105"
          >
            <FaWhatsapp className="text-lg" />
            <span className="text-sm font-medium ">Chat with us</span>
          </div>
        )}

        {/* Floating Button with Blooming Rings */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-ping-slow opacity-75 bg-green-400 -z-10"></div>
          <div className="absolute inset-0 rounded-full animate-pulse-ring opacity-50 bg-green-300 -z-10"></div>
          <div className="absolute inset-0 rounded-full animate-bloom bg-gradient-to-r from-green-400 to-emerald-500 blur-xl -z-10"></div>

          <button
            onClick={toggleChat}
            className={`
              relative bg-gradient-to-r from-[#25D366] to-[#128C7E] 
              text-white p-4 rounded-full 
              shadow-2xl hover:shadow-green-500/30 
              transition-all duration-500 ease-out 
              hover:scale-110 active:scale-95 
              focus:outline-none focus:ring-4 focus:ring-green-300
              flex items-center justify-center
              ${!isOpen && !isMinimized ? "animate-float" : ""}
            `}
            style={{
              boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.3), 0 8px 10px -6px rgba(0,0,0,0.1)",
            }}
            aria-label="Chat on WhatsApp"
          >
            {isOpen ? (
              <FaTimes className="text-xl transition-transform rotate-0 duration-300" />
            ) : (
              <>
                <FaWhatsapp className="text-2xl transition-transform group-hover:scale-110" />
                {hasUnread && !isOpen && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping" />
                )}
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;