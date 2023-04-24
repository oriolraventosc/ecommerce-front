import { styled } from "@mui/material";
import colors from "../../styles/colors";

const CartItemStyled = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  img {
    height: 100%;
    width: 80%;
    mix-blend-mode: multiply;
    margin-top: 1rem;
  }
  h3 {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .cart-item__remove {
    margin-top: 0.5rem;
    font-size: 1.3rem;
    background-color: ${colors.light};
    color: ${colors.dark};
    border-radius: 5px;
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  .cart-item__remove:hover {
    cursor: pointer;
    color: #fff;
    background-color: ${colors.dark};
    transition: 0.2s;
  }
  .product-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cart-item__quantity {
    display: block;
    font-size: 1rem;
    text-align: center;
  }
  input {
    border: none;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    img {
      width: 30%;
      margin-left: 1rem;
    }
    h3 {
      padding: 0;
      margin: 0;
    }
    .product-information {
      flex-direction: row;
      gap: 2rem;
      margin-right: 1rem;
    }
  }
`;

export default CartItemStyled;
