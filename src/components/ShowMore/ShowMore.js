import "./ShowMore.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const ShowMore = (props) => {
    return(
      <div className="show-more">
          <button className="btn btn-primary show-more-button" type="button" onClick={props.onClick}>
            <FontAwesomeIcon style={{marginRight: "5px"}} icon={faArrowCircleDown} size="lg" />
            Load more
          </button>
      </div>
    );
}
export default ShowMore;