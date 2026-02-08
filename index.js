// import {upperCase, reverseStr, vowelsCount} from "./ex2/stringUtils.js";  //importing the functions from stringUtils.js
// console.log(vowelsCount("hello madhav"));
// console.log(upperCase("hello"));
// console.log(reverseStr("hello"));

import {createTask, readTask, updateTask} from "./ex4/todo.js";  //importing the functions from todo.js
console.log(createTask("madhav sharma",["task1","task2"])); 
console.log(readTask("madhav"));  
console.log(updateTask("madhav sharma",["nodejs learn","javascript"]));  
console.log(deleteTask("madhav"));  