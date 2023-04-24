import { Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import Menu from "../../components/Menu/Menu";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutButton from "../../components/CheckoutButton/CheckoutButton";

const CartPage = (): JSX.Element => {
  const cartProducts = useAppSelector((state) => state.userActions.cart);
  return (
    <>
      <Menu />
      <section>
        <div>
          <Typography
            variant="h2"
            className="product-card__name"
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "2rem",
                lg: "2rem",
                md: "2rem",
                sm: "2rem",
                xs: "2rem",
              },
              fontWeight: "700",
              color: "primary.dark",
              textAlign: "left",
              pt: "1rem",
            }}
          >
            Shopping Cart
          </Typography>
        </div>
        {cartProducts.map((product, index) => (
          <CartItem
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            key={index}
          />
        ))}
        {cartProducts.length >= 1 && <CheckoutButton />}
      </section>
    </>
  );
};

export default CartPage;
