import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataProps } from "../types/IDataProps";

const InitialState: IDataProps[] = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart") || "[]") : [];

const stock = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    increment(state, { payload }: PayloadAction<IDataProps>) {
      const existis = state.find((item) => item.id === payload.id);
      if (existis) {
        const edited = state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: String((Number(item.price) / item.quantity) * (item.quantity + 1)),
              }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(edited));
        return edited;
      }
      const newProduct: IDataProps = {
        photo: payload.photo,
        description: payload.description,
        name: payload.name,
        price: payload.price,
        id: payload.id,
        quantity: 1,
        brand: "",
        amount: 0,
      };
      localStorage.setItem("cart", JSON.stringify([...state, newProduct]));
      return [...state, newProduct];
    },

    decrement(state, { payload }: PayloadAction<IDataProps>) {
      const existis = state.find((item) => item.id === payload.id);
      if (existis && existis.quantity > 1) {
        const edited = state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: String((Number(item.price) / item.quantity) * (item.quantity - 1)),
              }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(edited));
        return edited;
      }
      const filtered = state.filter((item) => item.id !== payload.id);
      localStorage.setItem("cart", JSON.stringify(filtered));
      return filtered;
    },

    remove(state, { payload }: PayloadAction<IDataProps>) {
      const existis = state.find((item) => item.id === payload.id);
      if (existis) {
        const filtered = state.filter((item) => item.id !== payload.id);
        localStorage.setItem("cart", JSON.stringify(filtered));
        return filtered;
      }

      return existis;
    },
    finalizePurchase(state) {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export const { increment, decrement, remove, finalizePurchase } = stock.actions;
export default stock.reducer;
