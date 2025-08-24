"use client";
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
    <span className="typewriter-text">
      <Typewriter
        words={['Full Stack Developer', 'Web Developer', 'AI Enthusiast']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypewriterEffect;