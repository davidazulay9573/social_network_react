import { useState } from "react";
import React, { useRef } from "react";

import useNetwork from "../hooks/useNetwork";
import useFeed from "../hooks/useFeed";

import Header from "./Header";
import ButtonsMenu from "./buttonsMenu";
import Feed from "./Feed";
import Profile from "./Profile";
import FormRegisterOrLogin from "./FormRegisterOrLogin";
import FormAddPost from "./FormAddPost";
import UsersPage from "./UsersPage";

function SocialNetwork() {
  const [
    loggedOnUser,
    allUsers,
    handleRegister,
    handleLogin,
    handleFriendRequest,
    handleConfirm,
  ] = useNetwork(
    (loggedOnUser) => {
      setDisplay({ beforeLogin: "none", afterLogin: "flex" });
      setFormView(null)
      viewProfile(loggedOnUser);
    },
    () => {
      viewUsersList(allUsers);
    }
  );
  const [handleAddPost, handleAddLike, handleAddComment, allPosts] = useFeed(
    loggedOnUser,
    (PR) => {
      typeof PR === "function"
        ? setPostView((postsView) => PR(postsView))
        : setPostView(PR);
    }
  );

  const [postsView, setPostView] = useState([]);
  const [usersView, setUsersView] = useState([]);
  const [addPostView, setAddPostView] = useState(false);
  const [formView,setFormView] = useState(null);
  const [profileView,setProfileView] = useState(null);
  const [display, setDisplay] = useState({beforeLogin:'', afterLogin:'none'});
  const centralContainerRef = useRef(null);
  
  const viewRegisterForm = () => {
    setFormView('register')
  };
  const viewLoginForm = () => {
    setFormView('login')
  };
  const viewProfile = (user) => {
    setProfileView(user);
    setAddPostView(null)
    setUsersView([]);
    setPostView(allPosts.filter((post) => post.userUp.id === user.id));
    centralContainerRef.current.scrollTop = 0;
  };

  const viewUsersList = (users) => {
    setUsersView(users)
    setProfileView(null);
    setAddPostView(false);
    setPostView([]);
   

  };

  const viewFormAddPost = () => {
    setProfileView(null);
    setUsersView([]);
    setPostView([]);
    setAddPostView(true);
    
  };

  const viewFeed = (posts) => {
    setProfileView(null);
    setFormView(null)
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
      ? viewFeed(allPosts.filter((post) => post.content.includes(input) || post.userUp.userName.includes(input)))
      : viewUsersList(allUsers.filter((user) => user.userName.includes(input)));  
  };
  return (
    <>
      <Header
        loggedOnUser={loggedOnUser}
        display={display}
        viewLoginForm={viewLoginForm}
        viewRegisterForm={viewRegisterForm}
        viewProfile={viewProfile}
        viewResultSearch={viewResultSearch}
      ></Header>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          ref={centralContainerRef}
          className="container border"
          style={{
            flex: "10",
            margin: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.200)",
            height: "400px",
            overflowY: "scroll",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", margin: "4%" }}>
            <span style={{ flex: 2 }}></span>
            <span style={{ flex: 4 }}>
              {formView === "register" ? (
                <FormRegisterOrLogin
                  buttonTitle={"Register"}
                  onSubmit={handleRegister}
                  validation={(inputs) =>
                    inputs.userName.length < 2
                      ? "must be at least 2 characters"
                      : null
                  }
                />
              ) : (
                <></>
              )}
              {formView === "login" ? (
                <FormRegisterOrLogin
                  buttonTitle={"Login"}
                  onSubmit={handleLogin}
                />
              ) : (
                <></>
              )}

              {profileView ? (
                <Profile key={profileView.id} user={profileView} />
              ) : (
                <></>
              )}
              <UsersPage
                users={usersView}
                loggedOnUser={loggedOnUser}
                viewProfile={viewProfile}
                handleFriendRequest={handleFriendRequest}
                handleConfirm={handleConfirm}
              ></UsersPage>
              {addPostView ? <FormAddPost onSubmit={handleAddPost} /> : <></>}

              <br />
              <Feed
                postslist={postsView}
                addLike={handleAddLike}
                addComment={handleAddComment}
                viewProfile={viewProfile}
                loggedOnUser={loggedOnUser}
              />
            </span>
            <span style={{ flex: 2 }}></span>
          </div>

          <br />
        </div>
        <div
          className=" border border"
          style={{
            flex: "0.3",
            margin: "20px",
            backgroundColor: "white",
          }}
        >
          <br />
          <ButtonsMenu
            display={display.afterLogin}
            viewUsersList={() => {
              viewUsersList(allUsers);
            }}
            viewFormAddPost={viewFormAddPost}
            viewFeed={() => viewFeed(allPosts)}
            viewMyProfile={() => viewProfile(loggedOnUser)}
          />
        </div>
      </div>
    </>
  );
}
export default SocialNetwork;
