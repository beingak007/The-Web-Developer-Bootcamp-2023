// 1. for loops
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// Ouput:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0

// for(let i=100 ;i>0;i--){
//     console.log(i);
// }


// 2. Nested loops
// eg-2:
// for(let i=1;i<=3;i++){
//     console.log(`Outer loop is:${i}`);
//     for(let j=1;j<=2;j++){
//         console.log(`     inner loop is:${j}`);

//     }
// }

// Ouput:
// Outer loop is:1
//     inner loop is:1
//     inner loop is:2
// Outer loop is:2
//     inner loop is:1
//     inner loop is:2
// Outer loop is:3
//     inner loop is:1
//     inner loop is:2

// =>accessing elements in nested arrays
// const colors=[["red","green","blue"],["skyblue","pink","violet"],["black","grey","white"]];
// for(let i=0;i<colors.length;i++){
//     for(let j=0;j<colors.length;j++){
//         console.log(colors[i][j]);
//     }
// }

// Output:
// red
// green
// blue
// skyblue
// pink
// violet
// black
// grey

// alter:
// const colors=[["red","green","blue"],["skyblue","pink","violet"],["black","grey","white"]];
// for(let i=0;i<colors.length;i++){
//     const row=colors[i];
//     for(let j=0;j<colors.length;j++){
//         console.log(row[j]);
//     }
// }

// Output:
// red
// green
// blue
// skyblue
// pink
// violet
// black
// grey

// 3. While loop

// eg-1:
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// Output:
// 0
// 1
// 2
// 3
// 4

// eg-2:secret code 
// const secret="open";
// let guess=prompt("enter the secret code!");
// while(guess!==secret){  //if guess is wrong get new guess
//     guess=prompt("enter the secret code!");
    
// }
// console.log(guess);

// 4. Break Statement


// let input=prompt("hello")
// while(true){
//     input=prompt(input);
//     if(input.toLowerCase()===stop){
//         break;
//     }
// }
// console.log("okay you win");

// Output:
// okay you win

// for(let i=0;i<1000;i++){
//     console.log(i);
//     if(i===5){
//         break;
//     }
// }

// Output:
// 0
// 1
// 2
// 3
// 4
// 5


// 201. Writing a Guessing Game
// enter maximum number

// let maximum=parseInt(prompt("enter mximum num "));
// // making sure that the user enter valid number
// while(!maximum){  
//     maximum=parseInt(prompt("enter valid number!"));
// }
// const targetNum=Math.floor(Math.random()*maximum)+1;


// let guess=(prompt("enter your first guess! (Type 'q' to quit)"));
// let attempts=1;

// while(parseInt(guess)!==targetNum){
//     if(guess==='q') break;
//     attempts++;
//     guess=parseInt(guess);
//     if(guess>targetNum){
//         guess=prompt("too high!enter a new guess:");
//     }else if(guess<targetNum){
//         guess=prompt("too low! enter a new guess:");
//     }else{
//         guess=prompt("invalid guess. please enter a number or 'q' to quit ");
//     }
// }

// if(guess=='q'){
//     console.log("ok you quit")
// }
// else{
//     console.log("ok, you quit!")
//     console.log(`you got it! it took you ${attempts} guesses`);
// }


// console.log(targetNum);


// 203. The Lovely For...Of Loop




// eg-1:iterating through array using for loop
// const colors=["red","white","green","blue"];
// for(let i=0;i<colors.length;i++){
//     console.log(`Visit reddit.com/r/${colors[i]}`)
// }


// Ouput:
// Visit reddit.com/r/red
// Visit reddit.com/r/white
// loops.js:182Visit reddit.com/r/green
// Visit reddit.com/r/blue

// eg-2: iterating through array using for..of loop
// ->color is varaible which collects each and every element in an arrays.

// const colors=["red","white","green","blue"];
// for(let color of colors){
//     console.log(color);
// }

// Ouput:
// red
// color
// green
// blue

// eg-3:
// const colors=[["red","green","blue"],["skyblue","pink","violet"],["black","grey","white"]];

// =>using for loop
// for(let i=0;i<colors.length;i++){
//     for(let j=0;j<colors.length;j++){
//         console.log(colors[i][j]);
//     }
// }

// =>using for..of loop

// for(let row of colors){
//     for(let elements of row){
//         console.log(elements);
//     }
// }

// Output:
// red
// green
// blue
// skyblue
// pink
// violet
// llack
// grey

// eg-4:
// for(let char of "hello"){
//     console.log(char);
// }

// output:
// h
// e
// l
// o

// 204. Iterating Over Objects
// const scores={
//     dhoni:98,
//     sachin:100,
//     raina:90,
//     kholi:80
// }


// eg:
// console.log(scores.dhoni)
// console.log(scores['dhoni'])

// =>not able to print using for...of loop
// for(let scoresPrint of scores){
//     console.log(scoresPrint)
// }

// =>using for...in  loops
// for(player in scores){
//     console.log(`${player} scores ${scores[player]}`)
// }



// Ouptu:
// dhoni scores 98
// loops.js:265 sachin scores 100
// loops.js:265 raina scores 90
// loops.js:265 kholi scores 80


// eg-3: finding average of scores

const scores={
    dhoni:25,
    sachin:50,
    raina:20,
    kholi:5
}

// let count=0,sum=0;
// for(let score of Object.values(scores) ){
    
//     sum=sum+score;
//     count++;
// }
// let avg=(sum)/count;
// console.log(avg);

// Output:
// 25

// alter:
let sum=0;
let playerNum=Object.values(scores); //->[25, 50, 20, 5]

for(let score of Object.values(scores) ){
    sum=sum+score;
}
let avg=(sum)/(playerNum.length);
console.log(avg);

// Output:
// 25















