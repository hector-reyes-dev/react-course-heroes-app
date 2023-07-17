import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";

describe("AppRouter tests", () => {
  test("should show login if logged false", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/dc"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("should show marvel if logged true", () => {
    const contextValue = { logged: true, user: { id: "ABC", name: "Carol" } };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Marvel Comics")).toBeTruthy();
  });
});
