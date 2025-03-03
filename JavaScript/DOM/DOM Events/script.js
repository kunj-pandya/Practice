//  Events are signls that somthing has occurred.(user inputs / actions)


// onclick : when an element is clicked.
// onmouseenter : when mouse enters an element.


// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("button was clicked");
// }


// function sayHello () {
//     alert("Hello!");
// }
// btn.onclick = sayHello;



//  Numbers of buttons.
let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() {  //onmouseenter
        console.log("you entered a button"); 
    };
}

function sayHello() {
        alert("Hello!");
    }
