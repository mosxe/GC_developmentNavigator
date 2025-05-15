import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "components/App";
import "@ff/ui-kit/lib/styles/styles.css";
import "@intauto/ui-kit/dist/assets/styles.css";

createRoot(document.getElementById("development-navigator")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
