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

const test = [1, 1, 1, 1, 1];

class FoodDiet extends Component {
  constructor(props) {
    super(props);
    this.goToFood = this.goToFood.bind(this);
    this.goToWaste = this.goToWaste.bind(this);
    this.goToVegDiet = this.goToVegDiet.bind(this);
    this.translateSliderValue = this.translateSliderValue.bind(this);
    this.state = {
      volume: 4
    };
  }

  handleOnChange = value => {
    this.setState({
      volume: Math.max(value, 0)
    });
  };

  goToFood() {
    this.props.history.push("/food");
  }

  goToWaste() {
    this.props.history.push("/waste");
  }

  goToVegDiet() {
    this.props.history.push("/eatveg");
  }

  translateSliderValue(value) {
    const dietArray = [
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Omnivore - Low Meat",
      "Omnivore - Medium Meat",
      "Omnivore - High Meat"
    ];
    return dietArray[value];
  }

  render() {
    console.log("current", this.props.currentEmissions);
    console.log("pledged", this.props.pledgedEmissions);
    let { volume } = this.state;
    return (
      <InfoScreen>
        <Grid columns={2}>
          <Grid.Column>
            <h1>DIET CHOICES</h1>
            <h3>You emit what you eat.</h3>
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
        </Grid>
        <Grid columns={3}>
          <Grid.Column>
            <h4>How would you characterize your diet?</h4>
            <Slider
              min={-1}
              max={5}
              step={1}
              value={volume}
              orientation="horizontal"
              tooltip={false}
              onChange={this.handleOnChange}
            />
            <div className="diet-type">
              {this.translateSliderValue(volume)}
            </div>
            <Button type="submit" color="violet">
              Submit
            </Button>

            <h4>
              {" "}Your annual carbon footprint is {}.
            </h4>
            <p style={{ display: "flex" }}>
              One <Circle style={{}} /> equals 15 pounds of carbon emissions:
            </p>
            <span style={{ display: "flex", flexWrap: "wrap" }}>
              {test.map(i => {
                return <Circle />;
              })}
            </span>
            {/*Todo: put in a submit button and diet description here  */}

            {/* <DietForm onSubmit={this.props.onSubmitDiet} /> */}
          </Grid.Column>
          <Grid.Column>
            {/* hide this text until after the user has selected their answer */}

            <h4>What's the global impact?</h4>
            <p>
              Drawdown lists switching to a plant-rich diet as #4 in their list
              of most effective ways to reverse global warming. It states, "If
              50% of the world's population restricts their diet to 2,500
              calories per day and reduces meat consumption overall, we estimate
              at least 26.7 gigatons [by 2050] of emissions could be avoided
              from dietary change alone. If avoided deforestation from land use
              change is included, an additional 39.3 gigatons of emissions could
              be avoided, making healthy, plant-rich diets one of ht emost
              impactful solutions at a total of 66 gigatons reduced."
            </p>
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
            <h3 className="nav-next" onClick={this.goToVegDiet}>
              <Icon name="chevron right" />
              Learn how to change your diet
            </h3>
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
