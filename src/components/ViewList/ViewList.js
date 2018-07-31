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
                return <PersonView history={this.props.history} key={key} {...user}/>
            })
            : 
            <p className="view-list-no-user">No current users</p>
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