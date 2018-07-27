import "./viewList.css";
import React, { Component } from "react";
import PersonView from "../PersonView/PersonView";

class ViewList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let {data, listTitle} = this.props;
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
              return <PersonView history={this.props.history} key={key} {...element}/>
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

export default ViewList;