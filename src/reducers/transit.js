/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import {
  ON_SUBMIT_FIRST_TRANSIT_CAR,
  ON_CHANGE_NUM_REFILLS,
  ON_CHANGE_NUM_DAYS,
  ON_CHANGE_NUM_GALLONS,
  ON_CHANGE_NUM_MILES
} from "../actions/transit";
import { GAL_OF_GAS_CO2 } from "../constants/TransitConst";

const initialState = {
  hiddenTransitCar: true,
  currentEmissions: 0
};

const calculateEmissions = (numRefills, numDays, numGallons) => {
  if (!numRefills || !numDays || !numGallons) {
    return 0;
  }
  return numRefills / numDays * numGallons * 365 * GAL_OF_GAS_CO2;
};

export default function transit(state = initialState, action) {
  switch (action.type) {
    case ON_SUBMIT_FIRST_TRANSIT_CAR:
      return {
        ...state,
        hiddenTransitCar: false
      };

    case ON_CHANGE_NUM_DAYS:
      return {
        ...state,
        numDays: action.numDays,
        currentEmissions: calculateEmissions(
          state.numRefills,
          action.numDays,
          state.numGallons
        )
      };

    case ON_CHANGE_NUM_GALLONS:
      return {
        ...state,
        numGallons: action.numGallons,
        currentEmissions: calculateEmissions(
          state.numRefills,
          state.numDays,
          action.numGallons
        )
      };

    case ON_CHANGE_NUM_REFILLS:
      return {
        ...state,
        numRefills: action.numRefills,
        currentEmissions: calculateEmissions(
          action.numRefills,
          state.numDays,
          state.numGallons
        )
      };

    case ON_CHANGE_NUM_MILES:
      return {
        ...state,
        numMiles: action.numMiles
      };
    default:
      return state;
  }
}
