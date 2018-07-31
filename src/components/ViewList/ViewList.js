import "./viewList.css";
import React, { Component } from "react";
import PersonView from "../PersonView/PersonView";
import {connect} from "react-redux";

class ViewList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let {data, listTitle, userId} = this.props;
    return (
      <div className="view-list">
        <div className="view-list-title">
          <p>{listTitle}</p>
        </div>
        <div className="view-list-show">
          {
            (!!data.length)
            ?
            data.map((element, key)=>{
              if (element._id !== userId){
                return <PersonView history={this.props.history} key={key} {...element}/>
              }
            })
            : 
            <span>...</span>
          }
        </div>
      </div>
    );
  }
}
ViewList.defaultProps = {
  data: []
}
const mapStateToProps = state =>{
  return {
    userId: state.userReducer.user._id
  }
}
export default connect(mapStateToProps)(ViewList);