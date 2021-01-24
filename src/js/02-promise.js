//callback functions, old-school

// const fetchUser = (userName, onSuccess, onError) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.3;
//     if (success) {
//       const user = { name: userName, age: 26, posts: 74 };
//       onSuccess(user);
//       return;
//     }

//     const error = 'Произошла ошибка :(';
//     onError(error);
//   }, 1000);
// };

// fetchUser('Mango', onFetchUserSuccess, onFetchUserError);

//promise functions, new school

const fetchUser = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (success) {
        const user = { name: userName, age: 26, posts: 74 };
        resolve(user);
      }

      const error = 'Произошла ошибка :(';
      reject(error);
    }, 1000);
  });
};

fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

function onFetchUserSuccess(user) {
  console.log(user);
}

function onFetchUserError(error) {
  console.log(`%c ${error}`, 'color: red; font-size: 16px;');
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(console.log)
  .catch(console.log);

const fetchToDo = id => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
    res.json(),
  );
};

fetchToDo(5)
  .then(todo => console.log(todo))
  .catch(console.log);

// const makePromise = delay => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// };

// makePromise(4000).then(console.log);

// makePromise(2000).then(console.log);

// makePromise(5000).then(console.log);

//Callback functions

// const log = value => console.log(value);

// const add = (a, b, callback) => callback(a + b);

// add(5, 10, log);

//Promise!!!

const log = value => console.log(value);

const add = (a, b) => Promise.resolve(a + b);

add(5, 10).then(log);
