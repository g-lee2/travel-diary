import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon className="earth-icon" icon={faEarthAmericas} /> 
      <h1 className="travel-title">my travel journal.</h1>
    </div>
  );
}

export default Header;
