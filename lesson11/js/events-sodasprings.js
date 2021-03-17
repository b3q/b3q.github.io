const requestEvents = 'https://byui-cit230.github.io/weather/data/towndata.json';
// const requestURL = 'js/towns.json';

fetch(requestEvents)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject){
    const towns = jsonObject['towns'];
    console.table(jsonObject); // temp check output

    for(let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {
        let card = document.createElement('div');
        card.className = "eventCard";
        let cardTitle = document.createElement('h2');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        cardTitle.textContent = "Upcoming Events for " + towns[i].name + ":";
        event1.textContent = towns[i].events[0];
        event2.textContent = towns[i].events[1];
        event3.textContent = towns[i].events[2];
        card.appendChild(cardTitle);
        card.appendChild(event1);
        card.appendChild(event2);
        card.appendChild(event3);

        document.querySelector('div.events').appendChild(card);
      } 
    }
  })

  
