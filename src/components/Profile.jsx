import ProfilePicture from "./ProfilePicture";
function Profile({ user }) {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <ProfilePicture user={user} size="110px"></ProfilePicture>
      <br />
      <br />
      <h4>Posts:</h4>
    </div>
  );
}

export default Profile;
