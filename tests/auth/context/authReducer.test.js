import { authReducer, types } from "../../../src/auth";

describe("authReducer tests", () => {
  const initialState = { logged: false };

  test("should return initial state", () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("should call auth login and set user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Carol",
        id: "123",
      },
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should deleate user name and set logged as false on logout", () => {
    const state = {
      logged: true,
      user: { id: "456", name: "Natt" },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
