/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import { Grid, Modal, Icon, Button } from "semantic-ui-react";
import "./FoodHome.css";
import DietSlider from "./DietSlider";

class VegDiet extends Component {
  constructor(props) {
    super(props);
    this.goToFood = this.goToFood.bind(this);
    this.goToDiet = this.goToDiet.bind(this);
    this.state = {
      openVeg: false,
      openNonVeg: false
    };
  }

  goToFood() {
    this.props.history.push("/food");
  }

  goToDiet() {
    this.props.history.push("/diet");
  }

  show = (size, isVeg) => () =>
    isVeg
      ? this.setState({ size, openVeg: true })
      : this.setState({ size, openNonVeg: true });
  closeVeg = () => this.setState({ openVeg: false });
  closeNonVeg = () => this.setState({ openNonVeg: false });
  render() {
    const { openVeg, openNonVeg, size } = this.state;
    return (
      <InfoScreen>
        <Grid columns={2}>
          <Grid.Column>
            <h1>EAT YOUR VEGGIES</h1>
          </Grid.Column>
          <Grid.Column>
            <h5 className="nav-back" onClick={this.goToFood}>
              <Icon name="chevron up" />
              Back to Food Home
            </h5>

            <h5 className="nav-back" onClick={this.goToDiet}>
              <Icon name="chevron up" />
              Back to Diet Home
            </h5>
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column width={9}>
            <h3 className="modal-link" onClick={this.show("fullscreen", true)}>
              If you are ready to give up meat
              <Icon name="chevron right" />
            </h3>
            <Modal open={openVeg} onClose={this.closeVeg}>
              <Modal.Header>If you are ready to give up meat... </Modal.Header>
              <Modal.Content>
                <p>
                  ... that's great! As you can see, changing your eating habits
                  away from animal products is very effective in curbing your
                  carbon emissions. Here are some resources to check out to
                  shift from an omnivore diet to a vegetarian or vegan diet:
                </p>
                <ul>
                  <li>
                    <a
                      href="http://www.isachandra.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Isa Chandra Moskowitz
                    </a>{" "}
                    is one of the best vegan cookbook authors around. Her books
                    are great at helping people who are new to meatless cooking
                    and who may be uncomfortable with cooking in general. Get
                    started with <i>Isa Does It</i> or{" "}
                    <i>Vegan with a Vengeance</i>.
                  </li>
                  <br />
                  <li>
                    The internet is exploding with vegetarian and vegan recipes.
                    Just search for a recipe you're craving and the keyword
                    'vegan' or 'vegetarian', and you'll likely find several
                    versions you can try out.
                  </li>
                  <br />
                  <li>
                    Worried about not getting enough protein? Nutrition is a
                    valid concern; you can't just stop eating meat and not add
                    in other protein sources. However, it is possible to get all
                    your nutrition needs from plants.
                  </li>
                </ul>
              </Modal.Content>
              <Modal.Actions>
                <Button icon="check" onClick={this.closeVeg} />
              </Modal.Actions>
            </Modal>
            <h3 className="modal-link" onClick={this.show("fullscreen", false)}>
              If you aren't ready to give up meat
              <Icon name="chevron right" />
            </h3>
            <Modal open={openNonVeg} onClose={this.close}>
              <Modal.Header>
                If you aren't ready to give up meat...{" "}
              </Modal.Header>
              <Modal.Content>
                <p>
                  ... that's okay. Food is intensely personal, imbued with
                  familial and cultural significance, and giving up something
                  like that is hard. You can still have a positive impact by
                  adapting your eating habits.
                </p>
                <ul>
                  <li>Consider meat a luxury, rather than a staple.</li>
                  <br />
                  <li>
                    Try out some vegetarian based meals, and incorporate them
                    into your weekly meals.
                  </li>
                  <br />
                  <li>
                    Check out{" "}
                    <a
                      href="http://www.powells.com/book/vb6-9780385344746/17-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vegan Before 6
                    </a>{" "}
                    by Mark Bittman.
                  </li>
                </ul>
              </Modal.Content>
              <Modal.Actions>
                <Button icon="check" onClick={this.closeNonVeg} />
              </Modal.Actions>
            </Modal>

            <h4>Where do I get more plant based foods?</h4>
            <p>
              If you're in Portland, you're in luck; there is a plethora of
              veggie-based foods, both in grocery stores and at restaurants.
              Rather than list the many vegetarian and vegan restaurants here,
              just head over to your favorite search engine and look up
              "Portland Vegan Restaurants". Many restaurants have a few
              vegetarian or vegan options as well, even if they don't
              specifically cater to vegetarians.
            </p>
            <p>
              There are lots of good vegetarian options at grocery stores as
              well. If you miss meat and want a substitute, head over to the
              natural food section in your grocery store and you'll likely find
              many great products. Portland also has a rad all-vegan grocery
              store,{" "}
              <a
                href="https://www.foodfightgrocery.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food Fight
              </a>, with lots of specialty foods.
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <h4>See how your diet impacts the climate </h4>
            <DietSlider />
          </Grid.Column>
        </Grid>
      </InfoScreen>
    );
  }
}
export default VegDiet;
