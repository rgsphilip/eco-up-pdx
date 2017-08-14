/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/about/About";
import InfoScreen from "./components/InfoScreen";
import TransitHome from "./components/transportation/TransitHome";
import TransitSolutions from "./components/transportation/TransitSolutions";
import FoodHome from "./components/food/FoodHome";
import FoodDiet from "./components/food/FoodDiet";
import VegDiet from "./components/food/VegDiet";
import FoodWaste from "./components/food/FoodWaste";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ecoApp from "./reducers";

const store = createStore(ecoApp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/info" component={InfoScreen} />
        <Route path="/transit" component={TransitHome} />
        <Route path="/transitsolutions" component={TransitSolutions} />
        <Route path="/food" component={FoodHome} />
        <Route path="/diet" component={FoodDiet} />
        <Route path="/eatveg" component={VegDiet} />
        <Route path="/waste" component={FoodWaste} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
