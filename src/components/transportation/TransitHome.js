/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import BarGraph from "../bargraph/BarGraph";
import BarSegment from "../bargraph/BarSegment";

class TransitHome extends Component {
  render() {
    return (
      <InfoScreen>
        <BarGraph height="3vh">
          <BarSegment width="30%" color="red" />
          <BarSegment width="40%" color="green" />
          <BarSegment width="30%" color="orange" />
        </BarGraph>
      </InfoScreen>
    );
  }
}

export default TransitHome;
