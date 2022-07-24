const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Good');
        }, 2000)
      : reject(new Error('Bad'));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello');
};

console.log('Before');
anotherFn();
console.log('After');
