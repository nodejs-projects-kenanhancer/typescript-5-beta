type Fruit = { kind: "apple" } | { kind: "banana" } | { kind: "orange" };

function test(fruit: Fruit) {
  switch (fruit.kind) {
    case "apple":
      break;
    case "banana":
      break;
    case "orange":
      break;
  }
}

export {};
