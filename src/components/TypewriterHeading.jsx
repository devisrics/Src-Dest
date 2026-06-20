import React, { useState, useEffect, useRef } from 'react';

const TypewriterHeading = ({ text, className, as: Component = 'h2' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Speed of typing (50ms per character)

      return () => clearInterval(interval);
    }
  }, [hasAnimated, text]);

  return (
    <Component ref={elementRef} className={`relative ${className}`}>
      {/* Invisible text to maintain layout and line-breaks naturally */}
      <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">{text}</span>
      {/* Absolute text that grows character by character */}
      <span className="absolute inset-0">{displayedText}</span>
    </Component>
  );
};

export default TypewriterHeading;
