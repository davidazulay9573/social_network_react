import { useState } from "react";
import ProfilePicture from "../ProfilePicture";
import Message from "../Message";
    function ChatPage({handleSendMessage, loggedOnUser, usersList, viewProfile }) {
      const [userOfCurrentChat, setUserOfCurrentChat] = useState(null);
      const [messageInput, setMessageInput] = useState('');
      return (
        <section style={{ backgroundColor: "rgba(0, 0, 0, 0.350)" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="card"
                  id="chat3"
                  style={{ borderRadius: "15px", backgroundColor: "white" }}
                >
                  <div className="row">
                    <div
                      style={{ borderRadius: "10px", borderStyle: "inset" }}
                      className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 p-4"
                    >
                      {usersList.map((user) => (
                        <span
                          onClick={() => {
                            setUserOfCurrentChat(user);
                          }}
                          key={user.id}
                        >
                          <ProfilePicture
                            user={user}
                            size="40px"
                          ></ProfilePicture>
                        </span>
                      ))}
                    </div>

                    <div
                      style={{ borderRadius: "10px", borderStyle: "inset" }}
                      className="col p-4"
                    >
                      <div className="row p-4">
                        {userOfCurrentChat && (
                          <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                            <ProfilePicture
                              user={userOfCurrentChat}
                              size="40px"
                            ></ProfilePicture>
                            <input
                              onInput={(e) => {
                                setMessageInput(e.target.value);
                              }}
                              value={messageInput}
                              type="text"
                              className="form-control "
                              placeholder="Type message"
                            />

                            <button
                              onClick={() => {
                                handleSendMessage(
                                  userOfCurrentChat,
                                  messageInput
                                );
                                setMessageInput("");
                              }}
                              className="btn btn-light"
                            >
                              <i className="bi bi-send"></i>
                            </button>
                          </div>
                        )}
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          borderStyle: "inset",
                          backgroundColor: "rgba(0, 0, 0, 0.350)",
                        }}
                        className="col mb-md-0 p-4"
                      >
                        {userOfCurrentChat
                          ? orgenMessages(loggedOnUser, userOfCurrentChat)
                              .length !== 0
                            ? orgenMessages(
                                loggedOnUser,
                                userOfCurrentChat
                              ).map((message) => {
                                return (
                                  <Message
                                    key={message.id}
                                    message={message}
                                    position={
                                      message.sender.id !== loggedOnUser.id &&
                                      "-end"
                                    }
                                  ></Message>
                                );
                              })
                            : "Send message first..."
                          : loggedOnUser.friends.length !== 0
                          ? "Select a user from the menu, to start a conversation !"
                          : "Add new friends for to start a conversation !"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default ChatPage;

function orgenMessages(fromUser, toUser) {
  if (fromUser && toUser) {
    const receivedMessages = fromUser.messages.filter((message) => message.sender.id === toUser.id);
    const sentMessages = toUser.messages.filter((message) => message.sender.id === fromUser.id);
      
    return [...sentMessages, ...receivedMessages].sort((a, b) => a.createAt - b.createAt);
  }
  return [];
}