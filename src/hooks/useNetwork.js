
import useStatePersist from "./useStatePersist";
import { UserObj } from "../oop/objects";

let loggedOnUser  = null;

function useNetwork(
  setViewWhenLogin = () => {},
  setViewWhenChange = () => {},
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
      setViewWhenLogin(loggedOnUser);
    } else {
      alert("You need to register");
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
     setViewWhenChange();
  };

  const handleConfirm = (user) => {
    user.friends.push(loggedOnUser.id);
    loggedOnUser.friends.push(user.id);
    const index = loggedOnUser.friendRequests.indexOf(user);
    loggedOnUser.friendRequests.splice(index, 1);

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
    setViewWhenChange();
  };
  return [
    loggedOnUser,
    allUsers,
    handleRegister,
    handleLogin,
    handleFriendRequest,
    handleConfirm,
  ];
}

export default useNetwork;