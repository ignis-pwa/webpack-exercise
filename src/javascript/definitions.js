class Animal {
  constructor(type) {
    this.type = type;
  }

  makeSound() {
    switch (this.type) {
      case "dog":
        return "Bark!";
      case "cat":
        return "Meow!";
      case "bird":
        return "Tweet!";
      default:
        console.warn(`${this.type} is not in our list.`)
        return "...";
    }
  }
}

class DogAnimal extends Animal {
  constructor() {
    super('dog');
  }
}

export {
  Animal,
  DogAnimal
};