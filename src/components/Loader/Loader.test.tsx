import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a section element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Loader />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedLoader = screen.queryByLabelText("loader");

      expect(expectedLoader).toBeInTheDocument();
    });
  });
});
