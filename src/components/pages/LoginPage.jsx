
import FormRegisterOrLogin from "../FormRegisterOrLogin";
function LoginPage({ handleLogin, loggedUser }) {
  return (
    <>
      <FormRegisterOrLogin
        buttonTitle=' Login'
        onSubmit={handleLogin}
      />
    </>
  );
}
export default LoginPage;
