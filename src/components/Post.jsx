import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import Comment from "./Comment";


export function Post({ post, addLike, addComment, viewProfile, loggedOnUser }) {
  const [comment, setComment] = useState([]);
  const [likesList,setLikesList] = useState([]);
  const [input, setInput] = useState("");
   const handleSubmit = () => {
    addComment(post, input);
    setComment([post.comments.find((cmt) => cmt.content === input)]);
    setInput('')
   
   }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          margin: "4%",
          borderStyle: "inset",
          backgroundColor: "white",
        }}
      >
        <div style={{ padding: "1%" }}>
          <ProfilePicture
            user={post.userUp}
            size={40}
            viewProfile={viewProfile}
          ></ProfilePicture>
        </div>
        <div
          className="conteiner"
          style={{ flex: 5, padding: "5%", whiteSpace: "pre-wrap" }}
        >
          {post.content}
          <br />
        </div>
       
        <div>
          <span
            onClick={() => {
              likesList.length === 0
                ? setLikesList(post.likes)
                : setLikesList([]);
            }}
          >
            {post.likes.length}
            <i
              style={{ flex: 0.5 }}
              className={`bi bi-hand-thumbs-up${
                post.likes
                  .map((userLiked) => userLiked.id)
                  .includes(loggedOnUser.id)
                  ? "-fill"
                  : ""
              }`}
              onClick={() => addLike(post)}
            ></i>
          </span>
          <span>
            {post.comments.length}
            <i
              style={{ flex: 0.5 }}
              className="bi bi-chat"
              onClick={() => {
                comment.length === 0
                  ? setComment(post.comments)
                  : setComment([]);
                setLikesList([]);
              }}
            ></i>
          </span>
        </div>
        {likesList.map((userLiked) => (
          <ProfilePicture
            key={userLiked.id}
            user={userLiked}
            size={25}
            viewProfile={viewProfile}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          margin: "4%",
        }}
      >
        <span>
          <span style={{ display: "flex" }}>
            <textarea
              style={{ flex: 8 }}
              type="text"
              className="form-control"
              placeholder="Type comment..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setLikesList([])
              }}
            />
            <button className="btn btn-light" onClick={handleSubmit}>
              <i className="bi bi-file-earmark-plus"></i>
            </button>
          </span>

          <br />
          {comment.map((comment) => (
            <Comment
              key={comment.id}
              loggedOnUser={loggedOnUser}
              comment={comment}
              addLike={() => addLike(post, comment)}
              viewProfile={viewProfile}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
