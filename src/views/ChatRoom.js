import React, { Component } from "react";
import ChatBox from "../components/ChatBox/ChatBox";
import {getFriendProfile} from "../actions/friendAction";
import {roomService} from "../services/roomService";
import {setRoomId, fetchMessageHistory} from "../actions/chatAction";
import "../styles/chatRoom.css";


class ChatRoom extends Component {
  constructor(props){
    super(props);

    let userId = JSON.parse(localStorage.getItem("user")).userID;
    let friendId = this.props.match.params.id;
    getFriendProfile(friendId);
    roomService.getRoomId({relatingUserId: userId, relatedUserId: friendId})
      .then(response => {
        let roomId = response.data._id;
        setRoomId(roomId);
        fetchMessageHistory(roomId);
      })
      .catch(err=>{
        console.log(err);
      })
  }

  render() {
    return (
      <div className="chat-room">
        <ChatBox {...this.props} />
      </div>
    );
  }
}

export default ChatRoom;