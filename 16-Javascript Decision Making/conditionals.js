// eg-1
// console.log("before conditional");
// if(1+1==3){
//     console.log("Math still works");
// }

// console.log("After conditional");


// eg-2
// let randomNum=Math.random();

// if(randomNum<0.5){
//     console.log("your number is less than 0.5");
//     console.log(randomNum);
// }

// output:
// your number is less than 0.5
// conditionals.js:15 0.4551926801508148

// eg-3:
// let randomNum=Math.random();

// if(randomNum<0.5){
//     console.log("your number is less than 0.5");
//     console.log(randomNum);
// }

// if(randomNum>=0.5){
//     console.log("your number is greater than 0.5");
//     console.log(randomNum);
// }

// output:
// your number is greater than 0.5
// conditionals.js:32 0.8067653914212951

// 169 else if
// eg-1:
// let rating=5;

// if(rating===3){
//     console.log("Meets expectation");
// }
// else if(rating==5){
//     console.log("you are super star");
// }

// Output:
// you are super star

// eg-2:
// const age=8;
// if(age<5){
//     console.log("you are baby, you get it for free");
// }
// else if(age<10){
//     console.log("you are baby, you get it for $10");
// }
// else if(age<65){
//     console.log("you are adult, you get it for free");
// }
// else if(age>65){
//     console.log("you are senior, you get it for $10");
// }

// output:
// you are baby, you get it for $10

// eg-3:
// let num=prompt("enter num:");

// if(num>0){
//     console.log("positive number")
// }
// else if(num<0){
//     console.log("negative number")
// }
// else{
//     console.log("invalid");
// }

// 171. Nesting Conditionals


// eg-1:
// const password=prompt("please enter password");
// // ->password must be 6+ characters
// if(password.length>=6){
//   console.log("long enough password");
// }else{
//     console.log("password too short! must be 6+ characters");
// }
// // ->password cannot include space
// if(password.indexOf(' '==-1)){
//     console.log("Good job! No spaces");
// }
// else{
//     console.log("Password cannot contain spaces!");
// }

// ->using nested if
// const password=prompt("please enter password");
// // ->password must be 6+ characters
// if(password.length>=6){
//     // ->password cannot include space
//     if(password.indexOf(' ')==-1){
//         console.log("valid");
//     }
//     else{
//         console.log("Password cannot contain spaces!");
//     }
    
// }else{
//     console.log("password too short! must be 6+ characters");
// }

// 172. Truth-y & False-y Values
// const usernum=prompt("enter number");
// console.log(usernum);

// ->In console
// usernum
// ''
// -> it's an empty string.

// eg-2:

// const usernum=prompt("enter num");

// if(usernum){
//     console.log("Truthy");
// }
// else{
//     console.log("Falsy");
// }

// ->if string is given to usernum then truth block get executed.
// ->if usernum is empty-> flase block get executed.

// eg-3:
if(0){
    console.log("Truthy");
}
else{
    console.log("falsy");
}

Output:
falsy


