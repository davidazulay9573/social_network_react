
import useStatePersist from "./useStatePersist";
import { PostObj,CommentObj } from "../oop/objects";

function useFeed(loggedOnUser, setView = () => {}){
  const [allPosts, setAllPostsAndSave] = useStatePersist("posts", []);
 
  
  const handleAddPost = (content) => {
      const newPost = new PostObj(loggedOnUser, content);
      console.log(newPost);
      setAllPostsAndSave((allPosts) => [...allPosts, newPost]);
      setView([newPost])
    //   setPostView([newPost]);
     
    };

    const handleAddLike = (postPR) => {
      postPR.likes.includes(loggedOnUser.id)
        ? postPR.likes.splice(postPR.likes.indexOf(loggedOnUser.id), 1)
        : postPR.likes.push(loggedOnUser.id);
      const mapPosts = (posts) => {
        return posts.map((post) => {
          if (postPR.id === post.id) {
            return postPR;
          }
          return post;
        });
      };
   
      setAllPostsAndSave((allPosts) => mapPosts(allPosts));
      setView(mapPosts)
    };

    const handleAddComment = (postPR, content) => {
      const newComment = new CommentObj(loggedOnUser.id, content);
      postPR.comments.push(newComment);
      const mapPosts = (posts) => {
        return posts.map((post) => {
          if (postPR.id === post.id) {
            return postPR;
          }
          return post;
        });
      };
   
      setAllPostsAndSave((allPosts) => mapPosts(allPosts));
      setView(mapPosts);

      return newComment;
    };
    return  [ handleAddPost,handleAddLike,handleAddComment,allPosts]

}

export default useFeed;