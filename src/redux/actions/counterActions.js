import * as ActionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: ActionTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: ActionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const resetCounter = () => ({
  type: ActionTypes.RESET_COUNTER,
  payload: 0,
});
