import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ErrorBoundary } from "./ErrorBoundary";
import "./styles.css";
import "./pwa";


const SETTINGS_KEY = "daily-word-soup:settings";

try {
  const saved = localStorage.getItem(SETTINGS_KEY);
  const settings = saved ? JSON.parse(saved) : null;

  document.documentElement.dataset.theme = settings?.theme ?? "light";
  document.documentElement.dataset.animations = settings?.animations === false ? "off" : "on";
} catch {
  document.documentElement.dataset.theme = "light";
  document.documentElement.dataset.animations = "on";
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);