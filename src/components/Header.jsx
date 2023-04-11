function Header(props){
    return (
      <div
        style={{
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
          style={{ display: props.loginButton }}
          className="btn btn-light"
          onClick={props.viewFormRegister}
        >
          Register
        </button>
        <br />
        <button
          style={{ display:props.loginButton }}
          className="btn btn-light "
          onClick={props.viewFormLogin}
        >
          Login
        </button>
        <span
          className="profilepicture"
          style={{ padding: "1%", display:props.buttonsMenu }}
        >
          <img
            className="rounded-circle"
            style={{ flex: 2, width: "100%", height: "100%" }}
            src={
             props.userWatching !== null
                ? URL.createObjectURL(props.userWatching.profilePicture)
                : ""
            }
            alt="profile"
          ></img>
        </span>
        <p> {props.userWatching !== null ? props.userWatching.userName : ""}</p>

        {/* <Search onSubmit={viewResultSearch}></Search> */}
      </div>
    );
}

export default Header;