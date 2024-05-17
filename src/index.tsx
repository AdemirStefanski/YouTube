import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme";
import { MenuStore } from "./contexts/openMenuContext";
import { SearchProvider } from "./contexts/searchContext";
import { CategoryProvider } from "./contexts/searchCategories";

//const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <MenuStore>
        <CategoryProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CategoryProvider>
      </MenuStore>
    </ThemeProvider>
  </React.StrictMode>
);
