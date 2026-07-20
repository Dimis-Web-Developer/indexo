import { NavLink } from "react-router-dom";

 function Login() {
  return (
    <NavLink
      to="/login"
      className={({ isActive }) =>
        ` text-sm md:text-lg
      ${  isActive
          ? "text-white font-medium"
          : "text-gray-400 hover:text-blue-400 transition-colors"}
      `
      }
    >
      Login
    </NavLink>
  );
}
export default Login