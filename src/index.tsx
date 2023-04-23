import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import "./index.css";
import mainTheme from "./styles/mainTheme";
import colors from "./styles/colors";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <StyledThemeProvider theme={colors}>
          <GlobalStyles />
          <App />
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
