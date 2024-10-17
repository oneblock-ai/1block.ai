import React, { useState, useEffect } from 'react';
import './TypingEffect.css'; // Import the CSS for styling

const TypingEffect = () => {
  const strings = ["Data Scientist.", "ML Developers.", "LLMOps.", "Machine Learning."];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;  // Typing speed in milliseconds
  const deletingSpeed = 100; // Deleting speed in milliseconds
  const delayBetweenWords = 1000; // Delay before switching to the next word

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentCharIndex((prev) => prev - 1);
      } else {
        setCurrentCharIndex((prev) => prev + 1);
      }

      // If not deleting and end of word is reached, start deleting after a delay
      if (!isDeleting && currentCharIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
      // If deleting and no more characters left, move to next word
      else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length); // Loop through strings
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentStringIndex, strings]);

  return (
    <div>
      <span id="typing">{strings[currentStringIndex].substring(0, currentCharIndex)}</span>
      <span className="cursor"></span>
    </div>
  );
};

export default TypingEffect;