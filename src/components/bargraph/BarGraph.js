import React, { Component } from 'react';

class BarGraph extends Component {
  render() {
    return(
      <div className="rectangle">
        <svg width="40%" height="100%" className="rectangle">
          <rect width="100%" height="100%" fill="red"/>
        </svg>
        <svg width="20%" height="100%">
          <rect width="100%" height="100%" fill="blue"/>
        </svg>
        <svg width="20%" height="100%">
          <rect width="100%" height="100%" fill="green"/>
        </svg>
        <svg width="20%" height="100%">
          <rect width="100%" height="100%" fill="orange"/>
        </svg>
        {/*<div className="rectangle"></div>*/}
         
      </div>
      
    );
  }

}
export default BarGraph;