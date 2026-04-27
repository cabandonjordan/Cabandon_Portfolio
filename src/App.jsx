import React from 'react';
import Navbar from './components/Navbar';
import SystemInit from './components/SystemInit';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SystemInit />
      <TechStack />
    </div>
  );
}

export default App;