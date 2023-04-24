import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";

describe("Given a CheckoutForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'Order Information'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.queryByRole("heading", {
        level: 2,
      }) as HTMLElement;

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show name textbox input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "Name";

      const expectedInput = screen.queryByRole("textbox", {
        name: inputAccessibleName,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show email textbox input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "E-mail";

      const expectedInput = screen.queryByRole("textbox", {
        name: inputAccessibleName,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a credit card textbox input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "Credit card";

      const expectedInput = screen.queryByRole("textbox", {
        name: inputAccessibleName,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a city textbox input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "City";

      const expectedInput = screen.queryByRole("textbox", {
        name: inputAccessibleName,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a date input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "Birth-date";

      const expectedInput = screen.queryByLabelText(inputAccessibleName);

      expect(expectedInput).toBeInTheDocument();
    });
  });
});
