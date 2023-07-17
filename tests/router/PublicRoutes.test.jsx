import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { AuthContext } from "../../src/auth/context/AuthContext";

describe("PublicRoute tests", () => {
  test("On logged false should show children", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>This is a Public Route</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("This is a Public Route")).toBeTruthy();
  });

  test("should navigate on logged true", () => {
    const contextValue = {
      logged: true,
      user: { id: "123", name: "Carol" },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <h1>Public Route</h1>
                </PublicRoutes>
              }
            />
            <Route path="/marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Marvel Page")).toBeTruthy();
  });
});
