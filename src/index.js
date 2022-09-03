import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import Provider from "react-redux/lib/components/Provider";
import App from "./App";
import { store } from "./app/store";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
