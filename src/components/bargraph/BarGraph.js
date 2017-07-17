import React, { Component } from 'react';

class BarGraph extends Component {
  render() {
    return(
      <div style={{display:'flex'}}>
        {React.Children.map(this.props.children, child => React.cloneElement(child, {height: this.props.height})) }
      </div>
      
    );
  }

}
export default BarGraph;