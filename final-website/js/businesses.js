const requestURL = 'js/businesses.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject){
    const businesses = jsonObject['businesses'];
    console.table(jsonObject); // temp check output
    for(let i = 0; i < businesses.length; i++) {
        let img = document.createElement('img');
        let card = document.createElement('section');
        card.className = "dirbizcard";
        let h3 = document.createElement('h3');
        let website = document.createElement('a');
        let email = document.createElement('a');
        let br = document.createElement('br');
        
        img.setAttribute('src', businesses[i].imageurl);
        img.setAttribute('alt', businesses[i].name + ' Logo');
        website.setAttribute('href', businesses[i].website);
        website.setAttribute('alt', businesses[i].name + ' website');
        website.setAttribute('target', '_blank');
        email.setAttribute('href', 'mailto:' + businesses[i].email);
        email.setAttribute('alt', 'business email');

        h3.textContent = businesses[i].name;
        website.textContent = 'Browse Website';
        email.textContent = 'Email ' + businesses[i].name;
        
        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(website);
        card.appendChild(br);
        card.appendChild(email);
        

        document.querySelector('div.dirbizcards').appendChild(card);
    }
  })

  
