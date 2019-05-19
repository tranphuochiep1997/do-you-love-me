import React, {PureComponent} from "react";
import SearchList from "../components/SearchList/SearchList";
import Navbar from "../components/Navbar/Navbar";

class SearchPage extends PureComponent {
  render(){
    return(
      <div>
        <Navbar history={this.props.history}/>
        <div className="container-fluid">
          <SearchList {...this.props} />
        </div>
      </div>
    );
  }
}

export default SearchPage;