const xhr = require('./xhr');
const dom = require('./dom');

const successF = function () {
  const animals = JSON.parse(this.responseText).pets;
  console.log('success!');
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
  console.log('you made it to cats');
  console.log(cats);
  dom.domCatBuilder(cats);
};

const dogSuccess = function () {
  const dogs = JSON.parse(this.responseText).pets;
  console.log('you made it to dogs');
  dom.domDogBuilder(dogs);
};

const dinoSuccess = function () {
  const dinos = JSON.parse(this.responseText).pets;
  console.log('you made it to dinos');
  dom.domDinoBuilder(dinos);
};

const catCall = function () {
  console.log('you made it to cat call');
  xhr.startApp(catSuccess, errorF);
};

const doggoCall = function () {
  console.log('you made it to cat call');
  xhr.startApp(dogSuccess, errorF);
};

const dinoCall = function () {
  console.log('you made it to cat call');
  xhr.startApp(dinoSuccess, errorF);
};

module.exports = {
  initializer,
  catCall,
  doggoCall,
  dinoCall,
};
