import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "../src/css/main.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
