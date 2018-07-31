import React, {PureComponent} from "react";
import SearchList from "../components/SearchList/SearchList";
import Navbar from "../components/Navbar/Navbar";
import {search} from "../actions/searchAction";

class SearchPage extends PureComponent {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    search(this.props.match.params.name);
  }
  render(){
    return(
      <div>
        <Navbar history={this.props.history}/>
        <div className="container-fluid">
          <SearchList history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default SearchPage;