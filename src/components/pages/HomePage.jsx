import FormAddPost from "../FormAddPost";
import Feed from "../Feed";

function HomePage(props) {
  return (
    <>
      {props.loggedOnUser ? (
        <>
          <FormAddPost onSubmit={props.handleAddPost} />
          <br />
          <Feed
            postslist={props.postsView}
            addLike={props.addLike}
            addComment={props.addComment}
            viewProfile={props.viewProfile}
            loggedOnUser={props.loggedOnUser}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomePage;
