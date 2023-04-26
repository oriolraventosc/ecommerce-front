import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import PendingProduct from "./PendingProduct";
import userEvent from "@testing-library/user-event";

const mockAccept = jest.fn();
const mockCancel = jest.fn();

jest.mock("../../hooks/useAdmin/useAdmin", () => {
  return () => ({
    acceptOrder: mockAccept,
    cancelOrder: mockCancel,
  });
});

describe("Given a PendingProduct component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an accessible name 'product'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PendingProduct
                name="product"
                image="product.jpg"
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
              <PendingProduct
                name="product"
                image="product.jpg"
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

    test("Then it should show a text with the product quantity", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PendingProduct
                name="product"
                image="product.jpg"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const textAccessibleName = "2";

      const expectedText = screen.queryByLabelText(textAccessibleName);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a icon with an accessible name 'Accept order'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PendingProduct
                name="product"
                image="product.jpg"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const iconAccessibleName = "Accept order";

      const expectedIcon = screen.queryByLabelText(iconAccessibleName);

      expect(expectedIcon).toBeInTheDocument();
    });

    test("Then it should show a icon with an accessible name 'Accept order' and when clicked it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PendingProduct
                name="product"
                image="product.jpg"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const iconAccessibleName = "Accept order";

      const expectedIcon = screen.queryByLabelText(
        iconAccessibleName
      ) as HTMLElement;
      await userEvent.click(expectedIcon);
      expect(mockAccept).toHaveBeenCalled();
    });

    test("Then it should show a icon with an accessible name 'Cancel order'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PendingProduct
                name="product"
                image="product.jpg"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const iconAccessibleName = "Cancel order";

      const expectedIcon = screen.queryByLabelText(iconAccessibleName);

      expect(expectedIcon).toBeInTheDocument();
    });

    test("Then it should show a icon with an accessible name 'Cancel order' and when clicked it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PendingProduct
                name="product"
                image="product.jpg"
                quantity={2}
                key={123}
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const iconAccessibleName = "Cancel order";

      const expectedIcon = screen.queryByLabelText(
        iconAccessibleName
      ) as HTMLElement;
      await userEvent.click(expectedIcon);

      expect(mockCancel).toHaveBeenCalled();
    });
  });
});
