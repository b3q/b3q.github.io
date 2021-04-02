const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5781061&appid=790367f1eb9bb74890e1a2233f72b32f&units=imperial"


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });