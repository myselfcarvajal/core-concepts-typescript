"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "mario",
    email: "mario@gmail.com",
    isActive: true,
};
// function createUser({ name: string, isPaid: boolean }) { }
// Bad 
var newUser = { name: "carlos", isPaid: false, email: "h@gmail.com" };
// createUser(newUser)
// Object return an object
function createCourse() {
    return { name: "reactjs", price: 400 };
}
var myUser = {
    _id: "42342",
    name: "carlos",
    email: "h@gmail.com",
    isActive: false
};
myUser.email = "h@h.com";
