import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a section with an accessible name 'products list'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <HomePage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const expectedAccessibleName = "products list";

      const expectedSection = screen.queryByRole("region", {
        name: expectedAccessibleName,
      });

      expect(expectedSection).toBeInTheDocument();
    });
  });
});
