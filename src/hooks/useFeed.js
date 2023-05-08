import useStatePersist from "./useStatePersist";
import { PostObj, CommentObj } from "../oop/objects";

function useFeed(loggedOnUser) {
  const [allPosts, setAllPostsAndSave] = useStatePersist("posts", []);

  const handleAddPost = (content) => {
    const newPost = new PostObj(
      { userName: loggedOnUser.userName, id: loggedOnUser.id },
      content
    );
    setAllPostsAndSave([...allPosts, newPost]);
  };

  const handleAddLike = (postPR, commentPR) => {
  
    if (commentPR) {
      commentPR.likes.map((like) => like.id).includes(loggedOnUser.id)
        ? commentPR.likes = commentPR.likes.filter(like => like.id !== loggedOnUser.id)
        : commentPR.likes.push({
            userName: loggedOnUser.userName,
            id: loggedOnUser.id,
          });
    } else {
      postPR.likes.map((like) => like.id).includes(loggedOnUser.id)
        ? postPR.likes = postPR.likes.filter(like => like.id !== loggedOnUser.id)
        : postPR.likes.push({
            userName: loggedOnUser.userName,
            id: loggedOnUser.id,
          });
    }

    setAllPostsAndSave((allPosts) =>
      allPosts.map((post) => {
        if (postPR.id === post.id) {
          return postPR;
        }
        return post;
      })
    );

    setPostRating(postPR);
  };

  const handleAddComment = (postPR, content) => {
    const newComment = new CommentObj(loggedOnUser, content);
    postPR.comments.push(newComment);
    const mapPosts = (posts) => {
      return posts.map((post) => {
        if (postPR.id === post.id) {
          return postPR;
        }
        return post;
      });
    };
    setPostRating(postPR);
    setAllPostsAndSave((allPosts) => mapPosts(allPosts));

    return newComment;
  };

  const setPostRating = (post) => {
    post.rating = post.comments.length * 2 + post.likes.length;
  };
  return [handleAddPost, handleAddLike, handleAddComment, allPosts];
}

export default useFeed;
