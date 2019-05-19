import "./viewList.css";
import React, { Component } from "react";
import PersonView from "../PersonView/PersonView";
import {connect} from "react-redux";
import ShowMore from "../ShowMore/ShowMore";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {loadMore} from "../../actions/userAction";
import {getAllUser} from "../../actions/userAction";

class ViewList extends Component {
  constructor(props){
    super(props)
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  componentDidMount(){
    if (this.props.users.length < 1) {
      getAllUser();
    }
  }
  handleLoadMore(){
    loadMore(this.props.nextPage);
  }
  render() {
    let {users, listTitle, loading, nextPage} = this.props;
    const currentUserId = JSON.parse(localStorage.getItem("credentials")).user._id;
    return (
      <div className="view-list">
        <div className="view-list-title">
          <p>{listTitle}</p>
        </div>
        <div className="view-list-show">
          {
            (!!users.length)
            ?
            users.map((user, key)=>{
              if (user._id !== currentUserId){
                return <PersonView history={this.props.history} key={key} {...user}/>
              }

              return null;
            })
            : 
            (!loading ? <p className="view-list-no-user">No current users</p> : null)
          }
          {
            loading ? <LoadingIcon size="50px" /> : null
          }
          {
            (nextPage !== 0 && !loading) ? <ShowMore onClick={this.handleLoadMore} /> : null
          }
        </div>
      </div>
    );
  }
}
ViewList.defaultProps = {
  users: []
}
const mapStateToProps = state =>{
  return {
    users: state.allUserReducer.users,
    loading: state.allUserReducer.loading,
    nextPage: state.allUserReducer.nextPage
  }
}
export default connect(mapStateToProps)(ViewList);