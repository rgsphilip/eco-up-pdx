import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import BarGraph from "../bargraph/BarGraph";
import BarSegment from "../bargraph/BarSegment";
import { Grid, Segment, Divider } from "semantic-ui-react";
import "./FoodHome.css";
import DietForm from "./DietForm";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { onSubmitDiet } from "../../actions/food";

class FoodDiet extends Component {
  constructor(props) {
    super(props);
    this.goToFood = this.goToFood.bind(this);
    this.goToWaste = this.goToWaste.bind(this);
  }

  goToFood() {
    this.props.history.push("/food");
  }

  goToWaste() {
    this.props.history.push("/waste");
  }

  render() {
    console.log("current", this.props.currentEmissions);
    console.log("pledged", this.props.pledgedEmissions);

    return (
      <InfoScreen>
        <Grid columns={2}>
          <Grid.Column>
            <h1>DIET CHOICES</h1>
          </Grid.Column>
          <Grid.Column>
            <h5 className="nav-back" onClick={this.goToFood}>
              <Icon name="chevron up" />
              Back to Food Home
            </h5>

            <h5 className="nav-back" onClick={this.goToWaste}>
              <Icon name="chevron right" />
              On to Food Waste
            </h5>
          </Grid.Column>
          <h3>You emit what you eat.</h3>
        </Grid>
        <Grid columns={3}>
          <Grid.Column>
            <h4>How would you characterize your diet?</h4>
            <DietForm onSubmit={this.props.onSubmitDiet} />
          </Grid.Column>
          <Grid.Column>
            {/* hide this text until after the user has selected their answer */}
            <h4> Your annual carbon footprint </h4>

            {/* <h4>What's the global impact?</h4>
            <p>
              Drawdown lists switching to a plant-rich diet as #4 in their list of most effective ways to 
              reverse global warming. It states, "If 50% of the world's population restricts their diet to 2,500 
              calories per day and reduces meat consumption overall, we estimate at least 26.7 gigatons [by 2050] of 
              emissions could be avoided from dietary change alone. If avoided deforestation from land use 
              change is included, an additional 39.3 gigatons of emissions could be avoided, making healthy,
              plant-rich diets one of ht emost impactful solutions at a total of 66 gigatons reduced."
            </p>  */}
          </Grid.Column>

          <Grid.Column>
            <h4>How does diet affect greenhouse gas emissions?</h4>
            <p>
              One of the most effective ways to curb your greenhouse gas
              emissions is to eat more plants and less animals. Multiple studies
              link the raising and shipping of livestock to high greenhouse gas
              emissions, especially cow products. Producing one pound of beef
              creates 26 pounds of CO2 equivalent gases. According to Drawdown,
              "if cattle were their own nation, they would be the world's
              third-largest emitter of greenhouse gases." While cows are
              especially hard on the environment, the raising and consumption of
              any livestock is generally less efficent than eating plants, since
              many pounds of food and water are necessary to create one pound of
              animal product.
            </p>
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.food
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitDiet: diet => {
      dispatch(onSubmitDiet(diet));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDiet);
