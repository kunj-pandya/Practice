// Add the following elements to the container using only JavaScript and the DOM methods.

// QS : a <p> with red text that says "hey I'm red!"
let para1 = document.createElement("p");
para1.innerText = "Hey, I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

// QS : an <h3> with blue text says "I'm blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

//  QS : a <div> with a balck border and pink background color with the following elements inside it:
//  - another <h1> that says "I'm in a div".
//  - a <p> that says "ME TOO!".

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);


//  QS : Create a new input and button element on the page using JavaScript only.set the text of button to "click me".
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(button);
document.querySelector("body").append(input);


// QS : add following attribute to the element:
//       - Change the placeholder value of input to "username".
//       - Change the id of button to "btn".

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// QS : Access the btn using the querySelector and button id.Change the button background color to blue and text color to white.
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// QS : Create an h1 element on the page and set its text to "DOM Practice" underlined,change its color to purple.
let newh1 = document.createElement("h1");
newh1.innerText = " DOM Practice ";
document.querySelector("body").append(newh1);
newh1.classList.add("head");