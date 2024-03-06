// 201. Writing a Guessing Game
// enter maximum number

let maximum=parseInt(prompt("enter mximum num "));
// making sure that the user enter valid number
while(!maximum){  
    maximum=parseInt(prompt("enter valid number!"));
}
const targetNum=Math.floor(Math.random()*maximum)+1;


let guess=(prompt("enter your first guess! (Type 'q' to quit)"));
let attempts=1;

while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    attempts++;
    guess=parseInt(guess);
    if(guess>targetNum){
        guess=prompt("too high!enter a new guess:");
    }else if(guess<targetNum){
        guess=prompt("too low! enter a new guess:");
    }else{
        guess=prompt("invalid guess. please enter a number or 'q' to quit ");
    }
}

if(guess=='q'){
    console.log("ok you quit")
}
else{
    console.log("ok, you quit!")
    console.log(`you got it! it took you ${attempts} guesses`);
}


console.log(targetNum);
