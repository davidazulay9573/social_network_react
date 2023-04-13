
import { Post } from "./Post"

function Feed({postslist =[],addLike,addComment, viewProfile,loggedOnUser}){ 

  return (
    <div>
      <br />
      {postslist
        .sort((a, b) => b.rating - a.rating)
        .map((post) => (
          <Post
            key={post.id}
            post={post}
            viewProfile={viewProfile}
            addLike={() => addLike(post)}
            addComment={addComment}
            loggedOnUser={loggedOnUser}
          />
        ))}
    </div>
  );
}
export default Feed;