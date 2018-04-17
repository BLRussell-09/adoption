const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = '';
  document.getElementById(divId).innerHTML += domString;
};

const domStringBuilder = (animals) => {
  let domString = '';
  animals.forEach(element => {
    if (element.type === 'cat')
    {
      domString += `<div class="col-md-3 animal-card cat">`;
    }
    else
    {
      domString += `<div class="col-md-3 animal-card">`;
    }
    domString += `<h2 class="well">${element.name}</h2>`;
    domString += `<img src="${element.imageUrl}">`;
    domString += `<p>${element.color}</p>`;
    domString += `<p>${element.specialSkill}</p>`;
    domString += `<p>${element.type}</p>`;
    domString += `</div>`;
  });
  printToDom(domString, 'animal-holder');
};

const domCatBuilder = (cats) => {
  let domString = '';
  cats.forEach(element => {
    if (element.type === 'cat')
    {
      domString += `<div class="col-md-3 animal-card cat">`;
      domString += `<h2 class="well">${element.name}</h2>`;
      domString += `<img src="${element.imageUrl}">`;
      domString += `<p>${element.color}</p>`;
      domString += `<p>${element.specialSkill}</p>`;
      domString += `<p>${element.type}</p>`;
      domString += `</div>`;
    };
    printToDom(domString, 'animal-holder');
  });
};

const domDogBuilder = (dogs) => {
  let domString = '';
  dogs.forEach(element => {
    if (element.type === 'dog')
    {
      domString += `<div class="col-md-3 animal-card dog">`;
      domString += `<h2 class="well">${element.name}</h2>`;
      domString += `<img src="${element.imageUrl}">`;
      domString += `<p>${element.color}</p>`;
      domString += `<p>${element.specialSkill}</p>`;
      domString += `<p>${element.type}</p>`;
      domString += `</div>`;
    };
    printToDom(domString, 'animal-holder');
  });
};

const domDinoBuilder = (dinos) => {
  let domString = '';
  dinos.forEach(element => {
    if (element.type === 'dino')
    {
      domString += `<div class="col-md-3 animal-card cat">`;
      domString += `<h2 class="well">${element.name}</h2>`;
      domString += `<img src="${element.imageUrl}">`;
      domString += `<p>${element.color}</p>`;
      domString += `<p>${element.specialSkill}</p>`;
      domString += `<p>${element.type}</p>`;
      domString += `</div>`;
    };
    printToDom(domString, 'animal-holder');
  });
};

module.exports = {
  domStringBuilder,
  domCatBuilder,
  domDogBuilder,
  domDinoBuilder,
};
