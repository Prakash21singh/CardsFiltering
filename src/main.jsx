import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { cardStore } from "./Components/Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={cardStore}>
    <App />
  </Provider>
);
