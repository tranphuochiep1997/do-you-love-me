import "./LoadingIcon.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingIcon = (props)=>{
    return(
      <div className="wrap-loading-icon">
        <FontAwesomeIcon style={{fontSize: props.size}} className="spinner-icon" icon={faSpinner} size="lg" spin />
      </div>
    ); 
}
export default LoadingIcon;
