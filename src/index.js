import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GeneralStore from "./redux/configureStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/general.css";
import "./assets/fonts/DS-DIGIB.TTF";

const store = GeneralStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
