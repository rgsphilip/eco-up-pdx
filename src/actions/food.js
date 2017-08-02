export const ON_SUBMIT_DIET = "ON_SUBMIT_DIET";
export function onSubmitDiet(diet) {
  return {
    type: ON_SUBMIT_DIET,
    diet
  };
}
