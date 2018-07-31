import "./FormSearch.css";
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {userService} from "../../services/userService";
import {search} from "../../actions/searchAction";

class FormSearch extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      search: "",
      searching: false,
      onClickSearchForm: false,
      searchedUsers: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.callSearch = search.bind(this);
  }

  componentDidMount () {
    $(window).on('click', this.handleBlur);
  }

  componentWillUnmount() { 
    $(window).off('click', this.handleBlur);
  }

  handleChange = async (event)=>{
    let search = event.target.value;
    this.setState({
      search: search,
      searching: true
    })
    if (!!search.trim()){

      const response = await userService.getAllUser({search});
      if (!response.error){
        this.setState({
          searchedUsers: response.data,
          searching: false
        })
      } else {
        this.setState({
          searchedUsers: [],
          searching: false
        })
      }
    } else {
      this.setState({
        searchedUsers: [],
        searching: false
      })
    }
  }
  handleSubmit(event){
    event.preventDefault();
    
    this.setState({
      onClickSearchForm: false
    })
    let search = this.state.search;
    if (search.trim()){
      this.callSearch(search);
      this.props.history.push(`/search/${search}`);
    }
  }
  handleFocus(e) {
    e.stopPropagation();
    this.setState({
      onClickSearchForm: true
    })
  }
  handleBlur() {
    this.setState({
      onClickSearchForm: false
    })
  }
  render(){
    let {searchedUsers, searching} = this.state;
    return (
      <form className="form-inline position-relative my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <div className="input-group" onClick={(e) => e.stopPropagation()}>
          <input className="form-control form-control-md my-2 my-sm-0 form-search-input" onFocus={this.handleFocus} 
          autoComplete="off"  aria-describedby="submit-button" name="search" 
          value={this.state.search} onChange={this.handleChange}  
          type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary btn-md my-2 my-sm-0 form-search-button" id="submit-button" type="submit">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
        </div>
        {
          this.state.onClickSearchForm && 
          <div className="list-search-item mt-5" onClick={(e) => {e.stopPropagation()}}>
          {
            searchedUsers.map((user) => {
              return <Link className="search-item" key={user._id} to={`/profile/${user._id}`} >{user.name}</Link>
            })
          }
          {
            searching ? <LoadingIcon /> : null
          }
          </div>
        }
      </form>
    );
  }
}

export default FormSearch;