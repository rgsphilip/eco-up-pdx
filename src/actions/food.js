// Copyright (c) 2017 Rachel Philip
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution
// for license terms.

export const ON_SUBMIT_DIET = "ON_SUBMIT_DIET";
export function onSubmitDiet(diet) {
  return {
    type: ON_SUBMIT_DIET,
    diet
  };
}
