import React from 'react';
import Grid from './components/Grid';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <Grid />
      </div>
    </div>
  );
}

export default App;