// Copyright (c) 2017 Rachel Philip
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution
// for license terms.

import React, { Component } from "react";
import Header from "./../../components/header/Header";

class About extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <Header />
        </div>
        <p>About this app</p>
      </div>
    );
  }
}

export default About;
