// eg-1:
// function collectEggs(){
//     let totalEggs=6;
//     console.log(totalEggs);
// }
// collectEggs(); //->Output:6

// eg-2:
// function collectEggs(){
//     let totalEggs=6;
    
// }
// collectEggs(); 
// console.log(totalEggs); //Output:totalEggs is not defined

// eg-3:
// let totalEggs=0;
// function collectEggs(){
//     totalEggs=6;
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// eg-4:
// function helpme(){
//     let msg="help me to carry my backpack";
//     console.log(msg);
// }
// helpme()


// eg-5:
// function helpme(){
//     let msg="help me to carry my backpack";
// }
// helpme()
// console.log(msg); //msg is not defined.


// eg-6:
// let bird="sparrow";
// function birdwatch(){
//     let bird="king fisher";
//     console.log(bird);
// }

// birdwatch();
// console.log(bird);

// 215. Block Scope

// eg-1:
// ->here msg is scoped to if condtional Block.
// let radius=8;
// if(radius>0){
//     const pi=3.14;
//     let msg="hi";
// }

// console.log(radius);  // Output:8
// console.log(msg);     //Output: msg is not defined

// eg-2:
// ->here msg is scoped to for loop.
// for(let i=0;i<5;i++){
//     let msg="hello";
//     console.log(msg); //prints msg for 5 times
// }
// console.log(msg);     // msg is not defined

// eg-3:
// for(let i=0;i<5;i++){
//     var msg="hello";
//     console.log(msg);
// }
// console.log(msg); 

// eg-4:
// for(var i=0;i<5;i++){
//     var msg="hello";
//     console.log(msg);     //prints msg for 5 times
// }
// console.log(msg);         //Output:hello
// console.log(i);           //Output:5


// 216. Lexical Scope

// eg-1:
// function outer(){
//     let hero="Jesus";

//     function inner(){
//         let cryForHelp=`${hero}, please save me!`;
//         console.log(cryForHelp);
//     }
//     inner();
// }

// outer();


// 217. Function Expressions

// eg-1:
// function add(x,y){
//     return x+y;
// }

// add(5,5)  //Output:10

// eg-2:sum is name of varaible
const sum=function(x,y){
    return x+y;
};

sum(5,5) //Output:10



// eg-2: fuction is stored in an varaible
// const square=function(num){
//     return num*num;
// }
// square(7);

// In console ->square(5)
// 25

// 218. Higher Order Functions
// 1. Accept other fuctions as arguments.
// eg-1:
// function callTwice(func){
//     func();
//     func();
// }
// function greet(){
//     console.log("Hello");
// }

// callTwice(greet); 

// Output:
// Hello
// Hello

// eg-2:
// function callTwice(func){
//     func();
//     func();
// }
// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// callTwice(rollDie); 
// Ouput:
// 6
// 4

// 219. Returning Functions
// eg-1:
// function makeMysteryFunc(){
//     const randomNum=Math.random();
//     if(randomNum>0.5){
//         return function(){
//             console.log("you win!");
//         }
//     }
//     else{
//         return function(){
//             console.log("you lost");
//         }
//     }

// }
// // console.log(makeMysteryFunc());
//     //   or
// const mystery=makeMysteryFunc();
// console.log(mystery);  //prints the fuction


// //->calling makeMystryFunc
// mystery();   //->returning function as values
// mystery();

// Ouput:
// ƒ (){
//     console.log("you win!");
// }
// functions.js:170 you win!
// functions.js:170 you win!

// eg-2:
// ->function generating function
// ->Passing min and max value to function then it should make another fuction which tells is the value between min and max value

// ->Checking wheather number is between 50 and 100
// function isBetween(num){
//     return num>=50 && num<=100;
// }
// console.log(isBetween(51));  //Output:true
// console.log(isBetween(49));     //Output:false

// 2. Writing factory function
// factory function - fuction which makes fuction.

// 1. makeBetweenFunc accepts min and max values
// 2. it returns a function.
// 3. returned function is saved in variable.
 
// function makeBetweenFunc(min,max){
//    return function(num){
//        return num>=min && num<=max;
//    }
// }

// const isChild =makeBetweenFunc(0,18);
// console.log(isChild(40));  //Output:false
// console.log(isChild(15));  //Output:true

// const isAdult =makeBetweenFunc(19,64);
// console.log(isAdult(79)); //Output:false
// console.log(isAdult(59));  //Output:true


// 220. Defining Methods

// eg-1:
// "hello".toUpperCase() -> "HELLO"

// [1,2,5].indexOf(2) ->1


// eg-2:
// const myMath={
//     pi:3.14,
//     square:function(num){
//         return num*num
//     },
//     cube:function(num){
//         return num**3
//     }
// }

// console.log(myMath.square(2));
// console.log(myMath.cube(2));
// console.log(myMath['cube'](4));

// Ouput:
// 4
// 8
// 64

// 3. new shorthand way of adding methods
//->writing above code in shorthand way.
// const myMath={
//     pi:3.14,
//     square(num){
//         return num*num;
//     },
//     cube(num){
//         return num**3;
//     }
// }

// console.log(myMath.cube(3)) //Output:27

// 221. The Mysterious Keyword 'this'

// eg-1:
// ->this is used to get info of object into method present in that object.
// const cat={
//     name:"bot",
//     color:"grey",
//     meow(){
//         console.log(this.name);      // Output:bot
//         console.log(this.color);     // Output:grey
//         console.log(`${this.name} say's Meow Meow Meow`);
//     }
// }

// console.log(cat.meow()); //Output:Meow Meow Meow

// ->The value of this depends on the invocation context of the function it is used in.
// ->it depends on how we actually call function.

// eg-2:
// const cat={
//     name:"bot",
//     color:"grey",
//     meow(){
//         console.log("This is:",this);
//         console.log(this.name);      // Output:bot
//         console.log(this.color);     // Output:grey
//         console.log(`${this.name} say's Meow Meow Meow`);
//     }
// }

// console.log(cat.meow());  //Ouput:bot say's Meow Meow Meow


// // storing meow function to varaible.
// const meow2=cat.meow;
// console.log(meow2());  //Output:say's Meow Meow Meow
//                        // ->name of the cat is missing

// 222. Using Try/Catch
// eg-1:
// ->hello is not defined
// hello.toUpperCase();


// eg-2:
// try{
//     hello.toUpperCase();
// }catch{
//     console.log("Error!!!");
// }

// console.log("After");

// Output:
// Error!!!

// eg-3:
// function yell(msg){
//   console.log(msg.toUpperCase().repeat(3));
// }

// yell("hello"); //Output:HELLOHELLOHELLO

// ->if other input is given other than string then it results in error.

// eg-4:by using try catch to handle the situation

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch(e){
        console.log(e);
        console.log("Please pass a string next time!");
    }
    
  }
  
  yell("hello");

//   Output:
//  Please pass a string next time!












