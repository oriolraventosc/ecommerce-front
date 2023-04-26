import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

const mockLogin = jest.fn();

jest.mock("../../hooks/useAdmin/useAdmin", () => {
  return () => ({
    adminLogin: mockLogin,
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
              <LoginForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.queryByRole("heading", {
        level: 2,
      }) as HTMLElement;

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a Username textbox input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "Username";

      const expectedInput = screen.queryByRole("textbox", {
        name: inputAccessibleName,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show Password textbox input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputAccessibleName = "Password";

      const expectedInput = screen.queryByLabelText(inputAccessibleName);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const imageAccessibleName = "USB Platform icon";

      const expectedImage = screen.queryByLabelText(imageAccessibleName);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a log in button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.queryByRole("button") as HTMLElement;

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then when filled the form it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginForm />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.queryByRole("button") as HTMLElement;

      const expectedUsernameInput = screen.queryByRole("textbox", {
        name: "Username",
      }) as HTMLElement;
      const expectedPasswordInput = screen.queryByLabelText(
        "Password"
      ) as HTMLElement;
      await userEvent.type(expectedUsernameInput, "admin");
      await userEvent.type(expectedPasswordInput, "admin");
      await userEvent.click(expectedButton);

      expect(mockLogin).toHaveBeenCalled();
    });
  });
});
