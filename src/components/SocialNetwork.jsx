import { useState } from "react";
import React, { useRef } from "react";

import { PostObj, UserObj, CommentObj } from "./oop/objects";

import ButtonsMenu from "./buttonsMenu";
import Feed from "./Feed";
import Profile from "./Profile";
import FormRegisterOrLogin from "./FormRegisterOrLogin";
import FormAddPost from "./FormAddPost";
import ProfilePicture from "./ProfilePicture";
import useStatePersist from "./hooks/useStatePersist";
import UsersPage from "./UsersPage";

let userWatching = null;

function SocialNetwork() {
  const [allUsers, setAllUsersAndSave] = useStatePersist("users", []);
  const [allPosts, setAllPostsAndSave] = useStatePersist("posts", []);

  const [postsView, setPostView] = useState([]);
  // const [usersView, setUsersView] = useState([]);

  const [view, setView] = useState("");
  const [loginButton, setLoginButton] = useState("");
  const [buttonsMenu, setButtonsMenu] = useState("none");
  const centralContainer = useRef(null);

  const handleRegister = (registersInput) => {
    if (registersInput.img !== "") {
      const newUser = new UserObj(
        registersInput.userName,
        URL.createObjectURL(registersInput.img)
      );
      setAllUsersAndSave((allUsers) => [...allUsers, newUser]);
    } else {
      const newUser = new UserObj(registersInput.userName);
      setAllUsersAndSave((allUsers) => [...allUsers, newUser]);
    }
  };

  const handleLogin = (loginInput) => {
    userWatching = allUsers.find(
      (user) => user.userName === loginInput.userName
    );
    if (userWatching) {
      setLoginButton("none");
      setButtonsMenu("flex");
      setView(
        <Profile
          user={userWatching}
          friendRequests={handleFriendRequest}
          addLike={handleAddLike}
          addPost={handleAddPost}
        />
      );
    } else {
      alert("You need to register");
    }
  };

  const handleAddPost = (content) => {
    const newPost = new PostObj(userWatching, content);
    setAllPostsAndSave((allPosts) => [...allPosts, newPost]);
    setPostView([newPost]);
    setView("");
  };

  const handleAddLike = (postPR) => {
    postPR.likes.includes(userWatching.id)
      ? postPR.likes.splice(postPR.likes.indexOf(userWatching.id), 1)
      : postPR.likes.push(userWatching.id);
    const mapPosts = (posts) => {
      return posts.map((post) => {
        if (postPR.id === post.id) {
          return postPR;
        }
        return post;
      });
    };
    setPostView((postsView) => mapPosts(postsView));
    setAllPostsAndSave((allPosts) => mapPosts(allPosts));
  };

  const handleAddComment = (postPR, content) => {
    const newComment = new CommentObj(userWatching.id, content);
    postPR.comments.push(newComment);
    const mapPosts = (posts) => {
      return posts.map((post) => {
        if (postPR.id === post.id) {
          return postPR;
        }
        return post;
      });
    };
    setPostView((postsView) => mapPosts(postsView));
    setAllPostsAndSave((allPosts) => mapPosts(allPosts));
    return newComment;
  };

  const handleFriendRequest = (user) => {
    user.friendRequests.push(userWatching.id);
    setAllUsersAndSave((allUsers) =>
      allUsers.map((MapUser) => {
        if (MapUser.id === user.id) {
          return user;
        }
        return MapUser;
      })
    );
    viewUsersList();
  };

  const handleConfirm = (user) => {
    user.friends.push(userWatching.id);
    userWatching.friends.push(user.id);
    const index = userWatching.friendRequests.indexOf(user);
    userWatching.friendRequests.splice(index, 1);

    setAllUsersAndSave((allUsers) =>
      allUsers.map((mapUser) => {
        if (mapUser.id === user.id) {
          return user;
        }
        if (mapUser.id === userWatching.id) {
          return userWatching;
        }
        return mapUser;
      })
    );
    viewUsersList();
  };

  const viewFormRegister = () => {
    setView(
      <FormRegisterOrLogin buttonTitle={"Register"} onSubmit={handleRegister} />
    );
  };
  const viewFormLogin = () => {
    setView(
      <FormRegisterOrLogin buttonTitle={"Login"} onSubmit={handleLogin} />
    );
  };
  const viewProfile = (user) => {
    setView(<Profile key={user.id} user={user} />);

    setPostView(allPosts.filter((post) => post.userUp.id === user.id));
    centralContainer.current.scrollTop = 0;
  };

  const viewUsersList = () => {
    setView(
      <UsersPage
        allUsers={allUsers}
        userWatching={userWatching}
        viewProfile={viewProfile}
        handleFriendRequest={handleFriendRequest}
        handleConfirm={handleConfirm}
      ></UsersPage>
    );
    setPostView([]);
  };

  const viewFormAddPost = () => {
    setPostView([]);
    setView(<FormAddPost onSubmit={handleAddPost} />);
  };

  const viewFeed = () => {
    setView("");
    setPostView(
      allPosts.filter(
        (post) =>
          userWatching.friends.includes(post.userUp.id) ||
          userWatching.id === post.userUp.id
      )
    );
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.400)",
          color: "white",
          padding: "25px",
          textAlign: "center",
          display: "flex",
        }}
      >
        <div style={{ flex: "6", textAlign: "left" }}>
          <h1>Social network</h1>
        </div>
        <button
          style={{ display: loginButton }}
          className="btn btn-light"
          onClick={viewFormRegister}
        >
          Register
        </button>
        <br />
        <button
          style={{ display: loginButton }}
          className="btn btn-light "
          onClick={viewFormLogin}
        >
          Login
        </button>
        {userWatching ? (
          <ProfilePicture
            user={userWatching}
            size="50px"
            viewProfile={viewProfile}
          ></ProfilePicture>
        ) : (
          ""
        )}

        {/* <Search onSubmit={viewResultSearch}></Search> */}
      </header>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          ref={centralContainer}
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
              {view}
              <br />
              <Feed
                postslist={postsView}
                addLike={handleAddLike}
                addComment={handleAddComment}
                viewProfile={viewProfile}
                userWatching={userWatching}
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
            buttonsMenu={buttonsMenu}
            viewUsersList={viewUsersList}
            viewFormAddPost={viewFormAddPost}
            viewFeed={viewFeed}
            viewMyProfile={() => viewProfile(userWatching)}
          />
        </div>
      </div>
    </>
  );
}
export default SocialNetwork;

// localStorage.removeItem('users')
// localStorage.removeItem("posts");
