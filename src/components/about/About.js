import React, { Component } from 'react';
import Header from './../../components/header/Header';


class About extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <Header/>
        </div>
        <p>
          About this app
        </p>

      </div>
    );
  }
}

export default About;