import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 15.5975rem;
  min-height: 26rem;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 0.875rem;
  padding-block: 0.875rem;
`;

export const CardImage = styled.div``;

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.875rem;

  h2 {
    font: 400 1rem "Montserrat", sans-serif;
    line-height: 1.5rem;
  }

  span {
    padding-inline: 0.4375rem;
    padding-block: 0.25rem;
    border-radius: 5px;

    background: var(--price-color);
    color: var(--white);
    font: bold 0.875rem "Montserrat", sans-serif;
  }
`;

export const CardDescription = styled.div`
  text-align: center;
  p {
    font: 300 0.625rem "Montserrat", sans-serif;
    line-height: 1rem;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  background: var(--blue-700);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  padding-block: 0.625rem;
  border-radius: 0px 0px 8px 8px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  span {
    font: 600 0.875rem "Montserrat", sans-serif;
    line-height: 1.25rem;
    text-transform: uppercase;
    color: var(--white);
  }
`;
