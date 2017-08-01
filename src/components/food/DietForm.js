import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './FoodHome.css';
class DietForm extends Component {
  render() {
    return(
      
      <Form>
        <h3> Weekly Diet</h3>
        <Form.Field inline>
          <label>Days Vegan</label>
          <input/>
        </Form.Field>
        <Form.Field inline>
          <label>Days Vegetarian</label>
          <input/>
        </Form.Field>
        <Form.Field inline>
          <label>Days Pescetarian</label>
          <input/>
        </Form.Field>
        <Form.Field inline>
          <label>Days Low Meat</label>
          <input/>
        </Form.Field>
        <Form.Field inline>
          <label>Days Medium Meat</label>
          <input/>
        </Form.Field>
        <Form.Field inline>
          <label>Days High Meat</label>
          <input/>
        </Form.Field>
        <Button type='submit' color="violet">Submit</Button>
      </Form>
    )
  }
}
export default DietForm;