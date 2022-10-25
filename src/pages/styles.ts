import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
`;

export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding-inline: 7.4375rem;
  padding-block: 7.1875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.375rem;

  @media (max-width: 1080px) {
    padding-inline: 6.25rem;
  }

  @media (max-width: 720px) {
    padding-inline: 1.875rem;
  }
`;
