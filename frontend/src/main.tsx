import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextWrapper from "./context/AuthContextWrapper.tsx";
import JobContextWrapper from "./context/JobContextWrapper.tsx";
import FavContextWrapper from "./context/FavContextWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextWrapper>
        <JobContextWrapper>
          <FavContextWrapper>
            <App />
          </FavContextWrapper>
        </JobContextWrapper>
      </AuthContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
