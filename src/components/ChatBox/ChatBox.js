import "./ChatBox.css";
import React, { PureComponent } from "react";
import ChatView from "./ChatView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../constants/config";
import io from 'socket.io-client';
import { connect } from "react-redux";
import {addMessage} from "../../actions/chatAction";
import {Link} from "react-router-dom";

class ChatBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: ""
    }
    this.socket = io(`${config.SERVER_CHAT}`, {
        path: "/api/chat",
        query:  `token=${JSON.parse(localStorage.getItem("credentials")).token}`,  
        transports: ['websocket']
      });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {error} = this.props;    
    if (error){
      alert(error);
      this.props.history.goback();
    }

    this.socket.on("RECEIVE_MESSAGE", (message)=>{
      let messageModel = {
        sender: "",
        body: message
      };
      addMessage(messageModel);
    });
    
    this.socket.on("error", (err)=>{
      console.log(err);
    });
  }
 
  componentWillReceiveProps(nextProps) {
    let roomChanged = this.props.roomId !== nextProps.roomId
    if(roomChanged) {
      this.socket.emit("JOIN_ROOM", nextProps.roomId);
    }
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const {roomId, user} = this.props;
    let {messageInput} = this.state;

    if (messageInput.trim()) {
      
      let messageModel = {
        sender: user._id,
        body: messageInput
      };
      addMessage(messageModel);
      this.socket.emit('SEND_MESSAGE', {
        message: messageInput,
        roomId
      });
      this.setState({
        messageInput: ""
      })
    }
  }

  render() {
    return (
      <div className="container chatbox">
        <div>
          <Link className="chatbox-heading" to={`/profile/${this.props.friendProfile._id}`}>{this.props.friendProfile.name}</Link>
        </div>
        <div className="chatbox-body">
          <ChatView roomId={this.props.roomId} user={this.props.user} friendProfile={this.props.friendProfile}/>
          <form className="chatbox-input" onSubmit={this.handleSubmit}>
            <input  type="text" autoComplete="off" className="input-message" 
              disabled={!this.props.roomId} 
              name="messageInput" onChange={this.handleChange} value={this.state.messageInput} 
              placeholder="Write your message..." />
            <button className="send-message" type="submit" disabled={!this.state.messageInput || !this.props.roomId} >
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
ChatBox.defaultProps = {
  user: {}
}
const mapStateToProps = state => {
  return {
    roomId: state.chatReducer.roomId,
    error: state.chatReducer.error,
    user: state.userReducer.user,
    friendProfile: state.friendReducer.friendProfile
  }
}
// function sendSocketMessage(message) {
//   return {
//       type : "SEND_MESSAGE",
//       payload : message
//   }
// }
// function joinRoom(roomId) {
//   return {
//       type : "JOIN_ROOM",
//       payload : roomId
//   }
// }

// export default connect(mapStateToProps, {sendSocketMessage, joinRoom})(ChatBox);
export default connect(mapStateToProps)(ChatBox);