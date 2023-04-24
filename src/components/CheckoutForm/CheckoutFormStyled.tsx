import styled from "styled-components";
import colors from "../../styles/colors";

const CheckoutFormStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .submit-button {
    background-color: ${colors.light};
    color: ${colors.dark};
  }
  .submit-button:hover {
    color: #fff;
    background-color: ${colors.dark};
  }
  .input-field {
    border-color: ${colors.light};
  }
  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export default CheckoutFormStyled;
