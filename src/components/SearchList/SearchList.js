import "./SearchList.css";
import React, { Component } from "react";
import PersonView from "../PersonView/PersonView";
import {connect} from "react-redux";
import LoadingIcon from "../LoadingIcon/LoadingIcon";


class SearchList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let {data, userId, searching} = this.props;
    return (
      <div className="search-list">
        <div className="search-list-title">
          <p>Search Result</p>
        </div>
        <div className="search-list-show">
          {
            (!!data.length)
            ?
            data.map((element, key)=>{
              return <PersonView history={this.props.history} key={key} {...element}/>
            })
            : 
            <p className="search-no-user">No user found out!</p>
          }
          {
            searching ? <LoadingIcon size="50px" /> : null
          }
        </div>
      </div>
    );
  }
}
SearchList.defaultProps = {
  data: []
}
const mapStateToProps = state =>{
  return {
    userId: state.userReducer.user._id,
    data: state.searchReducer.users,
    searching: state.searchReducer.searching
  }
}
export default connect(mapStateToProps)(SearchList);