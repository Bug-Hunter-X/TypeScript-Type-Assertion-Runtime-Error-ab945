function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

console.log(add(2,3)); //5
console.log(subtract(5,2)); //3

//Solution: Using Type Guard
function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

let x: unknown = 5;
if (isNumber(x)) {
  let y: number = x; // No type assertion needed, type safety ensured
  console.log(y); //5
} else {
  console.log('x is not a number');
}

let z: unknown = "hello";
if (isNumber(z)){
  let w: number = z; //will not execute this line because of the type guard
  console.log(w)
} else {
  console.log('z is not a number')//This line will execute
}

//alternative solution using typeof
let p:unknown = 6
if(typeof p === 'number'){
  let q: number = p;
  console.log(q);
}

let r:unknown = "hello";
if(typeof r === 'number'){
  let s:number = r;
  console.log(s);
} else {
  console.log("r is not a number");
}