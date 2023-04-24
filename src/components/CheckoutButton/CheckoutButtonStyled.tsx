import { styled } from "@mui/material";
import colors from "../../styles/colors";

const CheckoutButtonStyled = styled("div")`
  .button {
    background-color: ${colors.dark};
    color: #fff;
  }
  .button:hover {
    background-color: ${colors.light};
    color: ${colors.dark};
    transition: 0.2s;
  }
`;

export default CheckoutButtonStyled;
