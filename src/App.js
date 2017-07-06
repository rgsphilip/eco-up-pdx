import React, { Component } from 'react';
import Header from './components/header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header/>
        </div>
        <p className="App-intro">
          ecoUp PDX is a resource to help Portlanders learn how to reduce our environmental footprint.
        </p>
      </div>
    );
  }
}

export default App;
