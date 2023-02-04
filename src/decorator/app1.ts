class Greeting {
  constructor(private name: string) {}

  sayHello() {
    console.log("LOG: Entering method");

    console.log(`Hello, my name is ${this.name}`);

    console.log("LOG: Existing method");
  }
}

export {};
