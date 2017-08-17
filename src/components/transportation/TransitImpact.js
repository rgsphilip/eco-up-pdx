/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import _ from "lodash";
import Circle from "../Circle";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class TransitImpact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const circleCount = this.props.currentEmissions / 100;
    const hideExtraCircles = circleCount > 279;
    const extraCircles = circleCount - 279;
    return (
      <div>
        <h4>
          {" "}Your annual carbon footprint is{" "}
          {Math.round(this.props.currentEmissions)}.{" "}
        </h4>
        <p style={{ display: "flex" }}>
          One {"  "}
          <Circle style={{}} /> {"  "}equals 100 pounds of carbon emissions:
        </p>

        <span>
          <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={false}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionEnter={true}
            transitionLeave={true}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {/* Generate up to 279 circles to represent carbon emissions. 
              Limited to prevent the webpage from blowing up*/}
            {_.times(_.clamp(circleCount, [0], 279), i => {
              return <Circle key={i} />;
            })}
          </ReactCSSTransitionGroup>
          {/* state how many more circles would be there. */}
          {hideExtraCircles
            ? <p style={{ display: "flex" }}>
                ... and {Math.round(extraCircles)} more
                <Circle style={{}} />s
              </p>
            : null}
        </span>
      </div>
    );
  }
}

export default TransitImpact;
