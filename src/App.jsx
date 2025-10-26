import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Events from './components/Events/Events';
import Communities from './components/Communities/Communities';
import Chat from './components/Chat/Chat';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Events />
      <Communities />
      {/* <Chat /> */}
      <Footer />
    </div>
  );
}

export default App;
