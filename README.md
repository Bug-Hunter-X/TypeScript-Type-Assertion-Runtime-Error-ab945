# TypeScript Type Assertion Runtime Error

This repository demonstrates an uncommon error in TypeScript related to type assertions.  The code compiles without errors, but throws an error at runtime. The problem stems from using a type assertion (`as number`) on a value of type `unknown` that does not actually represent a number. TypeScript's type system can't always detect these issues at compile time.

## How to reproduce
1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Run `node bug.js` to execute the compiled JavaScript.  Observe the runtime error.

## Solution
The solution involves using type guards or more careful type handling to ensure type safety at runtime. A more robust approach is shown in `bugSolution.ts`
