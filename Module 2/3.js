'use strict';
let dogs = [];
for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Please, enter the name of the doggy #${i + 1}`));
}
dogs.sort();
dogs.reverse();
for (let j = 0; j < dogs.length; j++) {
  document.querySelector('#target').innerHTML += `<li>${dogs[j]}</li>`;
}