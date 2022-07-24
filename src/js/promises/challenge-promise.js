const cows = 19;

const countCows = new Promise((resolve, reject) => {
  if (cows >= 15) {
    resolve('Cumplimos');
  } else {
    reject('No llegamos');
  }
});
countCows
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log('Terminado'));
