import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 12;

  max-width: 24.75rem;
  width: 100%;

  min-height: 100vh;
  height: 100%;
  background: var(--blue-700);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out !important;

  overflow-y: auto;

  &.cart-modal-container {
    transform: translateX(100%);
  }

  &.cart-modal-container--open {
    transform: translateX(0%);
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.header`
  width: 100%;
  padding-top: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.8125rem;

  h2 {
    color: var(--white);
  }

  button {
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border-radius: 50%;
    border: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: space-between;

  > div {
    width: 100%;
    padding: 1.5rem 2.8125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font: 700 1.25rem "Montserrat", sans-serif;
    color: var(--white);
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #000;
  color: var(--white);
  padding-block: 1rem;

  font: 700 1.125rem "Montserrat", sans-serif;
`;

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
    border-right: 1px solid var(--bg-color);
    border-left: 1px solid var(--bg-color);
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

export const EmptyCart = styled.div`
  color: var(--white);
  font: 400 1.125rem "Montserrat", sans-serif;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
