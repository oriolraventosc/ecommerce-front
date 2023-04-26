import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import MenuStyled from "./MenuStyled";
import { useNavigate } from "react-router-dom";

const Menu = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <MenuStyled>
        <Typography
          variant="body2"
          className="product-card__name"
          sx={{
            fontSize: {
              xxl: "2.5rem",
              xl: "2.5rem",
              lg: "2.5rem",
              md: "2.5rem",
              sm: "2rem",
              xs: "2rem",
            },
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
            pt: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          USB Platform
        </Typography>

        <ShoppingCartIcon
          aria-label="cart"
          onClick={() => navigate("/cart")}
          sx={{
            fontSize: "2rem",
            pt: "0.5rem",
            color: "primary.light",
            cursor: "pointer",
          }}
        />
      </MenuStyled>
    </>
  );
};

export default Menu;
