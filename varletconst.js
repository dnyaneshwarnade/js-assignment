var a=2;
/* The javascript variables statement is used to declare a variable and optionally we can initialize the value of that variable.
The scope of varivable declared outside the function in global.*/

console.log(a)//output 2
function variab()
{
    var a=10;
    console.log(a);//output 10
    if(true){
        var a=20;
        console.log(a);//output 20
    }
    console.log(a);//output 20
}


/*Let : The let statement declares a local variable in a block scope.
It is similar to var ,in that we can optionally initialize the variable. 
The let statement allows us to crate a variable with the scope limited to the block on which it is used.*/
function letexamp(){
    let a=10;
    let a=20;//throws syntax error
    console.log(a);

}
//The scope will be maintain with let statement


/*Const : const statement values can be assigned once and they cannot be reassigned. 
The scope of const statement works similar to let statements.*/
function constexamp(){
    const a=10;
    console.log(a);//output 10
    a=20;
    console.log(a);//throws syntax error
}


