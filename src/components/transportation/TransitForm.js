/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  onSubmitCarTransit,
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
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h3> Driving</h3>
        <Form.Field>
          <label>How many times do you refill for gas?</label>
          <Form.Field inline>
            <input /> <label> times per </label>
            {"  "}
            <Dropdown
              placeholder="time period"
              selection
              options={timePeriod}
            />;
          </Form.Field>
        </Form.Field>
        <Form.Field>
          <label>How many gallons of gas do you get on average?</label>
          <Form.Input width={5} />
        </Form.Field>
        <Form.Field>
          <label>
            How many miles do you drive between each time you refill? (optional){" "}
          </label>
          <Form.Input width={5} />
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
    onSubmitCarTransit: transit => {
      dispatch(onSubmitCarTransit(transit));
    },
    onSubmitFirstTransitCar: hiddenTransitCar => {
      dispatch(onSubmitFirstTransitCar(hiddenTransitCar));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransitForm);
