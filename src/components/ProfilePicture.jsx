import { NavLink } from "react-router-dom";
function ProfilePicture({user ,size,viewProfile}){ 
    if(user !== null ) return (
      <div>
        <NavLink to={user.userName} className='nav-link'>
          <span
            className="profilepicture"
            style={{ padding: "1%", width: size, height: size }}
          >
            <img
              className="rounded-circle"
              style={{ flex: 2, width: "100%", height: "100%" }}
              src={user.profilePicture}
              alt=""
              onClick={() => viewProfile(user)}
            ></img>
          </span>
        </NavLink>

        <p> {user.userName}</p>
      </div>
    );
}

export default ProfilePicture;