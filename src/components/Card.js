import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card(props) { 
    return (
      <div>
        <div className="card">
          <img src={props.place.imageUrl}/>
          <div className="card-content">
            <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
            <span className="location-name">{props.place.location}</span> 
            <a href={props.place.googleMapsUrl}>View on Google Maps</a>
            <h1 className="location-title">{props.place.title}</h1>
            <p className="date">{props.place.startDate} - {props.place.endDate}</p>
            <p className="description">{props.place.description}</p>
          </div>
        </div>
        <hr />
      </div>
    )
}

export default Card;
