import ProfilePicture from "./ProfilePicture";
function Header({loggedOnUser,display,viewLoginForm,viewRegisterForm,viewProfile}){
    return (
      <div
        style=
        {{
          backgroundColor: "rgba(0, 0, 0, 0.400)",
          color: "white",
          padding: "25px",
          textAlign: "center",
          display: "flex",
        }}
        >
        <div style={{ flex: "6", textAlign: "left" }}>
          <h1>Social network</h1>
        </div>
        <button
          style={{ display: display.beforeLogin }}
          className="btn btn-light"
          onClick={viewRegisterForm}
        >
          Register
        </button>
        <br />
        <button
          style={{ display: display.beforeLogin }}
          className="btn btn-light "
          onClick={viewLoginForm}
        >
          Login
        </button>
        {loggedOnUser ? (
          <ProfilePicture
            user={loggedOnUser}
            size="50px"
            viewProfile={viewProfile}
          ></ProfilePicture>
        ) : (
          ""
        )}
        {/* <Search onSubmit={viewResultSearch}></Search> */}
      </div>
    );
}

export default Header;