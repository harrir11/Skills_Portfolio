import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

const render = () =>
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

// Wait for the web fonts before the first render so the layout doesn't
// jump when they swap in. Render anyway after 1.5s if they're slow.
const fontsReady = Promise.all([
  document.fonts.load('400 1em "Figtree"'),
  document.fonts.load('600 1em "Figtree"'),
  document.fonts.load('400 1em "VT323"'),
]);
const timeout = new Promise((resolve) => setTimeout(resolve, 1500));

Promise.race([fontsReady, timeout]).finally(render);
