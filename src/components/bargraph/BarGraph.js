/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";

class BarGraph extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, { height: this.props.height })
        )}
      </div>
    );
  }
}
export default BarGraph;
