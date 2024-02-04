const WEATHER_API_KEY = '80ef0e44f68fabc5c451e367d6073cdc';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');

            city.innerHTML = data.name;
            console.log(data);
            weather.innerHTML = `${data.weather[0].main} / ${Math.round(data.main.temp - 273.15)}`;
        })
        .catch(console.log);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);