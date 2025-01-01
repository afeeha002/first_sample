import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='both d-flex '>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
