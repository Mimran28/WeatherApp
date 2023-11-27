let weather = document.getElementById('weather-info');
let input = document.getElementById('city');
var cityName = 'karachi'
const getWeather = ()=>{
    console.log(input.value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value?input.value:cityName}&appid=2ccd2618597daba49fad603e6418709b&units=metric`)
    .then(res=> res.json())
    .then(data=>{
        weather.innerHTML = `   <h1>Temp : ${Math.round(data.main.temp)}°C</h1>
        <h1>Humidity: ${data.main.humidity}%</h1>
        <h1>Wind: ${data.wind.speed} Km/h</h1>
        `
    })
}
getWeather();
