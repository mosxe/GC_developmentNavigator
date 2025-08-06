import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@ff/ui-kit/lib/styles/styles.css";
import "@intauto/ui-kit/dist/assets/styles.css";

createRoot(document.getElementById("person-cabinet")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
