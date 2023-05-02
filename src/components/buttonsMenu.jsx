import { NavLink } from "react-router-dom";
function ButtonsMenu(props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <br />
        <NavLink to={props.loggedOnUser.userName}>
          <button className="btn btn-light" onClick={props.viewMyProfile}>
            <i className="bi bi-person-fill"></i>
          </button>
        </NavLink>

        <br />
        <NavLink to="/users" className="nav-link">
          <button onClick={props.upOverFlow} className="btn btn-light ">
            <i className="bi bi-people-fill"></i>
          </button>
        </NavLink>
        {/* 
        <button className="btn btn-light " onClick={props.viewFormAddPost}>
          <i className="bi bi-file-earmark-plus-fill"></i>
        </button>
        <br /> */}

        {/* <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light "
          onClick={props.viewFriendRequests}
        >
          Friend requests
        </button> */}

        {/* <br /> */}
        <NavLink to="/" className="nav-link">
          <button onClick={props.upOverFlow} className="btn btn-light">
            <i className="bi bi-stickies-fill"></i>
          </button>
        </NavLink>

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
