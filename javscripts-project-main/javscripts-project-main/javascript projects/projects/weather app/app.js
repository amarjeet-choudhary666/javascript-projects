const apiurl = 'https://api.weatherapi.com/v1/current.json?key=e7591c1925c0441aabf113907240307&q=';

const searchbox = document.querySelector('.searchbar input');
const searchbtn = document.querySelector('.searchbar button') ;
const weathericon = document.querySelector('.weather-icon')

///----creating async fetch function for getting the and data from api 

async function checkweather(city){
const response = await fetch(apiurl + city);
let data = await response.json();

console.log(data);


///---- adding values to innerhtml as per api

document.querySelector('.weather-icon');
document.querySelector('.celcius').innerHTML = Math.round(data.current.temp_c) + '°C';
document.querySelector('.city').innerHTML = data.location.name;
document.querySelector('.humidity').innerHTML = data.current.humidity + '%';
document.querySelector('.wind').innerHTML = data.current.wind_kph + 'km/h';




///------adding images with if else condition as per weather 

if (data.current.condition.text === 'Sunny') {
    weathericon.src = "images/images/clear.png"
}else if(data.current.condition.text === 'Light rain'){
    weathericon.src = "images/images/drizzle.png"
}else if(data.current.condition.text === 'Rain'){
    weathericon.src = "images/images/rain.png"
}else if(data.current.condition.text === 'Mist'){
    weathericon.src = "images/images/mist.png"
}else if(data.current.condition.text === 'Partly cloudy'){
    weathericon.src = "images/images/clouds.png"
}else if(data.current.condition.text === 'Cloudy'){
    weathericon.src = "images/images/clouds.png"
}else if (data.current.condition.text === 'Snow') {
    weathericon.src = "images/images/snow.png"
}else{
    weathericon.src = "images/images/clouds.png"
}
}

///----- adding event listner to add the city in api to fetch the api

searchbtn.addEventListener("click", (e) => {
    checkweather(searchbox.value);
    searchbox.value = '';
});

    



