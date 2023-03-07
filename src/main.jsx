import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BucketProvider } from "./context/BucketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BucketProvider>
    <App />
  </BucketProvider>
);
