import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetCounter } from "../redux/actions/counterActions";

const ResetButton = (props) => {
  return (
    <div className="reset-container">
      <button
        className="btn btn-danger btn-reset"
        onClick={() => props.dispatch(resetCounter())}
      >
        R
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(resetCounter, dispatch),
  };
};

export default connect(mapDispatchToProps)(ResetButton);
