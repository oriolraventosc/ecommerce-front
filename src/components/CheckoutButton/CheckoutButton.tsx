import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import CheckoutButtonStyled from "./CheckoutButtonStyled";

const CheckoutButton = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <CheckoutButtonStyled>
      <Button
        onClick={() => navigate("/checkout")}
        disableRipple
        disableFocusRipple
        aria-label="checkout now"
        className="button"
        sx={{
          fontSize: "1.4rem",
          pt: "0.5rem",
          pb: "0.5rem",
          pl: "1rem",
          pr: "1rem",
          mb: "1rem",
        }}
      >
        Checkout
      </Button>
    </CheckoutButtonStyled>
  );
};

export default CheckoutButton;
