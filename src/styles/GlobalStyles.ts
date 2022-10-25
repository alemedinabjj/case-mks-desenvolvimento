import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*::-webkit-scrollbar {
  width: 0.3rem;

}

*::-webkit-scrollbar-track {
  background: #E5E5E5;
}

*::-webkit-scrollbar-thumb {
  background: #0F52BA;
}



:root {
  --blue-700: #0F52BA;
  --white: #FFFFFF;

  --bg-color:#E5E5E5;
  --price-color: #373737;

  --footer-color: rgba(238, 238, 238, 1);
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--bg-color);
    max-width: 2500px;
    margin: 0 auto;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);

    --webkit-font-smoothing: antialiased;

  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  button, input, textarea {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

`;
