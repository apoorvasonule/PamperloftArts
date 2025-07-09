import React, { useEffect, useState } from 'react';

const message = "  Welcome to Pamperloft Art Store dear customer. Please click on the above categories to explore the products we offer.";

const SalesGirlMessage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [finishedTyping, setFinishedTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + message.charAt(index));
      index++;
      if (index === message.length) {
        clearInterval(interval);
        setFinishedTyping(true);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center pointer-events-none">
      <div
        className={`bg-yellow-100 border-2 border-pink-300 shadow-md rounded-lg px-4 py-3 max-w-[90vw] sm:max-w-[500px] w-[320px] sm:w-[480px] min-h-[100px] text-pink-900 font-pixel text-center
        ${finishedTyping ? 'animate-softBounce' : ''}`}
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', lineHeight: '1.4' }}
      >
        <p className="text-[11px] sm:text-sm leading-snug">{displayedText}</p>
      </div>
    </div>
  );
};

export default SalesGirlMessage;
