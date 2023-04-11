import UsersList from "./UsersList";
function UsersPage({
  allUsers,
  userWatching,
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
            userWatching.friends.includes(user.id)
          )}
          viewProfile={viewProfile}
          userWatching={userWatching}
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
            userWatching.friendRequests.includes(user.id)
          )}
          viewProfile={viewProfile}
          userWatching={userWatching}
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
              user.id !== userWatching.id &&
              !userWatching.friends.includes(user.id) &&
              !userWatching.friendRequests.includes(user.id)
          )}
          viewProfile={viewProfile}
          userWatching={userWatching}
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
