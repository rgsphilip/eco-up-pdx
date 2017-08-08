import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import { Grid } from "semantic-ui-react";
import "./FoodHome.css";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { onSubmitDiet } from "../../actions/food";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Button } from "semantic-ui-react";
import Circle from "../Circle";

class VegDiet extends Component {
  render() {
    return (
      <InfoScreen>
        <Grid columns={2}>
          <Grid.Column>
            <h1>EAT YOUR VEGGIES</h1>
          </Grid.Column>
          <Grid.Column>
            <h5 className="nav-back" onClick={this.goToFood}>
              <Icon name="chevron up" />
              Back to Food Home
            </h5>

            <h5 className="nav-back" onClick={this.goToWaste}>
              <Icon name="chevron up" />
              Back to Diet Home
            </h5>
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}
export default VegDiet;
