/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";
import InfoScreen from "../InfoScreen";
import TransitForm from "./TransitForm";
import TransitImpact from "./TransitImpact";
import { connect } from "react-redux";
import { onSubmitFirstTransitCar } from "../../actions/transit";

class TransitHome extends Component {
  constructor(props) {
    super(props);
    this.goToTransitSolutions = this.goToTransitSolutions.bind(this);
  }
  goToTransitSolutions() {
    this.props.history.push("/transitSolutions");
  }
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
              <p>
                Annually, the average passenger car emits 10,362 pounds of CO2
                per year, according to {" "}
                <a
                  href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the EPA
                </a>
                . This is based on the assumption "the average gasoline vehicle
                on the road today has a fuel economy of about 21.6 miles per
                gallon and drives around 11,400 miles per year."
              </p>
              <TransitImpact currentEmissions={this.props.currentEmissions} />
              <h3 className="nav-next" onClick={this.goToTransitSolutions}>
                <Icon name="chevron right" />
                Learn how to reduce your emissions
              </h3>
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

export default connect(mapStateToProps)(TransitHome);
