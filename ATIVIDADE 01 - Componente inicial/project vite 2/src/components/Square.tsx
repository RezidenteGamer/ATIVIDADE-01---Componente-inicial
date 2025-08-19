import React from 'react';

interface SquareProps {
  onClick?: () => void;
}

function Square({ onClick }: SquareProps) {
  return (
    <div
      className="w-16 h-16 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors"
      onClick={onClick}
    />
  );
}

export default Square;