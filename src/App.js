import React from 'react';
import './App.scss';
import Header from './Components/Header';
import HomePage from './Views/HomePage';


function App() {
  return (
    <div className="App"
      <Header />
      <div className="container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
