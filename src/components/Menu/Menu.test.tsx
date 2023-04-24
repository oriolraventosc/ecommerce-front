import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Menu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'USB Platform'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Menu />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText("USB Platform");

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a cart icon", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Menu />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedIcon = screen.queryByLabelText("cart");

      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
