import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
::selection {
  background-color: #90ff17;
  color: #002e34
}
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #002e34;
  font-family: "Roboto";
}
::-webkit-scrollbar {
  display: none;
}
strong {
  color: #6CCFF6;
}
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 700px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
`;
export default GlobalStyles;
