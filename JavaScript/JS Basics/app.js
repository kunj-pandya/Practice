let a=10;
let b=20;

let output=`The totle Price is : ${a+b}.`;
console.log(output);


let color="yellow";


if (color==="red")
    {
    console.log("stop!");
}

else if(color==="green")
{
    console.log("go!");
}
else if(color==="yellow")
{
    console.log("slow down");

}




let age=25;

if(age>=18)
{
    console.log("you can vote");
}
else if (age<18)
{
    console.log("you can't vote");
}




let size="XL";
if(size==="XL")
{
    console.log("The price is:250");
}

else if(size==="L")
{
    console.log("The price is:200");
}
else if(size==="M"){
    console.log("The price is:100");
}
else {
    console.log("The price is:100");
}




let marks=46;

if(marks>=33){
    console.log("pass!");

    if(marks<=85)
    {
        console.log("A+");
    }
    else{
        console.log("A");
    }
}
else{
    comsole.log("Fail");
}

let mark=88;

if((marks>=33) && (marks>=80)){
    console.log("pass");
    console.log("A+");
}


let str="apple";

if((str[0]==="a") && (str.length>3))
{
    console.log("The string is a good string");
}
else(
    console.log("Not a good string")
)


let col="green";


switch(col)
{

    case "red":
    console.log("stop");
    break;

    case "green":
    console.log("go");
    break;

    case "yellow":
    console.log("slow down");
    break;


    default:
    console.log("light broken");

}


let num=4;


switch(num){
    case 1:
        console.log("mondya");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday");
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
        console.log("wrong day");
        break;

}




// let FirstName=prompt("enter your name:");
// console.log(FirstName);


let numm=50;

if(numm%10==0){
    console.log("good");
}
else{
    console.log("bed");
}



// let Name=prompt("enter Name:");
// let Age=prompt("enter age:");
// alert(`${Name} is ${Age} years Old`)

let quarter=2;

switch(quarter){
    case 1:
        console.log("january,february,march");
        break;

    case 2:
        console.log("april,may,june");
        break;

    case 3:
        console.log("july,august,september");
        break;

    case 4:
        console.log("octomber,november,december");
        break;

    default:
        console.log("wrong number");
        break;
}


let goldStr="Apple";

if((goldStr.length>=5) && (goldStr[0]=="a" || goldStr[0]=="A"))
{
    console.log("golden string");
}
else{
    console.log("bed string");
}




let num1=444;
let num2=47;
let num3=1000;


if(num1>num2){
    if(num1>num3){
    console.log("num1 is big");
    }
    else{
        console.log("num3 is big");
    }
}
else{
    if(num2>num3){
        console.log("num2 is big");
    }
    else{
        console.log("num3 is big");
    }
}



// let password=prompt("enter password");
// let newPass=password.trim();
// console.log(newPass);



// let strCase="Kunj Pandya";








let msg="     hello    ";
let newMsg=msg.trim().toUpperCase();
console.log(newMsg);



let str1="ilovecoding";
console.log(str1.slice(3,7));
console.log(str1.slice(-3));

console.log(str1.replace("love","do"));

console.log(str1.replace("o","x"));
console.log(str1);


let fruit="Mango";
console.log(fruit.repeat(10));



let Prc="help!";
let newPrc= Prc.trim().toUpperCase();
console.log(newPrc);



let newExm="apnacoollge";
console.log(newExm.slice(4).replace("l","t"));




let students=["kunj","dip","nakul","yash"];
students.push("sunny");
console.log(students);

students.pop();
console.log(students);

students.unshift("sunny");
console.log(students);


let monthss=["januray","july","march","augest"];
console.log(monthss);
console.log(monthss.shift());
console.log(monthss.shift());

monthss.unshift("june");
monthss.unshift("july");
console.log(monthss);

console.log(monthss.indexOf("july"));
console.log(monthss.indexOf("may"));
console.log(monthss.includes("july"));
console.log(monthss.includes("may"));

