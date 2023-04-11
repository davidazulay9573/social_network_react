import { useState } from "react";

function FormRegisterOrLogin({ buttonTitle, onSubmit }) {
  const [input, setInput] = useState({ userName: "", password: "", img: "" });
  const [profilePicture, setProfilePicture] = useState(
    <>
      <input
        type="file"
        onInput={(e) =>{
             setInput({
            userName: input.userName,
            password: input.password,
            img:e.target.files[0],
          });
          setProfilePicture(
            <img style={{height:'100%', width:'100%'}} src={URL.createObjectURL(e.target.files[0])} alt="Profile" />
          );
         }
        }
      />
      <i className="bi bi-file-earmark-image"></i>
    </>
  );
  return (
    <div style={{ textAlign: "center" }}>
      <span
        style={{ height: "70px", width: "70px" }}
        className="profilepicture"
      >
        {profilePicture}
      </span>
      <br />
      <br />
      <input
        className="form-control"
        type="text"
        placeholder="User name"
        onInput={(e) =>
          setInput({
            userName: e.target.value,
            password: input.password,
            img: input.img,
          })
        }
      />
      <br />
      {/* {error ? <div className="text-danger">{error}</div> : null} */}

      <div style={{ display: "flex" }}>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onInput={(e) =>
            setInput({
              userName: input.userName,
              password: e.target.value,
              img: input.img,
            })
          }
        />
        {/* <input className="form-control" type="" /> */}
      </div>
      <br />
      <button className="btn btn-dark" onClick={() => onSubmit(input)}>
        {buttonTitle}
      </button>
    </div>
  );
}

export default FormRegisterOrLogin;
