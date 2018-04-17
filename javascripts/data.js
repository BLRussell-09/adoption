const xhr = require('./xhr');
const dom = require('./dom');

const successF = function () {
  const animals = JSON.parse(this.responseText).pets;
  dom.domStringBuilder(animals);
};

const errorF = function () {
  console.log('There was a mistake');
};

const initializer = () => {
  xhr.startApp(successF, errorF);
};

const catSuccess = function () {
  const cats = JSON.parse(this.responseText).pets;
  dom.domCatBuilder(cats);
};

const dogSuccess = function () {
  const dogs = JSON.parse(this.responseText).pets;
  dom.domDogBuilder(dogs);
};

const dinoSuccess = function () {
  const dinos = JSON.parse(this.responseText).pets;
  dom.domDinoBuilder(dinos);
};

const catCall = function () {
  xhr.startApp(catSuccess, errorF);
};

const doggoCall = function () {
  xhr.startApp(dogSuccess, errorF);
};

const dinoCall = function () {
  xhr.startApp(dinoSuccess, errorF);
};

module.exports = {
  initializer,
  catCall,
  doggoCall,
  dinoCall,
};
