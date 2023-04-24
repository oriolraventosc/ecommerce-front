import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CartItem from "./CartItem";

describe("Given a CartItem component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alt text 'product'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CartItem
                name="product"
                image="product.jpg"
                price="5"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const imageAccessibleName = "product";

      const expectedImage = screen.queryByRole("img", {
        name: imageAccessibleName,
      });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading level 3 title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CartItem
                name="product"
                image="product.jpg"
                price="5"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const headingAccessibleName = "product";

      const expectedHeading = screen.queryByRole("heading", {
        name: headingAccessibleName,
        level: 3,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show the product price", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CartItem
                name="product"
                image="product.jpg"
                price="5"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const priceAccessibleName = "5€";

      const expectedHeading = screen.queryByRole("heading", {
        name: priceAccessibleName,
        level: 3,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a spinbutton element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CartItem
                name="product"
                image="product.jpg"
                price="5"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedISpinButton = screen.queryByRole("spinbutton");

      expect(expectedISpinButton).toBeInTheDocument();
    });

    test("Then it should show a button element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <CartItem
                name="product"
                image="product.jpg"
                price="5"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.queryByRole("button", { name: "Remove" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
