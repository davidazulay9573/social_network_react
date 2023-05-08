import { v4 as uuid } from "uuid";

export class UserObj {
  constructor(userName, propilePicture) {
    this.userName = userName;
    this.id = uuid();
    this.profilePicture = propilePicture;
    this.friends = [];
    this.friendRequests = [];
    this.posts = []
    this.messages = [];
  }
}

export class PostObj {
  constructor(userUp, content) {
    this.userUp = userUp;
    this.content = content;
    this.createAt = new Date().getTime();
    this.id = uuid();
    this.likes = [];
    this.comments = [];
    this.rating = 0;
  }
}
export class CommentObj extends PostObj{
  
}

export class Message {
 constructor(sender,content){
  this.sender = sender;
  this.content = content;
  this.createAt = new Date().getTime();
  this.id = uuid();
 }
}
