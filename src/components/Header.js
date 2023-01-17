import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <FontAwesomeIcon icon={faEarthAmericas} /> 
      <h1>my travel journal.</h1>
    </div>
  );
}

export default Header;
