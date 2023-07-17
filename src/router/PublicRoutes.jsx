import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? <Navigate to="/marvel" /> : children;
};

PublicRoutes.propTypes = {
  children: PropTypes.any,
};
