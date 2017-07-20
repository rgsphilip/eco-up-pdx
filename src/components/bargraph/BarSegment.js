import React, { Component } from 'react';
import './BarGraph.css';


class BarSegment extends Component {
  render() {
    return(
      <div 
        style={{
          width:this.props.width, 
          height:this.props.height, 
          backgroundColor:this.props.color, 
          backgroundImage: "url(" + this.props.image + ")"
        }} 
        className="segment" 
        onClick={this.props.onClick}
      >
        <div className="graphText">
          {this.props.name}
        </div>
      </div> 
      
    );
  }
}
export default BarSegment;