import { useState,useRef } from "react";

function useView(loggedOnUser,allUsers,allPosts){
  const [postsView, setPostView] = useState([]);
  const [usersView, setUsersView] = useState([]);
  const [addPostView, setAddPostView] = useState(false);
  const [formView, setFormView] = useState(null);
  const [profileView, setProfileView] = useState(null);
 
  const centralContainerRef = useRef(null);

  const viewRegisterForm = () => {
    setFormView("register");
  };
  const viewLoginForm = () => {
    setFormView("login");
  };
  const viewProfile = (user) => {
    setProfileView(user);
    setFormView(null);
    setUsersView([]);
    setPostView(allPosts.filter((post) => post.userUp.id === user.id));
    centralContainerRef.current.scrollTop = 0;
  };

  const viewUsersList = (users) => {
    setUsersView(users);
    setProfileView(null);
    setAddPostView(false);
    setPostView([]);
  };

  const viewFormAddPost = () => {
    setAddPostView(true);
    setProfileView(null);
    setUsersView([]);
    setPostView([]);
  };

  const viewFeed = (posts) => {
    setProfileView(null);
    setFormView(null);
    setUsersView([]);
    setAddPostView(false);
    setPostView(
      posts.filter(
        (post) =>
          loggedOnUser.friends.includes(post.userUp.id) ||
          loggedOnUser.id === post.userUp.id
      )
    );
    centralContainerRef.current.scrollTop = 0;
  };

  const viewResultSearch = (input) => {
    setProfileView(null);
    setUsersView([]);
    setAddPostView(false);
    postsView.length !== 0
      ? viewFeed(
          allPosts.filter(
            (post) =>
              post.content.includes(input) ||
              post.userUp.userName.includes(input)
          )
        )
      : viewUsersList(allUsers.filter((user) => user.userName.includes(input)));
  };
 const viewSpecificPost = (post) => {
   setPostView([post])
 };
  return [formView,addPostView,profileView, postsView,usersView,centralContainerRef, viewRegisterForm,viewLoginForm,viewProfile,viewFeed,viewFormAddPost, viewUsersList,viewResultSearch,viewSpecificPost]
}

export default useView;