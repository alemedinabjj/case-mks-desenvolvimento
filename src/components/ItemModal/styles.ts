import styled from "styled-components";

export const Product = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background: var(--white);
  padding-block: 1.1875rem;
  padding-inline: 0.9375rem;
  border-radius: 8px;

  //keyframes product enter

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.product-enter {
    animation: slideIn 0.3s ease-in-out forwards;
  }
`;

export const ProductImage = styled.div``;

export const ProductInfo = styled.div`
  h3 {
    font: 400 0.8125rem "Montserrat", sans-serif;
  }
`;

export const ProductPrice = styled.div`
  span {
    font: 700 0.875rem "Montserrat", sans-serif;
    line-height: 1.25rem;
  }
`;

export const ProductActions = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0 0.5rem;
  border: 1px solid var(--bg-color);
  border-radius: 4px;

  button {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
  }

  .decrement {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 1.25rem;
      background: var(--bg-color);
      left: 15px;
    }
  }

  .increment {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 1.25rem;
      background: var(--bg-color);
      right: 16px;
    }
  }
`;

export const ProductRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 0.3rem;
  border-radius: 50%;
  color: var(--white);

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
