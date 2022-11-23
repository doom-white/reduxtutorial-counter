import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";

const DecreaseButton = (props) => {
  return (
    <div>
      <button
        className="btn btn-warning btn-decrease me-2"
        onClick={() => props.dispatch(decreaseCounter())}
      >
        -
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(decreaseCounter, dispatch),
  };
};

export default connect(mapDispatchToProps)(DecreaseButton);
