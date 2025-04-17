"use client"; // Mark as Client Component

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-5 z-[10]">
      <button
        onClick={scrollToTop}
        className={`${isVisible ? "opacity-100" : "opacity-0"} 
        bg-blue-900 text-white p-3 rounded-full shadow-lg w-12 h-12 flex justify-center items-center transition-all duration-300 transform hover:-translate-y-1`}
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
      </button>
    </div>
  );
}
