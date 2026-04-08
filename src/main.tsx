import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Accordion } from "./components/Accordion/Accordion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hey now this is a test assessment</h1>
    <Accordion />
  </StrictMode>,
);
