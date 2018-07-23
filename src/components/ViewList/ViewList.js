import "./viewList.css";
import React, { Component } from "react";
import PersonView from "../PersonView/PersonView";

class ViewList extends Component {

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
              let {picture, name, status} = element;
              return <PersonView key={key} 
                picture = {picture}
                name={name}
                status={status}/>
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