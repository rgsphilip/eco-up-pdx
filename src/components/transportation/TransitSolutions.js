/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

// bus, bike, carpool, park + ride, teleconference
// bus time can be used to read, do work, etc
// investigate taking train or bus for long distance rather than fly
// support high speed trains, additional public transit efforts
// ideally, live close to where you work, or on a public transit conduit that allows easy transit
///// acknowledge that this is not always economically feasible

import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import { Grid, Icon } from "semantic-ui-react";

class TransitSolutions extends Component {
  constructor(props) {
    super(props);
    this.goToTransit = this.goToTransit.bind(this);
  }

  goToTransit() {
    this.props.history.push("/transit");
  }

  render() {
    return (
      <InfoScreen>
        <Grid columns={2}>
          <Grid.Column>
            <h1>TRANSIT CHOICES</h1>
            <h3>The journey matters as much as the destination</h3>
          </Grid.Column>
          <Grid.Column>
            <h5 className="nav-back" onClick={this.goToTransit}>
              <Icon name="chevron up" />
              Back to Transit Home
            </h5>

            {/* <h5 className="nav-back" onClick={this.goToWaste}>
              <Icon name="chevron right" />
              On to Food Waste
            </h5> */}
          </Grid.Column>
        </Grid>
        <Grid columns={3}>
          <Grid.Column>
            <h4>Public Transit</h4>
            <p>
              Portland has a robust public transit time, Trimet. If you work or
              live in downtown, Trimet is especially easy to use. Both the
              Trimet site and Google Maps offer the ability to easily plan your
              bus trip. Bus pases can be bought for 1-trip, daily, monthly, or
              annual time periods. If you are employed or a student, it's
              possbile your work or school provides subsidised or free bus
              passes.
            </p>
            <p>
              Public transit not only reduces your carbon emissions drastically
              (since the bus was running anyways!), it helps the city's
              congestion problem. During rush hours, Trimet vehicles are often
              close to capacity, which relieves pressure from Portland's
              traffic.
            </p>
          </Grid.Column>
          <Grid.Column>
            <h4>Biking</h4>
            <p>
              Portland is well know for its bike-friendly roads. You can learn
              more about Portland's biking resouces from the Portland Bureau of
              Transportation{" "}
              <a
                href="https://www.portlandoregon.gov/transportation/34772"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>. Portland has many roads with dedicated bike lanes, as well
              as alternate bike paths.
            </p>
            <p>
              If you decide to bike, the{" "}
              <a
                href="https://www.cdc.gov/motorvehiclesafety/bicycle/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC
              </a>{" "}
              suggests that wearing a helmet, lights, and fluorescent and
              retro-reflective clothing make bikers easier to see by motorists
              and less likely to be in an accident.
            </p>
          </Grid.Column>
          <Grid.Column>
            <h4>Carpool, Efficient Cars, Telecommute</h4>
            <p>
              Portland's public transit and biking infrasturcture may not be
              feasible for everyone. If you live near coworkers, carpooling can
              be an effective way cut your emissions and costs by half (or more
              with multiple riders). If you're reducing the total number of
              miles you drive, you can save money on car insurance by using
              pay-by-mile insturance such as Metromile.
            </p>
            <p>
              If you are in a position to get a new car, consider that new car's
              gas efficiency or getting an electric vehicle. There are also
              several car-sharing services, such as Car2Go in the Portland area.
            </p>
            <p>
              If your occupation gives you the option, consider telecommuting
              for part of your week. Even if you work one day from home out of a
              five day workweek, you are still cutting your normal commute
              emissions by 20 percent!
            </p>
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}
export default TransitSolutions;
