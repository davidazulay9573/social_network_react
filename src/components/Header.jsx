import ProfilePicture from "./ProfilePicture";
import { Search } from "./Search";
function Header({
  loggedOnUser,
  display,
  viewLoginForm,
  viewRegisterForm,
  viewProfile,
  viewResultSearch,
}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.600)",
        color: "white",
        margin: "10px",
        padding:'20px',
        textAlign: "center",
        display: "flex",
      }}
    >

      <div style={{ flex: "6", textAlign: "left" }}>
        <h1 style={{}}>Social network</h1>
        <span style={{ display: display.afterLogin }}>
          <Search onSubmit={viewResultSearch} />
        </span>
      </div>

      <button
        style={{ display: display.beforeLogin }}
        className="btn btn-light"
        onClick={viewRegisterForm}
      >
        Register
      </button>
  
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
    </div>
  );
}

export default Header;