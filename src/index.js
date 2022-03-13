import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./context/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
