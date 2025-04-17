import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "components/App";

createRoot(document.getElementById("development-navigator")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
