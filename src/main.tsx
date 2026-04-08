import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Accordion } from "./components/Accordion/Accordion";

const itemSample = [
  {
    trigger: { body: "Item one trigger sample" },
    content: { body: "Item one content sample" },
  },
  {
    trigger: { body: "Item two trigger sample" },
    content: { body: "Item two content sample" },
  },
  {
    trigger: { body: "Item three trigger sample" },
    content: { body: "Item three content sample" },
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hey now this is a test assessment</h1>
    <Accordion items={itemSample} />
  </StrictMode>,
);
