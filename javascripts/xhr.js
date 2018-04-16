const kittyApp = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

const dinoApp = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

const doggoApp = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

const startApp = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

module.exports = {
  startApp,
  kittyApp,
  doggoApp,
  dinoApp,
};
