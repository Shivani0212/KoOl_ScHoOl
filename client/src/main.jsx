import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { registerLicense } from "@syncfusion/ej2-base";
import { Key } from "../key";

// Registering Syncfusion license key
registerLicense(Key[0].licenseKey);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
