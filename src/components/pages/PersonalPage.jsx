import ProfilePicture from "../ProfilePicture";
import Feed from "../Feed";

function PersonalPage(props) {
  return (
    <div style={{ textAlign: "center" }}>
      {props.loggedOnUser ? (
        <>
          <br />
          <ProfilePicture
            user={props.loggedOnUser}
            size="110px"
            viewProfile={props.viewProfile}
          ></ProfilePicture>

          <br />
          <h3>Posts:</h3>
          <br />
          <Feed
            postslist={props.postsView}
            addLike={props.handleAddLike}
            addComment={props.handleAddComment}
            loggedOnUser={props.loggedOnUser}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PersonalPage;
