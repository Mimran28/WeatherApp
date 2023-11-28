let weather = document.getElementById('weather-info');
let input = document.getElementById('city');
let city = document.getElementById('cityName')
let temp = document.getElementById('temp')
let humid = document.getElementById('humid')
let speed = document.getElementById('speed')
var cityName = 'karachi'
const getWeather = ()=>{
    console.log(input.value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value?input.value:cityName}&appid=2ccd2618597daba49fad603e6418709b&units=metric`)
    .then(res=> res.json())
    .then(data=>{
        // weather.innerHTML = `   <h1 class="headings">Temp : ${Math.round(data.main.temp)}°C</h1>
        // <h1 class="headings">Humidity: ${data.main.humidity}%</h1>
        // <h1 class="headings">Wind: ${data.wind.speed} Km/h</h1>
        // `
        city.innerHTML = input.value? input.value.toUpperCase():'KARACHI'
        temp.innerHTML = Math.round(data.main.temp)+'°C';
        humid.innerHTML = data.main.humidity + " %";
       speed.innerHTML = data.wind.speed+' Km/h';
    })
}
getWeather();
