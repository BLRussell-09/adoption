const buttonEvents = require('./events');

const printToDom = (domString, divId) => {
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
  buttonEvents();
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
  });
  printToDom(domString, 'animal-holder');
};

module.exports = {
  domStringBuilder,
  domCatBuilder,
};
