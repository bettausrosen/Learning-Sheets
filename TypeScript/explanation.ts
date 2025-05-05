// TypeScript Guide for Web Development & Small Apps
// Covers: Basic Syntax, Functions, Types, Interfaces, Classes, Tooling, and Framework Integration

// 1. Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
let anyType: any = 4;
let voidType: void = undefined;
let nullType: null = null;
let undefinedType: undefined = undefined;
let objectType: object = { name: "John", age: 30 };
let symbolType: symbol = Symbol("sym");

// 2. Functions

/**
 * Adds two numbers together.
 * @param x - First number
 * @param y - Second number
 * @returns The sum of x and y
 */
function addition(x: number, y: number): number {
  return x + y;
}

/**
 * Greets a user by name.
 * @param name - The name of the person to greet
 * @returns Nothing (void)
 */
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

/**
 * Throws an error with a custom message.
 * @param message - Error message to throw
 * @throws Error - Always throws an error
 */
function throwError(message: string): never {
  throw new Error(message);
}

// 3. Interfaces
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
}

const user: User = { id: 1, name: "Finn" };

// 4. Classes
class Person {
  constructor(public name: string, private age: number) {}

  /**
   * Returns a greeting string.
   * @returns A string greeting with the person's name
   */
  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

const p = new Person("Chris", 18);

// 5. Generics

/**
 * Identity function that returns the input.
 * @param arg - Any input of generic type T
 * @returns The same value as passed in
 */
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(123);
const str = identity("abc");

// 6. Enums
enum Role {
  User,
  Admin,
  SuperAdmin,
}

const myRole: Role = Role.Admin;

// 7. Type Assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

// 8. Type Aliases
type ID = string | number;
let userId: ID = 123;

// 9. Union & 10. Intersection Types
type Admin = { name: string; role: string };
type Guest = { name: string; visitCount: number };
type UserType = Admin | Guest;
type FullUser = Admin & { age: number };

// 11. Type Guards

/**
 * Type guard to check if a value is a string.
 * @param value - The value to check
 * @returns True if the value is a string, otherwise false
 */
function isString(value: any): value is string {
  return typeof value === "string";
}

/**
 * Example function showing usage of type guards.
 * @param x - A value that is either a string or a number
 * @returns Nothing
 */
function example(x: string | number) {
  if (isString(x)) console.log(x.toUpperCase());
  else console.log(x.toFixed(2));
}

// 12. Type Inference

/**
 * @param inferredString - TypeScript infers the type based on the assigned value.
 * @returns {string} - The inferred type is string.
 */
let inferredString = "Hello"; // type is string

// 13. Type Compatibility
let x: string = "hi";
let y: any = x; // string is assignable to any

// 14. Compiler Options (tsconfig.json overview)
/*
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
*/

// 15. With React
// npm install --save-dev typescript @types/react @types/react-dom
// Rename files to .tsx and use JSX + types

// 16. With Node.js
// npm install --save-dev typescript @types/node
// Use ts-node for running TS directly

// 17. With Express
// npm install express @types/express
/** Simple Express server using TypeScript.
 * @param {Request} req - The request object
 **/
import express, { Request, Response } from "express";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript with Express");
});

// 18. With MongoDB
// npm install mongodb @types/mongodb

// 19. With SQLite (via better-sqlite3 for sync or sqlite3 for async)
// npm install better-sqlite3

// 20. Optional: MySQL / PostgreSQL
// use TypeORM / Prisma for abstraction (typed ORM)

// Additional Tips:
// - Prefer interfaces for object shapes
// - Use types for unions/aliases
// - Keep tsconfig strict
// - Use ESLint + Prettier for clean code
// - Use Zod / Yup for schema validation if needed
// - Use JSDoc for documentation and type inference in JS files
