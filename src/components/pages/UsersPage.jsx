import UsersList from "../UsersList";
function UsersPage({
  users,
  loggedOnUser,
  viewProfile,
  handleFriendRequest,
  handleConfirm,
}) {
  console.log(users);

  if (loggedOnUser)
    return (
      <div style={{ display: "flex", flexDirection: "row", margin: "4%" }}>
        <div style={{ flex: 3, textAlign: "center" }}>
          <h3 className="border">Friends</h3>
          <br />
          <UsersList
            userslist={users.filter((user) =>
              loggedOnUser.friends.includes(user.id)
            )}
            viewProfile={viewProfile}
            loggedOnUser={loggedOnUser}
            onSubmits={[console.log, console.log]}
            buttonsTitle={[
              <i className="bi bi-chat-dots"></i>,
              <i className="bi bi-person-circle"></i>,
            ]}
          />
        </div>
        <div style={{ flex: 3 }}></div>
        <div style={{ flex: 3, textAlign: "center" }}>
          <h3 className="border">Friend requests</h3>
          <UsersList
            userslist={users.filter((user) =>
              loggedOnUser.friendRequests.includes(user.id)
            )}
            viewProfile={viewProfile}
            loggedOnUser={loggedOnUser}
            onSubmits={[handleConfirm, console.log]}
            buttonsTitle={[
              <i className="bi bi-check-circle"></i>,
              <i className="bi bi-x-circle-fill"></i>,
            ]}
          />
        </div>
        <div style={{ flex: 3 }}></div>
        <div style={{ flex: 3, textAlign: "center" }}>
          <h3 className="border">Find new friends</h3>
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
            onSubmits={[handleFriendRequest, console.log]}
            buttonsTitle={[
              <i className="bi bi-person-fill-add"></i>,
              <i className="bi bi-trash"></i>,
            ]}
          />
        </div>
      </div>
    );
}

export default UsersPage;
