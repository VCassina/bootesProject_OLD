import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import "../src/styles/css/main.css";
import { Helmet } from 'react-helmet';

const root = createRoot(document.getElementById("reactRoot"));

root.render(
  <React.StrictMode>
    <Helmet>
      
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();