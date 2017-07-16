import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.history.push('/about');
  }

  render() {
    return(
      <div>
        <svg width="40%" height="60vh" className="rectangle" onClick={this.onClick} style={{cursor: 'pointer'}}>
          <rect width="100%" height="100%" fill="red"/>
        </svg>
        <svg width="20%" height="60vh">
          <rect width="100%" height="100%" fill="blue"/>
        </svg>
        <svg width="20%" height="60vh">
          <rect width="100%" height="100%" fill="green"/>
        </svg>
        <svg width="20%" height="60vh">
          <rect width="100%" height="100%" fill="orange"/>
        </svg>
         
      </div>
      
    );
  }

}
export default withRouter(BarGraph);