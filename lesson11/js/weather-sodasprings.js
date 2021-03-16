const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=790367f1eb9bb74890e1a2233f72b32f&units=imperial"


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-weather').textContent = jsObject.weather[0].main;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;
        document.getElementById('humid').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;
        const htemp = parseFloat(jsObject.main.temp_max);
        const ltemp = parseFloat(jsObject.main.temp_min);
        const avtemp = (htemp + ltemp) / 2;
        const wspeed = parseFloat(jsObject.wind.speed);
        if (avtemp > 50 || wspeed < 3) {
            let f = "N/A";
            wchill = f;
        } else {
            let f = 35.74 + 0.6215 * avtemp - 35.75 * Math.pow(wspeed, 0.16) + 0.5275 * avtemp * Math.pow(wspeed, 0.16);
            wchill = f.toFixed(1) + "&#8457;";
        }
        document.getElementById('windchill').innerHTML = wchill;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        // document.getElementById('imagesrc').textContent = imagesrc;
        // document.getElementById('icon').setAttribute('src', imagesrc);
        // document.getElementById('icon').setAttribute('alt', desc);
    });