// Copyright (c) 2017 Rachel Philip
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution
// for license terms.

// export const ON_SUBMIT_CAR_TRANSIT = "ON_SUBMIT_CAR_TRANSIT";
// export function onSubmitCarTransit(transit) {
//   return {
//     type: ON_SUBMIT_CAR_TRANSIT,
//     transit
//   };
// }

export const ON_CHANGE_NUM_REFILLS = "ON_CHANGE_NUM_REFILLS";
export function onChangeNumRefills(numRefills) {
  console.log(numRefills);
  return {
    type: ON_CHANGE_NUM_REFILLS,
    numRefills
  };
}

export const ON_CHANGE_NUM_DAYS = "ON_CHANGE_NUM_DAYS";
export function onChangeNumDays(numDays) {
  return {
    type: ON_CHANGE_NUM_DAYS,
    numDays
  };
}

export const ON_CHANGE_NUM_GALLONS = "ON_CHANGE_NUM_GALLONS";
export function onChangeNumGallons(numGallons) {
  return {
    type: ON_CHANGE_NUM_GALLONS,
    numGallons
  };
}

export const ON_CHANGE_NUM_MILES = "ON_CHANGE_NUM_MILES";
export function onChangeNumMiles(numMiles) {
  return {
    type: ON_CHANGE_NUM_MILES,
    numMiles
  };
}

export const ON_SUBMIT_FIRST_TRANSIT_CAR = "ON_SUBMIT_FIRST_TRANSIT_CAR";
export function onSubmitFirstTransitCar(hiddenTransitCar) {
  return {
    type: ON_SUBMIT_FIRST_TRANSIT_CAR,
    hiddenTransitCar
  };
}
