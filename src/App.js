import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import LandingSection from "./components/LandingSection"
import BackedBy from "./components/BackedBy"
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
        <Navbar />
        <LandingSection />
        <BackedBy />
        <Signup />
    </div>
  );
}

export default App;
