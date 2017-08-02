import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./FoodHome.css";

class DietForm extends Component {
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
        <h3> Weekly Diet</h3>
        <Form.Field className="diet-form" inline>
          <label>Days Vegan</label>
          <input />
        </Form.Field>
        <Form.Field className="diet-form" inline>
          <label>Days Vegetarian</label>
          <input />
        </Form.Field>
        <Form.Field className="diet-form" inline>
          <label>Days Pescatarian</label>
          <input />
        </Form.Field>
        <Form.Field className="diet-form" inline>
          <label>Days Low Meat</label>
          <input />
        </Form.Field>
        <Form.Field className="diet-form" inline>
          <label>Days Medium Meat</label>
          <input />
        </Form.Field>
        <Form.Field className="diet-form" inline>
          <label>Days High Meat</label>
          <input />
        </Form.Field>
        <Button type="submit" color="violet">
          Submit
        </Button>
      </Form>
    );
  }
}
export default DietForm;
