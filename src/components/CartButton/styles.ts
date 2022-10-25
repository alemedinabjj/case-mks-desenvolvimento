import styled from "styled-components";

export const Button = styled.button`
  width: 5.325rem;
  border-radius: 8px;
  padding-block: 0.3875rem;

  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
