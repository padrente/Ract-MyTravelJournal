import React from "react";
import location from "../icons/location-icon.svg"
import badge from "../icons/visited.png"


function PlaceCards(props){
    return(
        <div className="card">
            {props.visited && <div className="card--badge"><img src={badge} alt="" /></div>}
            <img
                src={`../images/${props.photo}`}
                className="card--image"
                alt=""
            />
            <div className="card--info">
                <div className="card--location">
                    <img 
                        src={location} 
                        className="card--icon" 
                        alt=""
                    />
                    <p className="card--place-location">{props.location}</p>
                    <a href={props.mapLink} target="_blank" rel="noreferrer" className="card--link">View on Google Maps</a>
                </div>
                <p className="card--place-name">{props.place}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div> 
    )
}

export default PlaceCards;