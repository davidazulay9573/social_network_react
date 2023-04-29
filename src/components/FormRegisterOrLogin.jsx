import useInput from "../hooks/useInput";
import ProfilePicture from "./ProfilePicture";
function FormRegisterOrLogin({ buttonTitle, onSubmit, validation }) {
  const [input, handleInputChange, handleSubmit, error, displayInput] =
    useInput({ userName: "", password: "", img: null }, onSubmit, validation);

  return (
    <div style={{ textAlign: "center" }}>
      <span
        style={{ height: "70px", width: "70px" }}
        className="profilepicture"
      >
        <input
          name="img"
          type="file"
          onInput={handleInputChange}
          style={{ display: displayInput }}
        />
        <ProfilePicture user={{ profilePicture: input.img }}></ProfilePicture>
      </span>
      <br />
      <br />
      <input
        name="userName"
        type="text"
        value={input.userName}
        onChange={handleInputChange}
        className="form-control"
        placeholder="User name"
      />
      {error ? <div className="text-danger">{error}</div> : null}
      <br />

      <div style={{ display: "flex" }}>
        <input
          name="password"
          type="password"
          value={input.password}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Password"
        />
      </div>
      <br />
      <button className="btn btn-dark" onClick={() => handleSubmit(input)}>
        {buttonTitle}
      </button>
    </div>
  );
}

export default FormRegisterOrLogin;
