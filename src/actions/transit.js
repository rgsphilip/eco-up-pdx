// Copyright (c) 2017 Rachel Philip
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution
// for license terms.

export const ON_SUBMIT_CAR_TRANSIT = "ON_SUBMIT_CAR_TRANSIT";
export function onSubmitCarTransit(transit) {
  return {
    type: ON_SUBMIT_CAR_TRANSIT,
    transit
  };
}

export const ON_SUBMIT_FIRST_TRANSIT_CAR = "ON_SUBMIT_FIRST_TRANSIT_CAR";
export function onSubmitFirstTransitCar(hiddenTransitCar) {
  return {
    type: ON_SUBMIT_FIRST_TRANSIT_CAR,
    hiddenTransitCar
  };
}
