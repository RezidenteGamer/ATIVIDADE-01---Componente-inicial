import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="w-full h-16 bg-red-600 mb-4"></div>
      
      {/* Main Content Area */}
      <div className="flex gap-4 mb-4">
        {/* Left Section */}
        <div className="flex-1 h-64 bg-red-600 rounded-sm"></div>
        
        {/* Right Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="h-20 bg-red-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-2xl font-bold">1</span>
          </div>
          <div className="h-20 bg-red-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-2xl font-bold">2</span>
          </div>
          <div className="h-20 bg-red-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-2xl font-bold">3</span>
          </div>
          <div className="h-20 bg-red-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-2xl font-bold">4</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full h-16 bg-red-800"></div>
    </div>
  );
}

export default App;