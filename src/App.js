import React from "react";
import DecreaseButton from "./components/DecreaseButton";
import Display from "./components/Display";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";

const App = () => {
  return (
    <div className="main-container">
      <Display />
      <div className="button-main-container">
        <div className="buttonIncDec">
          <IncreaseButton />
          <DecreaseButton />
        </div>
        <ResetButton />
      </div>
    </div>
  );
};

export default App;
