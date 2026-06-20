
const myButton = document.getElementById("myButton");

const result = document.getElementById("Result");

myButton.onclick =    async function getWeather() {
    const city = document.getElementById("input1").value;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=205a9394b97ab05e875a92d14e40b27f&units=metric`)
    
    const data = await response.json();
    console.log(data);
    result.innerHTML = `
<h2>${data.name}</h2>
<p>🌡 Temperature: ${data.main.temp}°C</p>
<p>🤔 Feels Like: ${data.main.feels_like}°C</p>
<p>☁ Weather: ${data.weather[0].description}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
`;
    } catch (error) {
        result.innerHTML = "City Not Found";
    }
     
   }
   
