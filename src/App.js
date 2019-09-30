import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Views/HomePage';
import AboutPage from './Views/AboutPage';
import ContactPage from './Views/ContactPage';
import ServicePage from './Views/ServicesPage';
import SignupPage from './Views/SignupPage';
import LoginPage from './Views/LoginPage';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/services" component={ServicePage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
