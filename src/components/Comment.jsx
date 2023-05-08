import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
function Comment({ loggedOnUser, comment, addLike, viewProfile }) {
  const [likesList, setLikesList] = useState([]);
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
            flex: 2,
            margin: "2%",
            padding: "2%",
            borderRadius: "10px",
            borderStyle: "inset",
            backgroundColor: "wheat",
            color: "black",
          }}
        >
          <p>{comment.content}</p>
          <span
            onClick={() => {
              likesList.length === 0
                ? setLikesList(comment.likes)
                : setLikesList([]);
            }}
          >
            <i
              style={{ flex: 0.5 }}
              className={`bi bi-hand-thumbs-up${
                comment.likes.map(like => like.id).includes(loggedOnUser.id) ? "-fill" : ""
              }`}
              onClick={addLike}
            ></i>
            {comment.likes.length}
          </span>
          {likesList.map((userLiked) => (
            <ProfilePicture
              key={userLiked.id}
              user={userLiked}
              size={20}
              viewProfile={viewProfile}
            />
          ))}
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
