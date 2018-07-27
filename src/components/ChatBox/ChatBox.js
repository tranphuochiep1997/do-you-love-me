import "./ChatBox.css";
import React, { PureComponent } from "react";
import ChatView from "./ChatView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../constants/config";
import io from 'socket.io-client';
import { connect } from "react-redux";
import {addMessage} from "../../actions/chatAction";

class ChatBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: ""
    }
    this.socket = io(`${config.SERVER_CHAT}`, {
      path: "/api/chat",
      query: `userId=${JSON.parse(localStorage.getItem("user")).userID}`,  
      transports: ['websocket']
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
      const {roomId} = this.props;    

      this.socket.on("RECEIVE_MESSAGE", (message)=>{
        let messageModel = {
          roomId,
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
        sender: user.facebookId,
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
        <ChatView user={this.props.user}/>
        <form className="row chatbox-input" onSubmit={this.handleSubmit}>
          <input type="text" className="col-10 col-md-11 input-message" name="messageInput" onChange={this.handleChange} value={this.state.messageInput} type="text" placeholder="Write your message..." />
          <button className="col-2 col-md-1 send-message" type="submit" disabled={!this.state.messageInput || !this.props.roomId} >
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </button>
        </form>
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
    user: state.userReducer.user,
  }
}
export default connect(mapStateToProps)(ChatBox);