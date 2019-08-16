import React from 'react';
import WSearch from './WSearch';
import Weather from './Weather';
import RestaurantList from './RestaurantList';

class App extends React.Component {
    state = { weatherInfo: [], restaurant_Info: []}
    

    onSearchSubmit= async(zip)=> {
   
        const WApi_Key = '46fbccf86507b640e7eefa10c686dd85';
        const Wapi_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${WApi_Key}`).catch(()=>console.log("Can't access URL" ))
  
        const response_weather = await Wapi_call.json();
        
        this.setState( {weatherInfo: response_weather} )
      

        const PApi_Key = 'AIzaSyBzwenpGYQ5zGx4G-fL9ttbznF_td47Rrk';
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const PApi_call = await fetch(proxyurl+`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+usa+${zip}&key=${PApi_Key}`).catch(()=>console.log("Can't access URL" ))
        
        const response_restaurant = await PApi_call.json();
        this.setState( {restaurant_Info: response_restaurant.results.slice(0,3)} )
        
    }

    render() {
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
               <WSearch onSubmit={this.onSearchSubmit} /> 
               <Weather weather={this.state.weatherInfo}/>
               <RestaurantList restaurants={this.state.restaurant_Info} />
            </div>
        );
    }
}


export default App;