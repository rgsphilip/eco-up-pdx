/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */
import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import { Grid } from "semantic-ui-react";
import "./FoodHome.css";
import { Icon } from "semantic-ui-react";

class FoodWaste extends Component {
  constructor(props) {
    super(props);
    this.goToFood = this.goToFood.bind(this);
    this.goToDiet = this.goToDiet.bind(this);
  }

  goToFood() {
    this.props.history.push("/food");
  }

  goToDiet() {
    this.props.history.push("/diet");
  }

  render() {
    return (
      <InfoScreen>
        <Grid columns={2}>
          <Grid.Column>
            <h1>FOOD WASTE</h1>
          </Grid.Column>
          <Grid.Column>
            <h5 className="nav-back" onClick={this.goToFood}>
              <Icon name="chevron up" />
              Back to Food Home
            </h5>

            <h5 className="nav-back" onClick={this.goToDiet}>
              <Icon name="chevron right" />
              On to Diet
            </h5>
          </Grid.Column>
        </Grid>
        <h3>You emit what you don't eat too.</h3>
        <Grid columns={2}>
          <Grid.Column>
            <h4>How much food is thrown out each year?</h4>
            <p>
              Up to 33% of food raised does not make it to consumption, and this
              wasted food contribued 4.4 gigatons of carbon dioxide equivalent
              gases per year. The reasons for this amount of waste vary between
              rich and poor nations. For rich nations, the waste occurs at
              stores and in our homes; in high income economies, up to 35% of
              food is thrown out by consumers.
            </p>

            <p>
              The good news about this is that reducing a significant amount of
              food waste is in our control. The EPA has an{" "}
              <a
                href="https://www.epa.gov/recycle/reducing-wasted-food-home"
                target="_blank"
                rel="noopener noreferrer"
              >
                extensive list{" "}
              </a>
              of actions you can take to reduce your food waste (and save
              money).
            </p>
          </Grid.Column>
          <Grid.Column>
            {/* hide this text until after the user has selected their answer */}
            <h4>What's the global impact?</h4>
            <p>
              Drawdown lists reducing food waste as the #3 most impactful way to
              reverse global warming with a potential savings of 70.5 gigatons
              of reduced CO2 by 2050. It states, "After taking into account the
              adoptions of plant-rich diets, if 50 percent of food waste is
              reduced by 2050, avoided emissions could be equal to 26.2 gigatons
              of carbon dioxide. Reducing waste also avoids the deforestation
              for additional farmland, preventing 44.4 gigatons of additional
              emissions."
            </p>
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}

export default FoodWaste;
