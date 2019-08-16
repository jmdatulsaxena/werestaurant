import React from 'react';
import Restaurant from './Restaurant';

const RestaurantList =({restaurants})=>{
    const renderedRestaurants = restaurants.map((restaurant)=>{
        return <Restaurant restaurant={restaurant} key={restaurant.id} />;
    });
    if(renderedRestaurants.length>0) {
        return(
            <div style={{backgroundColor:'#003070', paddingTop: '10px',boxShadow: '5px 5px 10px grey'}}>
                <h3 style={{textAlign: 'center', textShadow: '5px 5px 10px grey', color:'#fff'}} >TOP THREE RESTAURANTS</h3>
                <div className="ui segment relaxed divided list">{ renderedRestaurants }</div>
            </div>

        ); 
    } else {
        return( 
            <div></div>
        );
    }

}

export default RestaurantList;