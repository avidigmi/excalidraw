import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<<< HEAD:src/index.tsx
import ExcalidrawApp from "../excalidraw-app";
========
import ExcalidrawApp from "./App";
>>>>>>>> upstream/master:excalidraw-app/index.tsx
import { registerSW } from "virtual:pwa-register";

import "../excalidraw-app/sentry";
window.__EXCALIDRAW_SHA__ = import.meta.env.VITE_APP_GIT_SHA;
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
registerSW();
root.render(
  <StrictMode>
    <ExcalidrawApp />
  </StrictMode>,
);
