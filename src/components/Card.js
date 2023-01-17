import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card(props) {  
    return (
        <div className="card">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{props.place.location}</span> 
          <img src={props.place.imageUrl} alt="View on Google Maps"/>
          <h1>{props.place.title}</h1>
          <p>{props.place.startDate} - {props.place.endDate}</p>
          <p>{props.place.description}</p>
          <hr />
        </div>
    )
}

export default Card;
