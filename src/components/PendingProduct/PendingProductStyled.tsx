import { styled } from "@mui/material";
import colors from "../../styles/colors";

const PendingProductStyled = styled("article")`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  .accept-cancel-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  img {
    height: 100%;
    width: 80%;
    mix-blend-mode: multiply;
    margin-top: 1rem;
  }
  .product-card {
    &__name {
      padding-top: 1rem;
      padding-right: 2rem;
      padding-left: 2rem;
    }
    &__price {
      padding-top: 1rem;
    }
    &__button {
      font-size: 1.4rem;
      background-color: ${colors.light};
      color: ${colors.dark};
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    &__button:hover {
      background-color: ${colors.dark};
      color: #fff;
    }
    @media (min-width: 1024px) {
      &__button {
        font-size: 1.3rem;
      }
    }
  }
`;

export default PendingProductStyled;
