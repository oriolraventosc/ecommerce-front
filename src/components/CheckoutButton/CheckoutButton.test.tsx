import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

describe("Given a CheckoutButton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutButton />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonAccessibleName = "checkout now";

      const expectedButton = screen.queryByLabelText(
        buttonAccessibleName
      ) as HTMLElement;

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
