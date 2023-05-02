import ProfilePicture from "./ProfilePicture";
import { Search } from "./Search";
import { NavLink } from "react-router-dom";
function Header({
  loggedOnUser,
  viewProfile,
  viewResultSearch,
}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.600)",
        color: "white",
        margin: "10px",
        padding: "20px",
        textAlign: "center",
        display: "flex",
      }}
    >
      <div style={{ flex: "6", textAlign: "left" }}>
        <h1 style={{}}>Social network</h1>
        <span style={{ display: loggedOnUser ? "" : "none" }}>
          <Search onSubmit={viewResultSearch} />
        </span>
      </div>

      <button
        style={{ display: loggedOnUser ? "none" : "" }}
        className="btn btn-light"
      >
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </button>

      <button
        style={{ display: loggedOnUser ? "none" : "" }}
        className="btn btn-light "
      >
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
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
    </div>
  );
}

export default Header;