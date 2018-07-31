import "./ShowUp.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ShowUP = props =>{
  return(
    <div className="show-up">
      <button type="button" onClick={props.onClick}>
        <FontAwesomeIcon icon={faArrowCircleUp} size="lg" />
      </button>
    </div>
  );
}
export default ShowUP;