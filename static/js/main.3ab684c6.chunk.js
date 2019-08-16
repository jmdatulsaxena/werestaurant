(window["webpackJsonpweather-restaurants"]=window["webpackJsonpweather-restaurants"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=a(6),i=a.n(s),o=a(9),u=a(1),m=a(2),p=a(4),h=a(3),d=a(5),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={zip:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.zip)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Enter Zip Code"),r.a.createElement("input",{type:"text",maxLength:"5",pattern:"[0-9]{5}",required:!0,value:this.state.zip,onChange:function(t){return e.setState({zip:t.target.value})}}))))}}]),t}(r.a.Component);var E=function(e){var t,a=e.weather,n=null,c=null,l=null;for(var s in a.main)"temp"===s&&(n=a.main[s]+" \xbaF",c="Current temperature: ");if(!n)return r.a.createElement("div",null);for(var i in a.weather)"0"===i&&(l="Weather condition: ",t=a.weather[i].description.replace(/[a-z]/i,function(e){return e.toUpperCase()}));return r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},a.name.toUpperCase()+" WEATHER FORECAST"),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("label",{style:{fontWeight:"bold"}},c),n),r.a.createElement("div",null,r.a.createElement("label",{style:{fontWeight:"bold"}},l),t))},b=(a(16),function(e){var t=e.restaurant;return r.a.createElement("div",{className:"restaurant item"},r.a.createElement("img",{className:"ui image",src:t.icon,alt:t.name\u00df}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.name),r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,t.formatted_address)),r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,r.a.createElement("label",null,"Opening Hours: "),t.opening_hours.open_now?"Open":"Closed")),r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,r.a.createElement("label",null,"Rating: "),r.a.createElement("b",null,t.rating))),r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,r.a.createElement("label",null,"Rated by: "),t.user_ratings_total))))}),v=function(e){var t=e.restaurants.map(function(e){return r.a.createElement(b,{restaurant:e,key:e.id})});return t.length>0?r.a.createElement("div",{style:{backgroundColor:"#003070",paddingTop:"10px",boxShadow:"5px 5px 10px grey"}},r.a.createElement("h3",{style:{textAlign:"center",textShadow:"5px 5px 10px grey",color:"#fff"}},"TOP THREE RESTAURANTS"),r.a.createElement("div",{className:"ui segment relaxed divided list"},t)):r.a.createElement("div",null)},g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={weatherInfo:[],restaurant_Info:[]},a.onSearchSubmit=function(){var e=Object(o.a)(i.a.mark(function e(t){var n,r,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"46fbccf86507b640e7eefa10c686dd85",e.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?zip=".concat(t,",us&units=imperial&appid=").concat("46fbccf86507b640e7eefa10c686dd85")).catch(function(){return console.log("Can't access URL")});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,a.setState({weatherInfo:r}),"AIzaSyBzwenpGYQ5zGx4G-fL9ttbznF_td47Rrk","https://cors-anywhere.herokuapp.com/",e.next=12,fetch("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+usa+".concat(t,"&key=").concat("AIzaSyBzwenpGYQ5zGx4G-fL9ttbznF_td47Rrk")).catch(function(){return console.log("Can't access URL")});case 12:return c=e.sent,e.next=15,c.json();case 15:l=e.sent,a.setState({restaurant_Info:l.results.slice(0,3)});case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(f,{onSubmit:this.onSearchSubmit}),r.a.createElement(E,{weather:this.state.weatherInfo}),r.a.createElement(v,{restaurants:this.state.restaurant_Info}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3ab684c6.chunk.js.map