import { ON_SUBMIT_DIET } from "../actions/food";

const initialState = {
  currentEmissions: 0,
  pledgedEmissions: 0
};

export default function food(state = initialState, action) {
  switch (action.type) {
    case ON_SUBMIT_DIET:
      return {
        ...state,
        currentEmissions: action.diet * 365
      };
    default:
      return state;
  }
}
