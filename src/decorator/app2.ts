function loggedMethod(headMessage = "LOG:") {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
      const methodName = String(context.name);

      function replacementMethod(this: any, ...args: any[]) {
          console.log(`${headMessage} Entering method '${methodName}'.`)
          const result = originalMethod.call(this, ...args);
          console.log(`${headMessage} Exiting method '${methodName}'.`)
          return result;
      }

      
      return replacementMethod;
  }
}

function loggedMethod2(headMessage = "LOG:"){
  return function actualDecorator<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
  ) {
    const methodName = String(context.name);


    function replacementMethod(this: This, ...args: Args): Return {
        console.log(`LOG: Entering method '${methodName}'.`)
        const result = target.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`)
        return result;
    }

    return replacementMethod;
  }
}


// function bound<This, Args extends any[], Return>(originalMethod: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
//   const methodName = context.name;
//   if (context.private) {
//       throw new Error(`'bound' cannot decorate private properties like ${methodName as string}.`);
//   }
//   context.addInitializer(function (this) {
//       this[methodName] = this[methodName].bind(this);
//   });
// }



type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
    return arg.names;
}



class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // @bound
  @loggedMethod2()
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const obj1 = new Person('Kenan');

obj1.greet();

// export {};
