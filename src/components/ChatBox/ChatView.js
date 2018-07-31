import "./ChatView.css";
import React, {PureComponent} from "react";
import ReceiveMessage from "./ReceiveMessage";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";
import * as ReactDOM from 'react-dom';

class ChatView extends PureComponent{
  constructor(props){
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidUpdate(){
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const { chatboxBody } = this.refs;
    const scrollHeight = chatboxBody.scrollHeight;
    const height = chatboxBody.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(chatboxBody).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  render(){
    let {messageModels, user, friendProfile} = this.props;
    return (
      <div ref="chatboxBody" className="chatview">
        {
          (messageModels !== null && messageModels.length > 0)
            ?
            messageModels.map((messageModel, key) => {
              if (messageModel.sender === user._id){
                return <SendMessage key={key} {...user} body={messageModel.body}/>
              }
              return <ReceiveMessage key={key} {...friendProfile} body={messageModel.body} />
            })
            :
            (null)
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    messageModels: state.chatReducer.messageModels,
  }
}
export default connect(mapStateToProps)(ChatView);