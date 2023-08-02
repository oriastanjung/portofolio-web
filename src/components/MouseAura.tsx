import React, { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const MouseAura: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="hidden md:block md:fixed -top-5 -left-5 pointer-events-none z-50"
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
    >
      <div
        className="bg-white rounded-full w-16 h-16 opacity-20"
        style={{
          boxShadow: '0 0 20px 70px rgba(255, 255, 255, 0.2)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default MouseAura;
