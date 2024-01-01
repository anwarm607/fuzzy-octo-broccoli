import React from "react";
import App from "./App.tsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
