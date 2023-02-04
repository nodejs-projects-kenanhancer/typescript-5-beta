class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // @bound
//   @loggedMethod2()
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const obj1 = new Person("Kenan");

obj1.greet();

export {};
