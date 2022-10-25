import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.25rem;
  position: sticky;
  top: 0;
  z-index: 10;

  background: var(--blue-700);
`;

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--white);

    h1 {
      font: 600 1.5rem "Montserrat", sans-serif;
    }

    span {
      margin-top: 0.3rem;
      font: 300 0.875rem "Montserrat", sans-serif;
    }
  }
`;
