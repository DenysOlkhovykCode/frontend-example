import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

describe("App", () => {
  it("Test redux store and functions", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    fireEvent.click(screen.getByText("Додати"));
    fireEvent.click(screen.getByText("Додати"));
    fireEvent.click(screen.getByText("Додати"));
    fireEvent.click(screen.getByText("Додати"));
    fireEvent.click(screen.getByText("Логування"));

    const calls = consoleSpy.mock.calls.map((call) => call[0]);
    expect(calls).toEqual([1, 2, 3, 4]);

    consoleSpy.mockRestore();

    fireEvent.click(screen.getByText("Перейти на About"));
    screen.debug();
  });
});
