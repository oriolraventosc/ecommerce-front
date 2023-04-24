import { Typography, Button } from "@mui/material";
import ProductCardStyled from "./ProductCardStyled";
import { addToCartActionCreator } from "../../redux/features/userSlicer/userSlicer";
import { useAppDispatch } from "../../redux/hooks";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const ProductCard = ({
  name,
  price,
  image,
  quantity,
}: ProductCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <ProductCardStyled className="product-card">
        <img src={image} alt={name} />
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
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          aria-label={price}
          className="product-card__price"
          sx={{
            fontSize: {
              xxl: "1.6rem",
              xl: "1.6rem",
              lg: "1.6rem",
              md: "1.6rem",
              sm: "1.6rem",
              xs: "1.6rem",
            },
            fontWeight: "500",
            color: "primary.dark",
            textAlign: "center",
          }}
        >
          {price}
        </Typography>
        <Button
          variant="contained"
          className="product-card__button"
          disableRipple
          onClick={() =>
            dispatch(addToCartActionCreator({ name, image, price, quantity }))
          }
        >
          Add to cart
        </Button>
      </ProductCardStyled>
    </>
  );
};

export default ProductCard;
