
import { Post } from "./Post"

function Feed({postslist =[],addLike,addComment, viewProfile,userWatching}){ 

  return (
    <div>
      <br />
      {postslist
        .sort((a, b) => b.likes.length - a.likes.length)
        .map((post) => (
          <Post
            key={post.id}
            post={post}
            viewProfile={viewProfile}
            addLike={() => addLike(post)}
            addComment={addComment}
            userWatching={userWatching}
          />
        ))}
    </div>
  );
}
export default Feed;