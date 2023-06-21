import React, { useState } from 'react';

const ColorPicker = () => {
  const colors = [
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#800080', // Purple
    '#FFA500', // Orange
    '#008000', // Dark Green
    '#FFFFFF', // White
  ];

  const [showGrid, setShowGrid] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowGrid(!showGrid);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: selectedColor || 'transparent',
          width: '100px',
          height: '50px',
          borderRadius: '5%',
          border: '1px solid black',
        }}
        onClick={handleButtonClick}
      >
        Click Me
      </button>
      {showGrid && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '10px',
            marginTop: '10px',
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                borderRadius: '5px',
                border: '1px solid black',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
