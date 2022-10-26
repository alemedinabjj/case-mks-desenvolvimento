import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { decrement, finalizePurchase, increment, remove } from "../storage/CartItems";
import store from "../storage";

describe("Increment", () => {
  it("should increment quantity", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <button
          data-testid="increment"
          onClick={() =>
            store.dispatch(
              increment({
                id: 1,
                name: "Test",
                price: "10",
                brand: "",
                amount: 0,
                photo: "",
                description: "",
                quantity: 0,
              })
            )
          }
        >
          Increment
        </button>
      </Provider>
    );

    fireEvent.click(getByTestId("increment"));
    expect(store.getState().stock[0].quantity).toBe(1);
  });
});

// describe("Decrement", () => {
//   it("should decrement quantity", () => {
//     const { getByTestId } = render(
//       <Provider store={store}>
//         <button
//           data-testid="decrement"
//           onClick={() =>
//             store.dispatch(
//               decrement({
//                 id: 1,
//                 name: "Test",
//                 price: "10",
//                 brand: "",
//                 amount: 0,
//                 photo: "",
//                 description: "",
//                 quantity: 1,
//               })
//             )
//           }
//         >
//           Decrement
//         </button>
//       </Provider>
//     );

//     fireEvent.click(getByTestId("decrement"));
//     expect(store.getState().stock[0].quantity).toBe(0);
//   });
// });

describe("Remove", () => {
  it("should remove item", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <button
          data-testid="remove"
          onClick={() =>
            store.dispatch(
              remove({
                id: 1,
                name: "Test",
                price: "10",
                brand: "",
                amount: 0,
                photo: "",
                description: "",
                quantity: 0,
              })
            )
          }
        >
          Remove
        </button>
      </Provider>
    );

    fireEvent.click(getByTestId("remove"));
    expect(store.getState().stock.length).toBe(0);
  });
});

describe("FinalizePurchase", () => {
  it("should remove all items", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <button data-testid="finalize" onClick={() => store.dispatch(finalizePurchase())}>
          Finalize
        </button>
      </Provider>
    );

    fireEvent.click(getByTestId("finalize"));
    expect(store.getState().stock.length).toBe(0);
  });
});
