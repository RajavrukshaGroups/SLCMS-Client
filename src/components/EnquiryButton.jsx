import React from "react";
import { useNavigate } from "react-router-dom";

const EnquiryButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleClick}
      className="
        fixed right-0 bottom-40
        bg-orange-600 hover:bg-orange-700
        text-white text-sm font-semibold
        px-2 py-3
        rounded-r-md
        cursor-pointer
        shadow-lg
        z-50
        [writing-mode:vertical-rl]
        rotate-180
        transition-all duration-300
        hover:scale-105
      "
    >
      Enquiry Now
    </div>
  );
};

export default EnquiryButton;