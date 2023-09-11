import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF1cXGFCf1NpTHxbf1xzZFZMYV1bRXFPMyBoS35RdUVqWXZedXRQQ2dUVkZw");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
