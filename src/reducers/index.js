/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import { combineReducers } from "redux";
import food from "./food";
import transit from "./transit";

const ecoApp = combineReducers({
  food,
  transit
});

export default ecoApp;
