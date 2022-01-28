// document.write('hello world');
// alert('hello world');
// console.log('hello world');

//document.write({ name: 'hello world!' })

//alert('hello people')
// this is console statement
/**
 * hello multiline comment in java
 */
console.log("hello people!");
console.log("hello to my friend Jon");
console.log("hello people!");
console.log(" Hello susie");
console.log("hello people!");
console.log("hello boy");
document.write("hello Anna!");

//variables-store, access, modify
//declare, assignment operator, assign value
//use let and const, not var
let myname = "Sourodip Kundu";
console.log(myname);
//do not name variable as name globally cause name has special significance in JS

let address, zip, state;
address = "11E Akshay Dutta Lane";
console.log(address);
zip = 700006;
console.log(zip);
state = "WB";
console.log(state);
console.log(myname, address, zip, state);

/**
 * variable names: no keyword, caanot start with another number
 * can contain digits, letters obviously
 * case sensitive: fullName vs FullName
 * right way: camelCase or underscore
 * you can use $ dollarsign in the beginning
 * /
 */

let $instantMaggi = 2;
console.log($instantMaggi);

//difference between CONST, LET AND VAR

var value = "Some value";
let mynaame = "sourodip";
const lastName = "Kundu";
console.log(value, mynaame, lastName);
/**
 * var has been the default way
 * In 2015 ECMA Script or ES6 var was replaced with LET and CONST
 * Const cannot be re-assigned, const stands fr Constant
 */

//lastName = "Das"; CANNOT DO THIS!
mynaame = "iamsrk";
value = "8";
console.log(value, mynaame, lastName); //gives error

// "" vs ''
let subject1 = "Geography";
let subject2 = "History";
let shesaid = "I am a 'perfect'boy";
//to use words like don't can't make sure that you use it in the perfect way such that "" is distinguishable from ' '
