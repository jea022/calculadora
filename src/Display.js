
import React from 'react';
import './styles/Display.css';

function Display({ input }) {
  return (
    <div className="display">
      {input || '0'}
    </div>
  );
}

export default Display;
    