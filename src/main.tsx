import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./provider/MainContext.tsx";
import { ProjectContextProvider } from "./provider/ProjectContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <ProjectContextProvider>
          <App />
        </ProjectContextProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
