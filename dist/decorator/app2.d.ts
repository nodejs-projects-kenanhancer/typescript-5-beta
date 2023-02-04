declare function loggedMethod(headMessage?: string): (originalMethod: any, context: ClassMethodDecoratorContext) => (this: any, ...args: any[]) => any;
declare function loggedMethod2(headMessage?: string): <This, Args extends any[], Return>(target: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
type HasNames = {
    names: readonly string[];
};
declare function getNamesExactly<const T extends HasNames>(arg: T): T["names"];
declare class Person {
    name: string;
    constructor(name: string);
    greet(): void;
}
declare const obj1: Person;
