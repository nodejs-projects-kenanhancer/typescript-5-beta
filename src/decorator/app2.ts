type ClassMethodDecorator = <This extends Record<string, any>, Args extends any[], Return>(originalMethod: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, typeof originalMethod>) => typeof originalMethod | void;

function loggedMethod(headMessage = "LOG:"){
  return function actualDecorator<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
  ) {
    const methodName = String(context.name);

    function replacementMethod(this: This, ...args: Args): Return {
        console.log(`LOG: Entering method '${methodName}'.`)
        const result = originalMethod.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`)
        return result;
    }

    return replacementMethod;
  }
}


const bound: ClassMethodDecorator = (originalMethod, context) =>{
  type This = ThisParameterType<typeof originalMethod>;

  const methodName = context.name as keyof This;
  
  if (context.private) {
      throw new Error(`'bound' cannot decorate private properties like ${methodName as string}.`);
  }

  context.addInitializer(function (this) {
      this[methodName] = this[methodName].bind(this);
  });
};

const trace: ClassMethodDecorator = (originalMethod, context)=>{

  const methodName = String(context.name);

  return function traceDecorator(this, ...args){

    console.log(`CALL ${methodName}: ${JSON.stringify(args)}`);

    const result = originalMethod.call(this, ...args);

    console.log(`=> ${JSON.stringify(result)}`);

    return result;
  }
};

type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
    return arg.names;
}


class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @trace
  @bound
  @loggedMethod()
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const obj1 = new Person('Kenan');

obj1.greet();

export {};