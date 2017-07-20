import React, { Component } from 'react';
import Header from '../components/header/Header';
import BarGraph from './bargraph/BarGraph';
import BarSegment from './bargraph/BarSegment';
import './bargraph/BarGraph.css';

class InfoScreen extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <Header/>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2em'}}>
          <div style={{height:'80vh', width:'90%', backgroundColor:'lightgray', borderRadius:'25px'}}/>
        </div>
        <div style={{marginLeft:'10%', marginRight:'10%', borderRadius:'25px'}}>
        <BarGraph height="5vh" >
          <BarSegment name="food" width="20%" color="blue" onClick={this.goToFood}/>
          <BarSegment name="transportation" width="40%" color="red" onClick={this.goToTransit}/>
          <BarSegment name="home appliances" width="20%" color="green" onClick={this.goToAppliances}/>
          <BarSegment name="other" width="20%" color="orange" onClick={this.goToOther}/>
        </BarGraph>
        </div>
      </div>
    );
  }
}

export default InfoScreen;