import FormRegisterOrLogin from "../FormRegisterOrLogin";
function RegisterPage({ handleRegister }) {
  return (
    <>
      <FormRegisterOrLogin
        buttonTitle={"Register"}
        onSubmit={handleRegister}
        validation={(inputs) =>
          inputs.userName.length < 2 ? "must be at least 2 characters" : null
        }
      />
    </>
  );
}

export default RegisterPage;
