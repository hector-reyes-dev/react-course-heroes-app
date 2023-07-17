import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";
import { AuthContext } from "../../src/auth/context/AuthContext";

describe("PrivateRoutes tests", () => {
  test("On logged true should show children", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: { id: "123", name: "Carol" },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoutes>
            <h1>This is a Private Route</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("This is a Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
