const data = require('./data');
// const catCall = require('./data');
const doggoApp = require('./xhr');
const dinoApp = require('./xhr');

const catButton = document.getElementById('cats');
const dogButton = document.getElementById('dogs');
const dinoButton = document.getElementById('dinos');

const showCats = () => {
  console.log('sup');
  data.catCall();
};

const showDogs = () => {
  doggoApp();
};

const showDinos = () => {
  dinoApp();
};

const buttonEvents = () => {
  catButton.addEventListener('click', showCats);
  dogButton.addEventListener('click', showDogs);
  dinoButton.addEventListener('click', showDinos);
};

module.exports = buttonEvents;
