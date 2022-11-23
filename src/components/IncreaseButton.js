import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";

const IncreaseButton = (props) => {
  return (
    <div>
      <button
        className="btn btn-success btn-increase me-2"
        onClick={() => props.dispatch(increaseCounter())}
      >
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(increaseCounter, dispatch),
  };
};

export default connect(mapDispatchToProps)(IncreaseButton);
