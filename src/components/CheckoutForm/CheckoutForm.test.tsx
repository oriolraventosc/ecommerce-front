import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

const mockCheckout = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    checkoutCartProducts: mockCheckout,
  });
});

describe("Given a CheckoutForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'Order Information'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutForm />
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
              <CheckoutForm />
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
              <CheckoutForm />
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
              <CheckoutForm />
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
              <CheckoutForm />
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
              <CheckoutForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "Birth-date";

      const expectedInput = screen.queryByLabelText(inputAccessibleName);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonAccessibleName = "submit button";

      const expectedButton = screen.queryByRole("button", {
        name: buttonAccessibleName,
      }) as HTMLElement;

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then when filled the form it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CheckoutForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonAccessibleName = "submit button";

      const expectedButton = screen.queryByRole("button", {
        name: buttonAccessibleName,
      }) as HTMLElement;
      const expectedCityInput = screen.queryByRole("textbox", {
        name: "City",
      }) as HTMLElement;
      const expectedCreditCardInput = screen.queryByRole("textbox", {
        name: "Credit card",
      }) as HTMLElement;
      const expectedEmailInput = screen.queryByRole("textbox", {
        name: "E-mail",
      }) as HTMLElement;
      const expectedNameInput = screen.queryByRole("textbox", {
        name: "Name",
      }) as HTMLElement;
      await userEvent.type(expectedNameInput, "Johnathan");
      await userEvent.type(expectedEmailInput, "johnathan@gmail.com");
      await userEvent.type(expectedCreditCardInput, "12345678910");
      await userEvent.type(expectedCityInput, "Barcelona");
      await userEvent.click(expectedButton);

      expect(mockCheckout).toHaveBeenCalled();
    });
  });
});
