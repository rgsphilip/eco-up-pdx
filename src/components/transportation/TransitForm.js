/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "../general.css";

class TransitForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { onSubmit } = this.props;

    onSubmit(123);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h3> Weekly Driving</h3>
        <Form.Field className="question-form" inline>
          <label>Miles In Daily Commute</label>
          <input />
        </Form.Field>
        <Form.Field className="question-form" inline>
          <label>Days per Week Commuting</label>
          <input />
        </Form.Field>
        <Form.Field className="question-form" inline>
          <label>Average Miles per Gallon</label>
          <input />
        </Form.Field>
        <Button type="submit" color="violet">
          Submit
        </Button>
      </Form>
    );
  }
}
export default TransitForm;
