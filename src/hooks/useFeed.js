
import useStatePersist from "./useStatePersist";
import { PostObj,CommentObj } from "../oop/objects";

function useFeed(loggedOnUser, setView = () => {}){
  const [allPosts, setAllPostsAndSave] = useStatePersist("posts", []);
 
  const handleAddPost = (content) => {
      const newPost = new PostObj(loggedOnUser, content);
      setAllPostsAndSave((allPosts) => [...allPosts, newPost]);
      setView([newPost])
    };

   const handleAddLike = (postPR, commentPR) => {
     if (commentPR) {
       commentPR.likes.includes(loggedOnUser.id)
         ? commentPR.likes.splice(commentPR.likes.indexOf(loggedOnUser.id), 1)
         : commentPR.likes.push(loggedOnUser.id);
     } else {
       postPR.likes.includes(loggedOnUser.id)
         ? postPR.likes.splice(postPR.likes.indexOf(loggedOnUser.id), 1)
         : postPR.likes.push(loggedOnUser.id);
     }

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
     setView(mapPosts);
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
    setView(mapPosts);

    return newComment;
  };
 
  const setPostRating = (post) => {
     post.rating = post.comments.length * 2 + post.likes.length;
   };
   return [handleAddPost, handleAddLike, handleAddComment, allPosts];

}

export default useFeed;