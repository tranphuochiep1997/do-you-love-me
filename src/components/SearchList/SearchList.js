import "./SearchList.css";
import React, { Component } from "react";
import PersonView from "../PersonView/PersonView";
import {connect} from "react-redux";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import ShowMore from "../ShowMore/ShowMore";
import {loadMore} from "../../actions/searchAction";

class SearchList extends Component {
  constructor(props){
    super(props)
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  handleLoadMore(){
    loadMore(this.props.match.params.name, this.props.nextPage);
  }
  render() {
    let {data, searching, nextPage} = this.props;
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
          {
            (nextPage !== 0 && !searching) ? <ShowMore onClick={this.handleLoadMore} /> : null
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
    data: state.searchReducer.users,
    searching: state.searchReducer.searching,
    showMore: state.searchReducer.showMore,
    nextPage: state.searchReducer.nextPage
  }
}
export default connect(mapStateToProps)(SearchList);