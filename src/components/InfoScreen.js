/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import Header from "../components/header/Header";
import "./bargraph/BarGraph.css";
import "./InfoScreen.css";
class InfoScreen extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <Header />
        </div>
        <div className="outerContainer">
          <div className="infoContainer">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
        {/* <div style={{marginLeft:'10%', marginRight:'10%', borderRadius:'25px'}}>
          <BarGraph height="5vh" >
            <BarSegment name="food" width="20%" color="#3066BE" onClick={this.goToFood}/>
            <BarSegment name="transportation" width="40%" color="#119DA4" onClick={this.goToTransit}/>
            <BarSegment name="home" width="20%" color="#6D9DC5" onClick={this.goToAppliances}/>
            <BarSegment name="other" width="20%" color="#80DED9" onClick={this.goToOther}/>
          </BarGraph>
        </div> */}
      </div>
    );
  }
}

export default InfoScreen;
