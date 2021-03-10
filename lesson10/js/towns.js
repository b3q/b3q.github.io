const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
// const requestURL = 'js/towns.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject){
    const towns = jsonObject['towns'];
    console.table(jsonObject); // temp check output

    for(let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
        let card = document.createElement('article');
        let cardinfo = document.createElement('div');
        cardinfo.className = "cardinfo";
        let cardimg = document.createElement('div');
        cardimg.className = "cardimg";
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = towns[i].name;
        h4.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
        img.setAttribute('src', 'img/' + towns[i].photo);

        card.appendChild(cardimg);
        card.appendChild(cardinfo);
        cardimg.appendChild(img);
        cardinfo.appendChild(h2);
        cardinfo.appendChild(h4);
        cardinfo.appendChild(year);
        cardinfo.appendChild(population);
        cardinfo.appendChild(rainfall);

        document.querySelector('div.cards').appendChild(card);
      } 
    }
  })

  
