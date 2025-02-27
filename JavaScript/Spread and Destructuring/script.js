// Spread : Expands an iterable into multiple values.
// console.log(..."kunjpandya");

// Spread with array literals.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = [...arr];
// console.log(newArr);


//  Spread with obejct literals.
const data = {
    email : "kunjpandya998@gmail.com",
    password : 1234
};

const dataCopy = {...data, id : 123};
// console.log( dataCopy);





//  Rest : Allow a function to take an indefinite number of arguments and bundle them in an array.

