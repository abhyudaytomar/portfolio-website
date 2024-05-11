import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ThrowText() {
  const [isDragging, setIsDragging] = useState(false);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }));

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    if (isDragging) {
      set({ xy: [clientX, clientY] });
    }
  };

  const text = "Throw me around!";
  const letterWidth = 20; // Adjust as needed
  const letterSpacing = 5; // Adjust as needed
  const collisionThreshold = 20; // Adjust as needed

  const calculatePositions = () => {
    let offsetX = 0;
    let maxY = 0;
    return text.split('').map((letter, index) => {
      const position = [xy[0] + offsetX, xy[1]];
      offsetX += letterWidth + letterSpacing;
      maxY = Math.max(maxY, position[1]);
      return position;
    });
  };

  const handleCollision = (positions) => {
    return positions.map((position, index) => {
      for (let i = 0; i < index; i++) {
        const otherPosition = positions[i];
        const distance = Math.abs(otherPosition[0] - position[0]);
        if (distance < collisionThreshold) {
          // Adjust position to prevent overlap
          position[0] += collisionThreshold - distance;
        }
      }
      return position;
    });
  };

  const positions = calculatePositions();
  const adjustedPositions = handleCollision(positions);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      {text.split('').map((letter, index) => {
        const position = adjustedPositions[index];
        return (
          <animated.div
            key={index}
            style={{
              position: 'absolute',
              transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
              cursor: 'grab',
              color: 'white',
            }}
          >
            {letter}
          </animated.div>
        );
      })}
    </div>
  );
}

export default ThrowText;






/*{showAdditionalText && (
    <Button variant="contained" onClick={handleButtonClick} style={{ backgroundColor: 'black', color: 'white', marginTop: "20px" }}>
    <Warning /> Do not click me
  </Button>
)}*/