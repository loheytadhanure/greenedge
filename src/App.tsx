import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeButtons from './components/HomeButtons/HomeButtons';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <main>
        <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>
          “Green Logistics Optimizer for Smarter, Sustainable Supply Chains”
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Empower your warehouse with AI-driven forecasting and optimized routing.
        </p>
        <HomeButtons />
      </main>

      <Footer />
    </>
  );
};

export default App;
