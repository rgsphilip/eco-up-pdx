import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BarGraph from './BarGraph';
import BarSegment from './BarSegment';
import './BarGraph.css';

class HomeGraph extends Component {
  constructor(props) {
    super(props);
    this.goToTransit = this.goToTransit.bind(this);
    this.goToFood = this.goToFood.bind(this);
    this.goToAppliances = this.goToAppliances.bind(this);
    this.goToOther = this.goToOther.bind(this);
  }

  goToTransit() {
    this.props.history.push('/about');
  }
  goToFood() {
    this.props.history.push('/about');
  }
  goToAppliances() {
    this.props.history.push('/about');
  }
  goToOther() {
    this.props.history.push('/about');
  }

  render() {
    return(
      <BarGraph height="60vh">
        <BarSegment name="food" width="20%" color="blue" onClick={this.goToFood}/>
        <BarSegment name="transportation" width="40%" color="red" onClick={this.goToTransit}/>
        <BarSegment name="home appliances" width="20%" color="green" onClick={this.goToAppliances}/>
        <BarSegment name="other" width="20%" color="orange" onClick={this.goToOther}/>
      </BarGraph>
      
    );
  }

}
export default withRouter(HomeGraph);