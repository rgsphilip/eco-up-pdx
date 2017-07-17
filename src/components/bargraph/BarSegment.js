import React, { Component } from 'react';

class BarSegment extends Component {

  render() {
    return(
      <svg width={this.props.width} height={this.props.height} className="rectangle" onClick={this.props.onClick} style={{cursor: 'pointer'}}>
        <rect width="100%" height="100%" fill={this.props.color}/>
      </svg>         
      
    );
  }

}
export default BarSegment;