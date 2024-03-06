
let ask=prompt("What would you like to do?");
const todo = ["learn Java","learn C++"];
while(ask!=="quit"){
    if(ask==="list"){
        console.log("*************");
        for(let i=0;i<todo.length;i++){
            console.log(`${i} : ${todo[i]}`);
        }
        console.log("*************");
    } else if(ask==="new"){
        const newTodo=prompt("ok, what is the new todo?"); 
        todo.push(newTodo);
    }
    else if(ask==="delete"){
        let index=parseInt(prompt("ok, enter an index to delete!"));
        if(!Number.isNaN(index)){
        console.log(`${todo.splice(index,1)} deleted from to do`);
        }
        else{
        console.log("unknwon index");
        }
    
    }
    ask=prompt("What would you like to do?");
}
console.log("Ok, Quit App");








// const todo = ["ashish","paul"];
// let index=prompt("enter index of todo to remove");
// for(let i=0;i<todo.length;i++){
//     console.log(`${todo.splice(index)} removed from to do`);
   
// }
// console.log(todo);









   



// Adding elements to array

// let arr = [];
// let add = prompt("enter data");
// let i = 0;
// while (add != "q") {
//     add = prompt("enter another data");
//     arr[i] = add;
//     i++;
// }

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Adding elemetn to array




