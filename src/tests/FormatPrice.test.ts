import { FormatPrice } from "../utils/FormatPrice";

describe("FormatPrice", () => {
  it("should be able to format price", () => {
    const price = FormatPrice(1000);

    expect(price).toEqual("R$ 1.000,00");

    expect(price).toMatchSnapshot();
  });
});
