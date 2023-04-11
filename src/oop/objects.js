import { v4 as uuid } from "uuid";

export class UserObj {
  constructor(userName, propilePicture) {
    this.userName = userName;
    this.id = uuid();
    this.profilePicture = propilePicture;
    this.friends = [];
    this.friendRequests = [];
  }
}

export class PostObj {
  constructor(userUp, content) {
    this.userUp = userUp;
    this.content = content;
    this.id = uuid();
    this.likes = [];
    this.comments = [];
  }
}
export class CommentObj extends PostObj{
  
}
