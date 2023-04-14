import ProfilePicture from "./ProfilePicture";
function Comment({ loggedOnUser, comment, addLike, viewProfile }) {
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
            padding: "2%",
            borderRadius: "10px",
            borderStyle: "inset",
            backgroundColor: "wheat",
          }}
        >
          <p>{comment.content}</p>
          <i
            style={{ flex: 0.5 }}
            className={`bi bi-hand-thumbs-up${
              comment.likes.includes(loggedOnUser.id) ? "-fill" : ""
            }`}
             onClick={addLike}
          ></i>
            {comment.likes.length}
        </div>

        {/* <i
          style={{ flex: 0.5 }}
          className="bi bi-chat"
          onClick={() => {
            comment.length === 0 ? setComment(post.comments) : setComment([]);
          }}
        ></i> */}
      </div>
    );
  }
}
export default Comment;
