import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MenuOptionLanguageProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <MenuOptionLanguageProvider>
      <App />
    </MenuOptionLanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
