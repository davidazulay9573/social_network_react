import { useState } from "react";
import React, { useRef } from "react";

import useNetwork from "../hooks/useNetwork";
import useFeed from "../hooks/useFeed";

import ButtonsMenu from "./buttonsMenu";
import Feed from "./Feed";
import Profile from "./Profile";
import FormRegisterOrLogin from "./FormRegisterOrLogin";
import FormAddPost from "./FormAddPost";
import ProfilePicture from "./ProfilePicture";
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
      viewProfile(loggedOnUser);
    },
    () => {
      viewUsersList();
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
  
  const [view, setView] = useState("");
  const [postsView, setPostView] = useState([]);
  const [display, setDisplay] = useState({beforeLogin:'', afterLogin:'none'});
  const centralContainerRef = useRef(null);
  

  const viewRegisterForm = () => {
    setView(
      <FormRegisterOrLogin buttonTitle={"Register"} onSubmit={handleRegister} validation={(inputs) =>
      inputs.userName.length < 2 ? "must be at least 2 characters" : null
 } />
    );
  };
  const viewLoginForm = () => {
    setView(
      <FormRegisterOrLogin buttonTitle={"Login"} onSubmit={handleLogin} />
    );
  };
  const viewProfile = (user) => {
   user ? setView(<Profile key={user.id} user={user} />) :setView('')
    setPostView(allPosts.filter((post) => post.userUp.id === user.id));
    centralContainerRef.current.scrollTop = 0;
  };

  const viewUsersList = () => {
    setView(
      <UsersPage
        allUsers={allUsers}
         loggedOnUser={ loggedOnUser}
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
           loggedOnUser.friends.includes(post.userUp.id) ||
           loggedOnUser.id === post.userUp.id
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
          style={{ display: display.beforeLogin }}
          className="btn btn-light"
          onClick={viewRegisterForm}
        >
          Register
        </button>
        <br />
        <button
          style={{ display: display.beforeLogin }}
          className="btn btn-light "
          onClick={viewLoginForm}
        >
          Login
        </button>
        { loggedOnUser ? (
          <ProfilePicture
            user={ loggedOnUser}
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
              {view}
              <br />
              <Feed
                postslist={postsView}
                addLike={handleAddLike}
                addComment={handleAddComment}
                viewProfile={viewProfile}
                 loggedOnUser={ loggedOnUser}
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
            viewUsersList={viewUsersList}
            viewFormAddPost={viewFormAddPost}
            viewFeed={viewFeed}
            viewMyProfile={() => viewProfile( loggedOnUser)}
          />
        </div>
      </div>
    </>
  );
}
export default SocialNetwork;
