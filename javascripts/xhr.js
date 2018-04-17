const startApp = (iLoad, iFail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iLoad);
  myRequest.addEventListener('error', iFail);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

module.exports = {
  startApp,
};
