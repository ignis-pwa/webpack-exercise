import {
  Animal,
  DogAnimal
} from './definitions.js';

const wrex = new DogAnimal();
const rabbit = new Animal('rabbit');

const body = document.querySelector('body');

const dogContainer = document.createElement('div');
dogContainer.appendChild(document.createTextNode(`Dogs go '${wrex.makeSound()}'`));
body.appendChild(dogContainer);

const rabbitContainer = document.createElement('div');
rabbitContainer.appendChild(document.createTextNode(`Rabbits go '${rabbit.makeSound()}'`));
body.appendChild(rabbitContainer);