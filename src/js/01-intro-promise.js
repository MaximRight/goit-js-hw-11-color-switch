const promise = new Promise((resolve, reject) => {
  //   resolve('qweqwe');
  //   reject('xczxcz');
  const success = Math.random() > 0.3;

  setTimeout(() => {
    if (success) {
      resolve('Успех');
    }
    reject('Ошибка');
  }, 2000);
});

// console.log(promise);

let data;
console.log('date before promise', data);

// spinner.classList.add('visible');

promise
  .then(result => {
    console.log(`%c${result}`, 'color:green; font-size:20px');
    data = result;
    console.log('data inside callback', data);
  })
  .catch(error => console.log(`%c${error}`, 'color:red; font-size:20px'))
  .finally(() => {
    // spinner.classList.remove('visible');
  });

console.log('date after promise', data);

// chaining
const promiseNew = new Promise(resolve => resolve(5));

promiseNew
  .then(x => {
    console.log('x: ', x);
    return x * 2;
  })
  .then(y => {
    console.log('y: ', y);
    return y + 50;
  })
  .then(z => console.log('z: ', z))
  .catch(error => console.log(error));
