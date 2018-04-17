const data = require('./data');

const catButton = document.getElementById('cats');
const dogButton = document.getElementById('dogs');
const dinoButton = document.getElementById('dinos');
const resetButton = document.getElementById('reset');

const showCats = () => {
  data.catCall();
};

const showDogs = () => {
  data.doggoCall();
};

const showDinos = () => {
  data.dinoCall();
};

const resetPage = () => {
  data.initializer();
};

const buttonEvents = () => {
  catButton.addEventListener('click', showCats);
  dogButton.addEventListener('click', showDogs);
  dinoButton.addEventListener('click', showDinos);
  resetButton.addEventListener('click', resetPage);
};

module.exports = buttonEvents;
