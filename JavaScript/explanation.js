// JavaScript Guide for Web Development & Small Apps
// Covers: Syntax, Functions, Objects, Classes, Tooling, and Framework Integration

// 1. Basic Types (JS style)
let isDone = false;
let decimal = 6;
let color = "blue";
let list = [1, 2, 3];
let tuple = ["hello", 10]; // JS doesn't support tuples natively
let anyType = 4;
let voidType = undefined;
let nullType = null;
let undefinedType = undefined;
let objectType = { name: "John", age: 30 };
let symbolType = Symbol("sym");

// 2. Functions
/**
 * Adds two numbers together.
 * @param {number} x - First number
 * @param {number} y - Second number
 * @returns {number} The sum of x and y
 */
function addition(x, y) {
  return x + y;
}

/**
 * Greets a user by name.
 * @param {string} name - The name of the person to greet
 */
function greet(name) {
  console.log(`Hello, ${name}`);
}

/**
 * Throws an error with a custom message.
 * @param {string} message - Error message to throw
 */
function throwError(message) {
  throw new Error(message);
}

// 3. Object Shapes (no interfaces in JS)
const user = { id: 1, name: "Finn" }; // optional properties via dynamic access

// 4. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * @returns {string} A string greeting with the person's name
   */
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const p = new Person("Chris", 18);

// 5. Generics via JSDoc
/**
 * Identity function that returns the input.
 * @template T
 * @param {T} arg - Any input
 * @returns {T} The same value as passed in
 */
function identity(arg) {
  return arg;
}

const num = identity(123);
const str = identity("abc");

// 6. Enums - emulate with objects
const Role = {
  User: 0,
  Admin: 1,
  SuperAdmin: 2,
};

const myRole = Role.Admin;

// 7. Type Assertions (via comments / dev tools)
let someValue = "This is a string";
let strLength = someValue.length;

// 8. Type Aliases — use JSDoc + logic
/** @typedef {(string|number)} ID */
let userId = 123;

// 9. Union & 10. Intersection Types — handled via runtime logic
const guest = { name: "Anna", visitCount: 3 };
const admin = { name: "Finn", role: "admin" };
const fullUser = { ...admin, age: 25 }; // intersection

// 11. Type Guards
/**
 * @param {*} value
 * @returns {value is string}
 */
function isString(value) {
  return typeof value === "string";
}

function example(x) {
  if (isString(x)) console.log(x.toUpperCase());
  else console.log(Number(x).toFixed(2));
}

// 12. Type Inference by runtime
let inferredString = "Hello";

// 13. Type Compatibility — not applicable but flexible
let x = "hi";
let y = x;

// 14. Tooling (jsconfig.json or tsconfig for hybrid projects)
/*
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "checkJs": true,
    "allowJs": true,
    "strict": false,
    "esModuleInterop": true
  }
}
*/

// 15. With React
// npm install react react-dom
// Babel + Webpack/Vite setup

// 16. With Node.js
// npm init -y
// node index.js / use import/export with "type": "module"

// 17. With Express
// npm install express
/** Simple Express server using JavaScript.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello JavaScript with Express");
});

// 18. With MongoDB
// npm install mongodb

// 19. With SQLite (via better-sqlite3 or sqlite3)
// npm install better-sqlite3

// 20. Optional: MySQL / PostgreSQL
// use Prisma / Sequelize / knex

// Additional Tips:
// - Use JSDoc for autocomplete and type hints
// - Keep configs minimal but readable
// - Use ESLint + Prettier for code quality
// - Use runtime schema validation (e.g., Zod / Joi / Yup)
