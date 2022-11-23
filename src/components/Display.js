import React from "react";
import { connect } from "react-redux";

const Display = (props) => {
  return (
    <div className="display-outter-screen mb-2">
      <div className="display-inner-screen">{props.counter}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer,
  };
};

export default connect(mapStateToProps)(Display);
