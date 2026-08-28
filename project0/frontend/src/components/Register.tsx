import { NavLink } from "react-router-dom";

function Register() {
  return (
    <NavLink
      to="/register"
      className={({ isActive }) =>
        `text-sm md:text-lg
      ${  isActive
          ? "text-white font-medium"
          : "text-gray-400 hover:text-white transition-colors"}
      `
      }
    >
      Register
    </NavLink>
  );
}

export default Register;