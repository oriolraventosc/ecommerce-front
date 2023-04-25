import styled from "styled-components";
import colors from "../../styles/colors";

const LoaderStyled = styled.section`
  background-color: ${colors.dark};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
  position: fixed;
  width: calc(100vw);
  left: -0.5rem;
  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  .loader {
    color: ${colors.light};
    font-size: 0.6rem;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @media (min-width: 1024px) {
    width: 100vw;
    left: 0;
  }
`;

export default LoaderStyled;
