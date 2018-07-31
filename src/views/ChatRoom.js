import React, { Component } from "react";
import ChatBox from "../components/ChatBox/ChatBox";
import {getFriendProfile} from "../actions/friendAction";
import {roomService} from "../services/roomService";
import {setRoomId, fetchMessageHistory} from "../actions/chatAction";
import "../styles/chatRoom.css";
import Navbar from "../components/Navbar/Navbar";


class ChatRoom extends Component {
  constructor(props){
    super(props);

    let {token} = JSON.parse(localStorage.getItem("credentials"));
    let friendId = this.props.match.params.id;
    getFriendProfile(friendId);
    roomService.getRoomId({relatedUserId: friendId, accessToken: token })
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
      <div>
        <Navbar history={this.props.history}/>
        <div className="chat-room">
          <ChatBox {...this.props} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;