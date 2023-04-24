import { useState } from "react";
import CartItemStyled from "./CartItemStyled";
import { Typography } from "@mui/material";
import { deleteFromCartActionCreator } from "../../redux/features/userSlicer/userSlicer";
import { useAppDispatch } from "../../redux/hooks";

interface CartItemProps {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const CartItem = ({
  name,
  price,
  image,
  quantity,
}: CartItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [productQuantity] = useState(quantity);
  const [productPrice] = useState(price);
  return (
    <>
      <CartItemStyled>
        <img src={image} alt={name} />
        <article className="product-information">
          {" "}
          <Typography
            variant="h3"
            className="cart-item__name"
            sx={{
              fontSize: {
                xxl: "1.8rem",
                xl: "1.8rem",
                lg: "1.8rem",
                md: "1.8rem",
                sm: "1.8rem",
                xs: "1.8rem",
              },
              fontWeight: "500",
              color: "primary.dark",
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h3"
            className="cart-item__price"
            sx={{
              fontSize: {
                xxl: "1.5rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              fontWeight: "600",
              color: "primary.dark",
              textAlign: "center",
            }}
          >
            {productPrice}€
          </Typography>
          <label htmlFor="quantity">
            <input
              type="number"
              min={1}
              max={10}
              id="quantity"
              name="quantity"
              defaultValue={productQuantity}
              className="cart-item__quantity"
            ></input>
          </label>
          <button
            className="cart-item__remove"
            onClick={() => dispatch(deleteFromCartActionCreator(name))}
          >
            Remove
          </button>
        </article>
      </CartItemStyled>
    </>
  );
};

export default CartItem;
