import React from 'react';
import Navbar from './components/Navbar';
import SystemInit from './components/SystemInit';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SystemInit />
      {/* Future sections will go here */}
    </div>
  );
}

export default App;