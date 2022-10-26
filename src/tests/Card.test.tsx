import { render } from "@testing-library/react";

import Card from "../components/Card";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Card Component", () => {
  //test card component render with props
  it("should render Card component", () => {
    const { container } = render(
      <Card
        products={{
          find: jest.fn(),
          map: jest.fn(),
          id: 1,
          name: "Test",
          brand: "Test",
          description: "Test",
          price: 10,
          photo: "Test",
          updateAt: "Test",
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
