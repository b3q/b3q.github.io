const requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=5781794&appid=790367f1eb9bb74890e1a2233f72b32f&units=imperial";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const days = jsObject['list'];
        for(let i = 0; i < 24; i++) {
            let pattern = "18:00:00";
            let patfound = days[i].dt_txt;
            if (patfound.includes(pattern)) {
                let daycard = document.createElement('div');
                daycard.className = "daycard";
                let daytitle = document.createElement('div');
                daytitle.className = "daytitle";
                let datetime = days[i].dt_txt;
                let date = datetime.substring(0, 10);
                let utc = new Date(date).toUTCString();
                let dayofweek = utc.substring(0, 3);
                let dateofweek = utc.substring(0, 12);
                daytitle.textContent = dateofweek;
                let img = document.createElement('img');
                img.setAttribute('src', `https://openweathermap.org/img/wn/${days[i].weather[0].icon}.png`);
                img.setAttribute('alt', "forecast image");
                let daytemp = document.createElement('div');
                daytemp.textContent = `${days[i].main.temp}°F`;
                daytemp.className = "daytemp";

                daycard.appendChild(daytitle);
                daycard.appendChild(img);
                daycard.appendChild(daytemp);

                document.querySelector('section.threeday-section').appendChild(daycard);
            }
        }

    });