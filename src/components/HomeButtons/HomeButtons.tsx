import React, { useEffect, useRef } from 'react';
import './HomeButtons.css';

const buttonLabels = [
  'Vendor to Warehouse',
  'Warehouse to Customer',
  'Dashboard',
  'Goal',
];

const HomeButtons: React.FC = () => {
  const buttonRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    buttonRefs.current.forEach((btn, index) => {
      setTimeout(() => btn.classList.add('active'), index * 300);
    });
  }, []);

  return (
    <div className="home-buttons-container">
      {buttonLabels.map((label, idx) => (
        <div
          key={idx}
          className="home-button"
          ref={(el) => el && (buttonRefs.current[idx] = el)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default HomeButtons;
