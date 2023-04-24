import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuStyled from "./MenuStyled";

const Menu = (): JSX.Element => {
  return (
    <>
      <MenuStyled>
        <NavLink to={"/"}>
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
            }}
          >
            USB Platform
          </Typography>
        </NavLink>

        <NavLink to={"/cart"} aria-label="cart">
          <ShoppingCartIcon
            sx={{
              fontSize: "2rem",
              pt: "0.5rem",
              color: "primary.light",
            }}
          />
        </NavLink>
      </MenuStyled>
    </>
  );
};

export default Menu;
