import {Link, NavLink } from "react-router-dom";
function ButtonsMenu(props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        
        <NavLink to="/" className="nav-link">
          <button onClick={props.upOverFlow} className="btn btn-light">
            <i
              className={`bi bi-house-door${
                props.currentRoutre === "/" ? "-fill" : ""
              }`}
            ></i>
          </button>
        </NavLink>
      
        <Link to={props.loggedOnUser.userName}>
          <button className="btn btn-light" onClick={props.viewMyProfile}>
            <i
              className={`bi bi-person${
                props.currentRoutre === "/" + props.loggedOnUser.userName
                  ? "-fill"
                  : ""
              }`}
            ></i>
          </button>
        </Link>

  
        <NavLink to="/users" className="nav-link">
          <button onClick={props.upOverFlow} className="btn btn-light ">
            <i
              className={`bi bi-people${
                props.currentRoutre === "/users" ? "-fill" : ""
              }`}
            ></i>
          </button>
        </NavLink>
        <NavLink to="/chat" className="nav-link">
          <button className="btn btn-light ">
            <i
              className={`bi bi-chat${
                props.currentRoutre === "/chat" ? "-fill" : ""
              }`}
            ></i>
          </button>
        </NavLink>

        {/* <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light "
          onClick={props.viewFriendRequests}
        >
          Friend requests
        </button> */}

        {/* <br /> */}

        <br />
        {/* <button className="btn btn-light" onClick={props.viewFeed}>
          <i className="bi bi-bell-fill"></i>
        </button>
        <br /> */}
      </div>
    </>
  );
}
export default ButtonsMenu;
