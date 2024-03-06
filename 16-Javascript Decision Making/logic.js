// 1. Logical AND
// const password=prompt("enter password");

// if(password>=6 && (password.indexOf(" ")=-1)){
//    console.log("valid password")
// }
// else{
//     console.log("incorrect format for password");
// }


// 2. logical OR

// eg-1:
// const age=6;
// if((age>0 && age<5) || age>=65){
//     console.log("free");
// }
// else if(age>=5 && age<10){
//     console.log("$10");
// }
// else if(zge>=10 && age<65){
//     console.log("$20");
// }else{
//     console.log("Invalid age");
// }

// Output:
// free

// 3. Logical not

// eg:
// let firstname=prompt("enter your first name");
// if(!firstname){
//     console.log("try again");
// }

// 4. Switch statements

const day=2;
switch(day){
    case 1: 
        console.log("Monady");
        break;
    case 2:
        console.log("Tuesday");
        break
    case 3: 
        console.log("wednesday")
        break;
    case 4: 
        console.log("thursday");
        break;
    case 5: 
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid input")
        break;
}



