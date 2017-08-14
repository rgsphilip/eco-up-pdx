/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import {
  ON_SUBMIT_CAR_TRANSIT,
  ON_SUBMIT_FIRST_TRANSIT_CAR
} from "../actions/transit";
import { GAL_OF_GAS_CO2 } from "../constants/TransitConst";

const initialState = {
  hiddenTransitCar: true,
  currentEmissions: 0
};

export default function transit(state = initialState, action) {
  switch (action.type) {
    case ON_SUBMIT_CAR_TRANSIT:
      return {
        ...state,
        transit: action.transit,
        currentEmissions: [action.transit] * 365 / 15
      };
    case ON_SUBMIT_FIRST_TRANSIT_CAR:
      return {
        ...state,
        hiddenTransitCar: false
      };
    default:
      return state;
  }
}
