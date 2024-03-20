"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello";
greetings.toLowerCase();
console.log(greetings);
// Type inference
// number
var userId = 3314123.2;
userId.toFixed();
// boolean
var isLoggedIn = false;
// any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
