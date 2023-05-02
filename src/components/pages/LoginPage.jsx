import { NavLink } from "react-router-dom";
import FormRegisterOrLogin from "../FormRegisterOrLogin";
function LoginPage({ handleLogin, loggedUser }) {
  return (
    <>
      <FormRegisterOrLogin
        buttonTitle={
          <NavLink to={`/`} className="nav-link">
            Login
          </NavLink>
        }
        onSubmit={handleLogin}
      />
    </>
  );
}
export default LoginPage;
