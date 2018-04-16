const xhr = require('./xhr');
// const doggoApp = require('./xhr');
// const dinoApp = require('./xhr');
const domStringBuilder = require('./dom');
const domCatBuilder = require('./dom');

const successF = function () {
  const animals = JSON.parse(this.responseText).pets;
  console.log('success!');
  domStringBuilder.domStringBuilder(animals);
};

const errorF = function () {
  console.log('There was a mistake');
};

const initializer = () => {
  xhr.startApp(successF, errorF);
};

const catSuccess = function () {
  const cats = JSON.parse(this.responseText).pets;
  console.log(cats);
  domCatBuilder.domCatBuilder(cats);
};

const catCall = function () {
  console.log(xhr);
  xhr.kittyApp(catSuccess, errorF);
};

module.exports = {
  initializer,
  catCall,
};
