import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CartPage from "./CartPage";

describe("Given a CartPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'Shopping Cart'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CartPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const headingAccessibleName = "Shopping Cart";

      const expectedHeading = screen.queryByRole("heading", {
        level: 2,
        name: headingAccessibleName,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
