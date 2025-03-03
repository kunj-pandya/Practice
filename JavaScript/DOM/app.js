
// selecting using class name. 
// Return the element as an HTML collection or empty collection(if not found).

// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++){
//     console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
// }

// changing images using Class name.
// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
    // }


//  Query Selector 
//  Query Selector : Allows us use any CSS seletor.

// document.querySelector("p"); 
//  selects first p element

// document.querySelector("#myId"); 
//  selects first element with id = myId.

// document.querySelector(".myClass"); 
//  selects first element with class = myClass.

// document.querySelectorAll("p");
// selects all p elements.

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

//  Selects all elements with class = oldImg
//  console.dir(document.querySelectorAll(".oldImg"));

// Nesting.
// console.dir(document.querySelector("div a"));



//  Manipulating style(with style attribute).
// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "purple";
// }

// using for of loop
// let links = document.querySelectorAll(".box a");
// for (link of links) {
//     link.style.color = "green";   //inline style
// }


// Manipulating styleusing classList 
// obj.classList
// classList.add() to add new classes.
// classList.remove() to remove classes.
// classList.contains() to check if class exists.
// classList.toggle() to toggle between add & remove.

