import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BarGraph from './BarGraph';
import BarSegment from './BarSegment';

class HomeGraph extends Component {
  constructor(props) {
    super(props);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
  }

  onClick1() {
    this.props.history.push('/about');
  }
  onClick2() {
    this.props.history.push('/about');
  }
  onClick3() {
    this.props.history.push('/about');
  }
  onClick4() {
    this.props.history.push('/about');
  }

  render() {
    return(
      <BarGraph height="60vh">
        <BarSegment name="food" width="20%" color="blue" onClick={this.onClick2}/>
        <BarSegment name="transportation" width="40%" color="red" onClick={this.onClick1}/>
        <BarSegment name="home appliances" width="20%" color="green" onClick={this.onClick3}/>
        <BarSegment name="other" width="20%" color="orange" onClick={this.onClick4}/>
      </BarGraph>
      
    );
  }

}
export default withRouter(HomeGraph);