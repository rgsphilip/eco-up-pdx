/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import TransitForm from "./TransitForm";

class TransitHome extends Component {
  render() {
    return (
      <InfoScreen>
        <h1>TRANSPORTATION</h1>
        <h3>The journey matters as much as the destination</h3>
        <TransitForm />
      </InfoScreen>
    );
  }
}

export default TransitHome;
