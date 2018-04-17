const data = require('./data');

const catButton = document.getElementById('cats');
const dogButton = document.getElementById('dogs');
const dinoButton = document.getElementById('dinos');
const resetButton = document.getElementById('reset');

const showCats = () => {
  console.log('sup');
  data.catCall();
};

const showDogs = () => {
  console.log('sup');
  data.doggoCall();
};

const showDinos = () => {
  console.log('sup');
  data.dinoCall();
};

const resetPage = () => {
  console.log('reset button');
  data.initializer();
};

const buttonEvents = () => {
  catButton.addEventListener('click', showCats);
  dogButton.addEventListener('click', showDogs);
  dinoButton.addEventListener('click', showDinos);
  resetButton.addEventListener('click', resetPage);
};

module.exports = buttonEvents;
