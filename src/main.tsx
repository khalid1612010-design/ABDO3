import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Required bootstrap for the build tool.
// The visible website lives in index.html / style.css / script.js.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
