import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: var(--footer-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0.5rem;
`;

export const FooterContent = styled.div`
  span {
    font: 400 0.75rem "Montserrat", sans-serif;
    line-height: 13px;
  }
`;
