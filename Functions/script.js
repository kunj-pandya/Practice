
function hello() {
    console.log("hello");
}

// hello();

// create a Function to roll a dice 7 always display the value of the dice(1 to 6).
function dice() {
    let random = Math.floor(Math.random() * 6)+ 1;
    console.log(random);
}

// dice();

// Functions with Arguments

// single Argument
function printName(name) {
    console.log(name);
}

// printName("kunj");

// double Argument
function printInfo(name , age) {
    console.log(`${name}'s age is ${age}`);
}

// printInfo("kunj" , 23);
// printInfo("Abc");

// Create a funtion that give us the average of 3 numbers
function calAvg( a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

// calAvg(56 ,43 , 65);

// Create a function that prints the multiplication tbale of a number.

function mulTable(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

// mulTable(14);

//  Return  : Return keyword is used to return some value from the function
function printAvg( a, b, c) {
    let avg = (a+b+c)/3;
    return avg;
}

// console.log(printAvg(55,66,76));


// Create a function that return the sum of number from 1 to n.
function getSum (n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}

// console.log(getSum(50));



