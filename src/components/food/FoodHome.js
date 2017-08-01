import React, { Component } from 'react';
import InfoScreen from '../InfoScreen';
import BarGraph from '../bargraph/BarGraph';
import BarSegment from '../bargraph/BarSegment';
import { Grid, Segment, Divider } from 'semantic-ui-react'
import './FoodHome.css';

class FoodHome extends Component {
  constructor(props) {
    super(props);
    this.goToDiet = this.goToDiet.bind(this);
    this.goToWaste = this.goToWaste.bind(this);
  }

  goToDiet() {
    this.props.history.push('/diet');
  }

  goToWaste() {
    this.props.history.push('/waste');
  }

  render() {
    return (
      <InfoScreen>
        <h1>FOOD</h1>
        <h3>
          All food production and food waste produce greenhouse gases. However, not all foods are created 
          equal. 
        </h3>
        <Grid columns={2} relaxed>
          <Grid.Column>
            <div className="divider">
              <div className="circle" onClick={this.goToDiet}/>
            </div>
            <div className="divider">
              <h3 onClick={this.goToDiet}>
                Diet Choices
              </h3>
            </div>
            
          </Grid.Column>

          <Grid.Column>
            <div className="divider">
              <div className="circle" onClick={this.goToWaste}/>
            </div>
            <div className="divider">
              <h3 onClick={this.goToWaste}>
                Food Waste
              </h3>
            </div>
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}

export default FoodHome;