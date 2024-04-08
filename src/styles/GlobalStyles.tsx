// GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  language: string;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  body {
    direction: ${(props) => (props.language === "ar" ? "rtl" : "ltr")};
    font-family: "Cairo", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media screen and (max-width: 768px){
        overflow-x: hidden;
    }
  }
`;

export default GlobalStyles;
