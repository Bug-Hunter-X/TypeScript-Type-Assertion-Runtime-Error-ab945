function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

console.log(add(2,3)); //5
console.log(subtract(5,2)); //3

//Uncommon Error: Type Assertion issue
let x: unknown = 5;
let y: number = x as number; //compiler will not throw error here
console.log(y); //5

let z: unknown = "hello";
let w: number = z as number; //compiler will not throw error here, but runtime will throw
console.log(w); //error