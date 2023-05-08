import UsersList from "../UsersList";
function UsersPage({

  users,
  loggedOnUser,
  viewProfile,
  handleFriendRequest,
  handleConfirm,
  currentRoutre
}) {
 
  if (loggedOnUser)
    return (
      <section style={{ backgroundColor: "rgba(0, 0, 0, 0.300)" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div
                className="card"
                id="chat3"
                style={{
                  textAlign: "center",
                  borderRadius: "15px",
                  backgroundColor: "rgba(0, 0, 0, 0.200)",
                  color: "white",
                }}
              >
                <div className="row">
                  <div
                    style={{ borderRadius: "10px", borderStyle: "inset" }}
                    className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 p-4"
                  >
                    <h3 className="my-9">Friends:</h3>
                    <br />
                    <UsersList
                      userslist={users.filter((user) =>
                        loggedOnUser.friends.includes(user.id)
                      )}
                      viewProfile={viewProfile}
                      loggedOnUser={loggedOnUser}
                                            currentRoutre={currentRoutre}

                      onSubmits={[console.log, console.log]}
                      buttonsTitle={[
                        <i className="bi bi-chat-dots"></i>,
                        <i className="bi bi-person-circle"></i>,
                      ]}
                    />
                  </div>
                  <div
                    style={{ borderRadius: "10px", borderStyle: "inset" }}
                    className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 p-4 "
                  >
                    <h3>Friend requests:</h3>
                    <UsersList
                      userslist={users.filter((user) =>
                        loggedOnUser.friendRequests.includes(user.id)
                      )}
                      viewProfile={viewProfile}
                      loggedOnUser={loggedOnUser}
                     currentRoutre={currentRoutre}

                      onSubmits={[handleConfirm, console.log]}
                      buttonsTitle={[
                        <i className="bi bi-check-circle"></i>,
                        <i className="bi bi-x-circle-fill"></i>,
                      ]}
                    />
                  </div>
                  <div
                    style={{ borderRadius: "10px", borderStyle: "inset" }}
                    className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 p-4 "
                  >
                    <h3>Find new friends:</h3>
                    <UsersList
                      userslist={users.filter(
                        (user) =>
                          user.id !== loggedOnUser.id &&
                          !loggedOnUser.friends.includes(user.id) &&
                          !loggedOnUser.friendRequests.includes(user.id) &&
                          !user.friendRequests.includes(loggedOnUser.id)
                      )}
                      viewProfile={viewProfile}
                      loggedOnUser={loggedOnUser}
                       currentRoutre={currentRoutre}

                      onSubmits={[handleFriendRequest, console.log]}
                      buttonsTitle={[
                        <i className="bi bi-person-fill-add"></i>,
                        <i className="bi bi-trash"></i>,
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default UsersPage;
