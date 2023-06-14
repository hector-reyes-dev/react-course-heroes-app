import { useReducer } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = {
      id: "ABC",
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    authDispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    authDispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
