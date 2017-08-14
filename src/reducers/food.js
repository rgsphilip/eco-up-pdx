/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import { ON_SUBMIT_DIET, ON_SUBMIT_FIRST_DIET } from "../actions/food";
import { SLIDER_VALUES } from "../constants/FoodConst";

const initialState = {
  diet: 4,
  hiddenDiet: true,
  currentEmissions: SLIDER_VALUES[4] * 365 / 15,
  pledgedEmissions: 0
};

export default function food(state = initialState, action) {
  switch (action.type) {
    case ON_SUBMIT_DIET:
      return {
        ...state,
        diet: action.diet,
        currentEmissions: SLIDER_VALUES[action.diet] * 365 / 15
      };
    case ON_SUBMIT_FIRST_DIET:
      return {
        ...state,
        hiddenDiet: false
      };
    default:
      return state;
  }
}
