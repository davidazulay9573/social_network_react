import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import Comment from "./Comment";

export function Post({ post, addLike, addComment, viewProfile, userWatching }) {
 const [comment, setComment] = useState([]);
  const [input, setInput] = useState('');
  
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
        <span style={{ padding: "1%" }}>
          <ProfilePicture
            user={post.userUp}
            size={40}
            viewProfile={viewProfile}
          ></ProfilePicture>
        </span>
        <span
          className="conteiner"
          style={{ flex: 5, padding: "5%", whiteSpace: "pre-wrap" }}
        >
          {post.content}
          <br />
        </span>
        <span>
          {post.likes.length}
          <i
            style={{ flex: 0.5 }}
            className={`bi bi-hand-thumbs-up${
              post.likes.includes(userWatching.id) ? "-fill" : ""
            }`}
            onClick={addLike}
          ></i>

          <i
            style={{ flex: 0.5 }}
            className="bi bi-chat"
            onClick={() => {
              comment.length === 0
                ? setComment(post.comments)
                : comment.length && comment[0].content === input
                ? setComment(post.comments)
                : setComment([]);
            }}
          ></i>
        </span>
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
          <input
            style={{ flex: 8 }}
            type="text"
            className="form-control"
            placeholder="Type comment..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addComment(post, input);
                setComment([
                  post.comments.find((cmt) => cmt.content === input),
                ]);
              }
            }}
          />
          <br />
          {comment.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              addLike={addLike}
              viewProfile={viewProfile}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
