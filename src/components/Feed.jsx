
import { Post } from "./Post"

function Feed({postslist = [],addLike,addComment, viewProfile,loggedOnUser}){ 

  return (
    <div>
      <br />
      {postslist
        .sort((a, b) => b.createAt - a.createAt)
        .sort((a, b) => b.rating - a.rating)
        .map((post) => (
          // loggedOnUser.friends.includes(post.userUp.id) || loggedOnUser.id === post.userUp.id ?
          <Post
            key={post.id}
            post={post}
            viewProfile={viewProfile}
            addLike={addLike}
            addComment={addComment}
            loggedOnUser={loggedOnUser}
          />
        ))}
    </div>
  );
}
export default Feed;