/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import InfoScreen from "../InfoScreen";
import TransitForm from "./TransitForm";
import { connect } from "react-redux";
import { onSubmitFirstTransitCar } from "../../actions/transit";

class TransitHome extends Component {
  render() {
    return (
      <InfoScreen>
        <h1>TRANSPORTATION</h1>
        <h3>The journey matters as much as the destination</h3>

        <Grid columns={2}>
          <Grid.Column>
            <TransitForm />
          </Grid.Column>
          <Grid.Column>
            <div hidden={this.props.hiddenTransitCar}>
              <h1> hide me </h1>
            </div>
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.transit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitFirstTransitCar: hiddenTransitCar => {
      dispatch(onSubmitFirstTransitCar(hiddenTransitCar));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitHome);
