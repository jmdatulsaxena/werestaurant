import React from 'react';

function toProperCase(string){
    return string.replace(/[a-z]/i, (x)=>{return x.toUpperCase()})
}

const Weather = ({ weather }) => {

    var temp=null;
    var condition;
    var tempLabel=null;
    var conditionLabel=null;
    for(let x in weather.main){
        if(x==='temp'){
            temp = weather.main[x] + ' ºF'
            tempLabel="Current temperature: "
        }
    }
    if(!temp) {
        return <div></div>
    }
    for(let y in weather.weather){
        if(y==='0') {
            conditionLabel="Weather condition: "
            condition=toProperCase(weather.weather[y]['description']);
        }
    }
    return( 
            <div className="ui segment">
                <h4 className="ui header">
                {weather.name.toUpperCase() + " WEATHER FORECAST"}
                </h4>
                <hr />
                <div><label style={{fontWeight:'bold'}}>{tempLabel}</label>{temp}</div> 
                <div><label style={{fontWeight:'bold'}}>{conditionLabel}</label>{condition}</div> 
            </div>
    );
}

export default Weather;