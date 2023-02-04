"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function loggedMethod(headMessage = "LOG:") {
    return function actualDecorator(originalMethod, context) {
        const methodName = String(context.name);
        function replacementMethod(...args) {
            console.log(`${headMessage} Entering method '${methodName}'.`);
            const result = originalMethod.call(this, ...args);
            console.log(`${headMessage} Exiting method '${methodName}'.`);
            return result;
        }
        return replacementMethod;
    };
}
function loggedMethod2(headMessage = "LOG:") {
    return function actualDecorator(target, context) {
        const methodName = String(context.name);
        function replacementMethod(...args) {
            console.log(`LOG: Entering method '${methodName}'.`);
            const result = target.call(this, ...args);
            console.log(`LOG: Exiting method '${methodName}'.`);
            return result;
        }
        return replacementMethod;
    };
}
function getNamesExactly(arg) {
    return arg.names;
}
let Person = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    return _a = class Person {
            constructor(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.name = name;
            }
            greet() {
                console.log(`Hello, my name is ${this.name}.`);
            }
        },
        (() => {
            _greet_decorators = [loggedMethod2()];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false }, null, _instanceExtraInitializers);
        })(),
        _a;
})();
const obj1 = new Person('Kenan');
obj1.greet();
//# sourceMappingURL=app2.js.map