import UsersList from "./UsersList";
function UsersPage({
  allUsers,
  loggedOnUser,
  viewProfile,
  handleFriendRequest,
  handleConfirm,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "4%" }}>
      <div style={{ flex: 3, textAlign: "center" }}>
        <h5>Friends</h5>
        <br />
        <UsersList
          userslist={allUsers.filter((user) =>
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

      <div style={{ flex: 3, textAlign: "center" }}>
        <h5>Friend requests</h5>
        <UsersList
          userslist={allUsers.filter((user) =>
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
      <div style={{ flex: 3, textAlign: "center" }}>
        <h5>Find new friends</h5>
        <UsersList
          userslist={allUsers.filter(
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