let primary=["red","yellow","blue"];
let secoundary=["orange","green","violat"];

console.log(primary.concat(secoundary));

console.log(secoundary.reverse());

let colors=["red","blue","green","yellow"];
// console.log(colors.slice(2));
// console.log(colors.slice(2,3));
// console.log(colors.slice(-4));


// console.log(colors.splice(3));
// console.log(colors.splice(0,1));
// console.log(colors);
console.log(colors.splice(0,1,"black","gray"));
console.log(colors);


let cars=["toyota","bmw","audi","swift","ferrari","maruti"];
cars.sort();
console.log(cars);


let monthsPrc=["january","july","march","august"];
monthsPrc.splice(0,2,"july","june");
console.log(monthsPrc);


let techno=["c","c++","javascript","python","java","c#","sql"];
console.log(techno.reverse().indexOf("javascript"));


let arr=["a","b"];

let arrcopy=arr;
console.log(arrcopy);


let tictectoe=[["x",null,"o"],[null,"x",null],["o",null,"x"]];
console.log(tictectoe);


let n=3;
let ary=[7,9,0,-2];
let ans=ary.slice(0,n);
let ans1=ary.slice(-n);
console.log(ans);
console.log(ans1);



// let stringAss=prompt("please enter a string");
// if(stringAss.length == 0)
// {
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }


let strAss="KuNjPaNdYa";
let idx=2;

if(strAss[idx]==strAss[idx].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("not a lower case");
}


// let strAss1=prompt("enter a string");
// console.log(`orignal string=${strAss1}`);
// console.log(`after trim=${strAss1.trim()}`);


let arrAss=["hello","a",23,65,99,-6];
let item=33;

if(arrAss.indexOf(item) != -1 ){
    console.log("elemenmt exists");
}
else{
    console.log("element dosen't exists");
}


// for(i=1;i<=5;i++){
//     console.log(i);
// }

for(i=1;i<=15;i+=2){
    console.log(i);
}
for(j=2;j<=15;j+=2){
    console.log(j);
}
for(k=15;k>=1;k-=2){
    console.log(k);
}

// let mulTable=prompt("enter number for multiplection table");
// mulTable=parseInt(mulTable);
// for(x=mulTable;x<=mulTable*10;x+=mulTable){
//     console.log(x);
// }


let l=15;
while (l<=20){
    console.log(l);
    l++;
}


// let favMovie="thor";
// let guess=prompt("guess the name of fav movie");
// while((guess!=favMovie) && (guess!="quit")){
//     guess=prompt(" wrong,try one more time");
// }

// if(guess==favMovie){
//     console.log("you are right",favMovie);
// }

// let favMovie="thor";
// let guess=prompt("guess the name of fav movie");
// while(guess!=favMovie){
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
//     guess=prompt(" wrong,try one more time");
// }

// if(guess==favMovie){
//     console.log("you are right",favMovie);
// }

let fruits=["mango","apple","bannana","litchi","orange"];
for(i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

let heros=[["ironman","spiderman","thor"],["wonder woman","superman","flash"]];

for(p=0;p<heros.length;p++){
    console.log(p,heros[p],heros[p].length);
    for(q=0;q<heros[p].length;q++){
        console.log(`q=${q},${heros[p][q]}`);
    }
}


let student=[["kunj",78],["nakul",89],["dhruv",90]];
for(l=0;l<student.length;l++){
    console.log(`info of student #${l}`);
    for(m=0;m<student[l].length;m++){
        console.log(student[l][m]);
    }
}

// To Do App 


let  todo= [];
let req = prompt("Please enter your choice");


while(true){
    if( req == "quit"){
        console.log("Quitting App");
        break;
    }

    if( req == "list"){
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
    }
    else if( req == "add" ){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if( req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task is deleted")
    }
    req = prompt("Please enyer your choice");
}