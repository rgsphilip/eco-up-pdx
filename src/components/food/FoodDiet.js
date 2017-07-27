import React, { Component } from 'react';
import InfoScreen from '../InfoScreen';
import BarGraph from '../bargraph/BarGraph';
import BarSegment from '../bargraph/BarSegment';
import { Grid, Segment, Divider } from 'semantic-ui-react'
import './FoodHome.css';

class FoodDiet extends Component {
  render() {
    return (
      <InfoScreen>
        <h1>DIET CHOICES</h1>
        <h3>You emit what you eat.</h3>
        <h4>How would you characterize your diet?</h4>
        
      </InfoScreen>
    );
  }
}

export default FoodDiet;