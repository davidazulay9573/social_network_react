import { useState,useEffect } from "react";
import React, { useRef } from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import useNetwork from "../hooks/useNetwork";
import useFeed from "../hooks/useFeed";

import Header from "./Header";
import ButtonsMenu from "./buttonsMenu";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage";
import ChatPage from "./pages/ChatPage";
function SocialNetwork() {
  const centralContainerRef = useRef(null);
  const [userView, setuserView] = useState(null);
  const location = useLocation()
  const [currentRoutre,setCurrentRoutre] = useState()
  useEffect(()=>{setCurrentRoutre(location.pathname)},[location])

  const [
    loggedOnUser,
    allUsers,
    handleRegister,
    handleLogin,
    handleFriendRequest,
    handleConfirm,
    handleSendMessage,
  ] = useNetwork();
  const [handleAddPost, handleAddLike, handleAddComment, allPosts] =
    useFeed(loggedOnUser);

  const viewProfile = (user) => {
    setuserView(user);
    upOverFlow();
  };
  const upOverFlow = () => {
    centralContainerRef.current.scrollTop = 0;
  };

  const viewResultSearch = (input) => {
    // setuserView(null);
    // setUsersView([]);
    // setAddPostView(false);
    // postsView.length !== 0
    //   ? viewFeed(allPosts.filter((post) => post.content.includes(input) || post.userUp.userName.includes(input)))
    //   : viewUsersList(allUsers.filter((user) => user.userName.includes(input)));
  };
  return (
    <div>
      <Header
        loggedOnUser={loggedOnUser}
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
            <span style={{ flex: 0.5 }}></span>
            <span style={{ flex: 4 }}>
              <main>
                <Routes>
                  <Route
                    path="login"
                    element={
                      <LoginPage
                        handleLogin={handleLogin}
                        loggedUser={loggedOnUser}
                      />
                    }
                  ></Route>
                  <Route
                    path="register"
                    element={<RegisterPage handleRegister={handleRegister} />}
                  ></Route>
                  <Route
                    path="/"
                    element={
                      <HomePage
                        loggedOnUser={loggedOnUser}
                        postsView={allPosts}
                        addLike={handleAddLike}
                        addComment={handleAddComment}
                        handleAddPost={handleAddPost}
                        viewProfile={viewProfile}
                        viewResultSearch={viewResultSearch}
                      />
                    }
                  ></Route>
                  {userView ? (
                    <Route
                      path={`${userView.userName}`}
                      element={
                        <PersonalPage
                         userView={userView}
                          postslist={allPosts.filter(
                            (post) => post.userUp.id === userView.id
                          )}
                          handleAddPost={handleAddPost}
                          addLike={handleAddLike}
                          addComment={handleAddComment}
                          viewProfile={viewProfile}
                        />
                      }
                    ></Route>
                  ) : (
                    <></>
                  )}
                  <Route
                    path="users"
                    element={
                      <UsersPage
                        users={allUsers}
                        loggedOnUser={loggedOnUser}
                        viewProfile={viewProfile}
                        handleFriendRequest={handleFriendRequest}
                        handleConfirm={handleConfirm}
                        currentRoutre={currentRoutre}
                      />
                    }
                  ></Route>

                  {loggedOnUser && (
                    <Route
                      path="chat"
                      element={
                        <ChatPage
                          loggedOnUser={loggedOnUser}
                          usersList={allUsers.filter((user) =>
                            user.friends.includes(loggedOnUser.id)
                          )}
                          handleSendMessage={handleSendMessage}
                          viewProfile={viewProfile}
                        />
                      }
                    ></Route>
                  )}
                </Routes>
              </main>

              <br />
            </span>
            <span style={{ flex: 0.5 }}></span>
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
          {loggedOnUser ? (
            <ButtonsMenu
              upOverFlow={upOverFlow}
              viewMyProfile={() => viewProfile(loggedOnUser)}
              loggedOnUser={loggedOnUser}
              currentRoutre={currentRoutre}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default SocialNetwork;
