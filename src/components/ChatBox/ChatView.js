import "./ChatView.css";
import React, {PureComponent} from "react";
import ReceiveMessage from "./ReceiveMessage";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";
import * as ReactDOM from 'react-dom';
import ShowUp from "./ShowUp";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {fetchMessageHistoryMore} from "../../actions/chatAction";

class ChatView extends PureComponent{
  constructor(props){
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.handleShowMoreMessage = this.handleShowMoreMessage.bind(this);
  }
  componentDidUpdate(){
    this.scrollToBottom();
  }
  handleShowMoreMessage(event){
    event.stopPropagation();
    fetchMessageHistoryMore(this.props.roomId, this.props.nextPage);
  }
  scrollToBottom = () => {
    const { chatboxBody } = this.refs;
    const scrollHeight = chatboxBody.scrollHeight;
    const height = chatboxBody.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(chatboxBody).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  render(){
    let {messageModels, user, friendProfile, nextPage, loading} = this.props;
    return (
      <div ref="chatboxBody" className="chatview">
        {
          loading ? <LoadingIcon /> : null
        }
        {
          (nextPage !== 0 && !loading) 
          ? 
          <ShowUp onClick={this.handleShowMoreMessage} />
          : 
          null
        }
        {
          (!!messageModels.length)
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
ChatView.defaultProps = {
  messageModels: []
}
const mapStateToProps = state => {
  return {
    messageModels: state.chatReducer.messageModels,
    nextPage: state.chatReducer.nextPage,
    loading: state.chatReducer.loading
  }
}
export default connect(mapStateToProps)(ChatView);