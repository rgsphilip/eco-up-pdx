import React, { Component } from 'react';
import Header from './components/header/Header';
import HomeGraph from './components/bargraph/HomeGraph';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header/>
        </div>
        <p className="App-intro">
          EcoUp PDX is a resource to help Portlanders learn how to reduce our environmental footprint.
          <br/>
          Click on the segments below to learn more about where the average American's carbon emissions come from and how to reduce them. 
        </p>
        <div className="Bar-graph">
          <HomeGraph/>
        </div>
      </div>
    );
  }
}

export default App;
