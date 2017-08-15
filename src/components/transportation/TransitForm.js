/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  onChangeNumRefills,
  onChangeNumDays,
  onChangeNumGallons,
  onChangeNumMiles,
  onSubmitFirstTransitCar
} from "../../actions/transit";
import "../general.css";

const timePeriod = [
  { text: "day", value: "day" },
  { text: "week", value: "week" },
  { text: "month", value: "month" },
  { text: "year", value: "year" }
];

const timeInDays = { day: 1, week: 7, month: 30, year: 365 };

class TransitForm extends Component {
  constructor(props) {
    super(props);
    this.handleTimePeriodChange = this.handleTimePeriodChange.bind(this);
    this.handleNumGallonsChange = this.handleNumGallonsChange.bind(this);
    this.handleNumMilesChange = this.handleNumMilesChange.bind(this);
    this.handleNumRefillsChange = this.handleNumRefillsChange.bind(this);
  }

  handleTimePeriodChange(event, dropdownProps) {
    const { onChangeNumDays } = this.props;
    onChangeNumDays(timeInDays[dropdownProps.value]);
  }

  handleNumRefillsChange(event) {
    const { onChangeNumRefills } = this.props;
    onChangeNumRefills(event.target.value);
  }

  handleNumGallonsChange(event) {
    const { onChangeNumGallons } = this.props;
    onChangeNumGallons(event.target.value);
  }

  handleNumMilesChange(event, value) {
    const { onChangeNumMiles } = this.props;
    onChangeNumMiles(event.target.value);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h3> Driving</h3>
        <Form.Field>
          <label>How many times do you refill for gas?</label>
          <Form.Field inline>
            <input onBlur={this.handleNumRefillsChange} />{" "}
            <label> times per </label>
            {"  "}
            <Dropdown
              placeholder="time period"
              selection
              options={timePeriod}
              onChange={this.handleTimePeriodChange}
            />;
          </Form.Field>
        </Form.Field>
        <Form.Field>
          <label>How many gallons of gas do you get on average?</label>
          <Form.Input width={5} onBlur={this.handleNumGallonsChange} />
        </Form.Field>
        <Form.Field>
          <label>
            How many miles do you drive between each time you refill? (optional){" "}
          </label>
          <Form.Input width={5} onBlur={this.handleNumMilesChange} />
        </Form.Field>
        <Button
          type="submit"
          color="violet"
          onClick={this.props.onSubmitFirstTransitCar}
        >
          Submit
        </Button>
      </Form>
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
    onChangeNumDays: numDays => {
      dispatch(onChangeNumDays(numDays));
    },
    onChangeNumGallons: numGallons => {
      dispatch(onChangeNumGallons(numGallons));
    },
    onChangeNumRefills: numRefills => {
      dispatch(onChangeNumRefills(numRefills));
    },
    onChangeNumMiles: numMiles => {
      dispatch(onChangeNumMiles(numMiles));
    },
    onSubmitFirstTransitCar: hiddenTransitCar => {
      dispatch(onSubmitFirstTransitCar(hiddenTransitCar));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransitForm);
