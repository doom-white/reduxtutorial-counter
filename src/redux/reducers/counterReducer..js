import * as ActionTypes from "../actions/actionTypes";

const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
      return state + action.payload;

    case ActionTypes.DECREASE_COUNTER:
      return state - action.payload;

    case ActionTypes.RESET_COUNTER:
      return (state = action.payload);

    default:
      return state;
  }
};

export default CounterReducer;
