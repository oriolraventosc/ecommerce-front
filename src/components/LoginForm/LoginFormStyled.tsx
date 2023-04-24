import styled from "styled-components";
import colors from "../../styles/colors";

const LoginFormStyled = styled.section`
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100vw - 2rem);
  position: relative;
  left: -1rem;
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
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
    background-color: #fff;
    border-radius: 5px;
  }
  @media (min-width: 1024px) {
    width: 100vw;
    left: -3rem;
    padding: 0;
    .form-box {
      width: 35%;
    }
  }
`;

export default LoginFormStyled;
