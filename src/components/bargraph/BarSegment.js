import React, { Component } from 'react';

class BarSegment extends Component {

//https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle


  render() {
    return(
      <div style={{width:this.props.width, height:this.props.height, backgroundColor:this.props.color, cursor: 'pointer'}} 
      className="rectangle" onClick={this.props.onClick}>
        <span>
          {this.props.name}
        </span>
      </div> 
      
    );
  }

}
export default BarSegment;