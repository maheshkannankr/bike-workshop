import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// The Browser Router is used for Navigation between the webpages
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
