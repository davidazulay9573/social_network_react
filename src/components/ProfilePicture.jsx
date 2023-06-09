import {useNavigate } from "react-router-dom";
function ProfilePicture({ user, size, viewProfile = () => {} ,currentRoutre }) { 
  const navigate = useNavigate()
  if (user !== null)
    return (
      <div>
          <span
            className="profilepicture"
            style={{ padding: "1%", width: size, height: size }}
          >
            <img
              className="rounded-circle"
              style={{ flex: 2, width: "100%", height: "100%" }}
              src={user.profilePicture}
              alt=""
              onClick={() =>{viewProfile(user); navigate('/'+user.userName)} }
            ></img>
          </span>
        <p> {user.userName}</p>
      </div>
    );
}

export default ProfilePicture;
