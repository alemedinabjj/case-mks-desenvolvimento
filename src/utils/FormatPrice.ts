export const FormatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

//testing jest and react testing library

// Path: src/__tests__/FormatPrice.test.ts
