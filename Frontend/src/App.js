import React from 'react';
import './App.css';

import logo from './assets/logo.png';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

function App() {

  return (
    <>
      <Header/>
      
      <div className="container">
        <img src={logo} alt="Logo Formareassociados"/>

        <div className="content">
          <Routes/>
        </div>
      </div>
    </>
  );
}

export default App;
