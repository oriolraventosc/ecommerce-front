import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import ProductCard from "./ProductCard";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a ProductCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an accessible name 'product'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ProductCard
                name="product"
                image="product.jpg"
                price="5€"
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

    test("Then it should show an heading level 2 title with the text 'product'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ProductCard
                name="product"
                image="product.jpg"
                price="5€"
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
        level: 2,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a text with the price '5€'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ProductCard
                name="product"
                image="product.jpg"
                price="5€"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const textAccessibleName = "5€";

      const expectedText = screen.queryByLabelText(textAccessibleName);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'ADD TO CART'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ProductCard
                name="product"
                image="product.jpg"
                price="5€"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.queryByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
