import React from 'react';
import Square from './Square';

function Grid() {
  const squares = Array(32).fill(null);

  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {squares.map((_, index) => (
        <Square key={index} />
      ))}
    </div>
  );
}

export default Grid;