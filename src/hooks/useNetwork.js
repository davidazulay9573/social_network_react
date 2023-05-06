
import useStatePersist from "./useStatePersist";
import { UserObj,Message } from "../oop/objects";
 let loggedOnUser = null;
function useNetwork(
 
) {

  const [allUsers, setAllUsersAndSave] = useStatePersist("users", []);
  const handleRegister = (registersInput) => {
      const newUser = new UserObj(registersInput.userName, registersInput.img);
      setAllUsersAndSave((allUsers) => [...allUsers, newUser]);
  };

  const handleLogin = (loginInput) => {
    loggedOnUser = allUsers.find(
      (user) => user.userName === loginInput.userName
    );
    if (loggedOnUser) {
    
      return loggedOnUser;
    } else {
      alert("You need to register");
      return null;
    }
  };
  const handleFriendRequest = (user) => {
    user.friendRequests.push(loggedOnUser.id);
    setAllUsersAndSave((allUsers) =>
      allUsers.map((MapUser) => {
        if (MapUser.id === user.id) {
          return user;
        }
        return MapUser;
      })
    );
    
  };

  const handleConfirm = (user) => {
    user.friends.push(loggedOnUser.id);
    loggedOnUser.friends.push(user.id);
    
    loggedOnUser.friendRequests = loggedOnUser.friendRequests.filter(
      (request) => request.id === user.id
    );
    setAllUsersAndSave((allUsers) =>
      allUsers.map((mapUser) => {
        if (mapUser.id === user.id) {
          return user;
        }
        if (mapUser.id === loggedOnUser.id) {
          return loggedOnUser;
        }
        return mapUser;
      })
    );

  };
  const handleSendMessage = (toUser,messageContent) => {
      toUser.messages.push(new Message(loggedOnUser,messageContent))
        setAllUsersAndSave( [...allUsers]);
  }
  return [
    loggedOnUser,
    allUsers,
    handleRegister,
    handleLogin,
    handleFriendRequest,
    handleConfirm,
    handleSendMessage
  ];
}

export default useNetwork;