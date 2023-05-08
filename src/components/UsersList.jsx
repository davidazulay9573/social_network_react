
import ProfilePicture from "./ProfilePicture";

function UsersList({userslist,viewProfile,currentRoutre,onSubmits=[() =>{}, ()=>{}],buttonsTitle}){
 if(userslist.length !== 0) {return (
   <div style={{ display: "flex", flexDirection: "column" }}>
     {userslist.map((user) => (
       <span key={user.id}>
         <ProfilePicture
           user={user}
           viewProfile={viewProfile}
           size="40px"
           currentRoutre={currentRoutre}
         ></ProfilePicture>
         <button className="btn btn-light" onClick={() => onSubmits[0](user)}>
           {buttonsTitle[0]}
         </button>
         <button className="btn btn-light " onClick={onSubmits[1]}>
           {buttonsTitle[1]}
         </button>
         <br /> <br /> <br />
       </span>
     ))}
   </div>
 );}else{
   return <p className="p-3"> I couldn't find any users !</p>;
   }
}

export default UsersList;
