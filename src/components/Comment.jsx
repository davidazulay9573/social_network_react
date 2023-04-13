import ProfilePicture from "./ProfilePicture";
function Comment({ comment, addLike, viewProfile }) {
  if (comment) {
    return (
      <div style={{ display: "flex", whiteSpace: "pre-wrap" }}>
        <ProfilePicture
          user={comment.userUp}
          size={30}
          viewProfile={viewProfile}
        ></ProfilePicture>

        <div
          style={{
            margin: "2%",
            padding:'2%',
            borderRadius: "10px",
            borderStyle: "inset",
            backgroundColor: "wheat",
          }}
        >
          <p>{comment.content}</p>
        </div>
      </div>
    );
  }
}
export default Comment;
