import React from 'react';
import './Restaurant.css'

const Restaurant =({ restaurant })=>{
    return(
        <div className="restaurant item">
            <img className="ui image" src={restaurant.icon} alt= {restaurant.nameß}/>
            <div className="content">
                <div className="header">
                {restaurant.name}
                </div>
                <div className="meta">
                    <span>{restaurant.formatted_address}</span>
                </div>
                <div className="meta">
                    <span><label>Opening Hours: </label>{restaurant.opening_hours.open_now?'Open':'Closed'}</span>
                </div>
                <div className="meta">
                    <span><label>Rating: </label><b>{restaurant.rating}</b></span>
                </div>
                <div className="meta">
                    <span><label>Rated by: </label>{restaurant.user_ratings_total}</span>
                </div>                
            </div>
        </div>
    );
}

export default Restaurant;