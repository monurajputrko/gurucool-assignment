import React, { useState } from 'react';
import './Button.css';

export default function Button() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false) , 500); // Reset animation after 1 second
  };

  return (
    <div className="button-container" onClick={handleClick}>
      <img className={isAnimating ? 'rotate' : ''} src="https://img.icons8.com/fluency/48/plus-math.png" alt="plus-math"/>
    </div>
  );
}
