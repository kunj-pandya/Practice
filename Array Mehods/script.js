//  Array Methods :- higher order functions (takes call back as input).
//  - forEach
//  - map
//  - filter
//  - some
//  - every
//  - reduce



//  forEach
let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    // console.log(el);
};
// arr.forEach(print); 
  

//  forEach with objects
let arr1 = [{
     name: "kunj",
     marks: "76"
},
{
    name: "parth",
    marks: "86"
},
{
    name: "nakul",
    marks: "77"
}];

arr1.forEach((student) => {
    // console.log(student);

})



// map 
// map : store the retun value as new array(new array size is same to old array).
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el*2;
});



//  Filter 
//  Filter : returns new array.
let nums = [10, 14, 13, 16, 5, 9, 32, 11];

let ans = nums.filter((el) => {
    // return el % 2 == 0;
});
// console.log(ans);


//  Every 
//  Every : its return true or false.(retuns ture if every element oa array gives true for some function,Else retuns false).
let nums1 = [2, 4, 6, 8, 10];

let ans1 = nums1.every((el) => {
    return el % 2 == 0;
});
// console.log(ans1);

// [2,4,6,8,10].every((el) => el%2 == 0);


//  some 
//  some : its retun true or false.(retuns ture if some elements of array gives true for some function,else return false).
let nums2 = [1, 3, 4, 5, 7, 9, 12, 14];

let ans2 = nums2.some((el) => {
    return el % 2 == 0;
});
// console.log(ans2);


//  Reduce 
//  Reduce : Reduce the array to a single value.
//  arr,reduce ( reducer function with 2 variables for (accumulator, element));

let nums3 =  [1, 2, 3, 4];

let ans3 = nums3.reduce((res,el) => {
    // console.log(res);
    return res+el;
});

// console.log(ans3);

// maximum value using reduce function
let arr2 = [1,4,8,7,3,5];

let max = arr2.reduce((max, el) => {
    if (max < el){
        return el;
    }else
    {
        return max;
    }
});
// console.log(max);


// Prectice Qs //

// QS: Check if numbers in the array are multiples of 10 or not.
let number = [10, 20, 60, 40, 90];

let mul = number.every((el) =>  el % 10 == 0);
// console.log(mul);


// QS: create function to find the min number in an array.
number1 = [2, 11, 3, 23, 13, 76, 23, 65];
function getMin(number1){
    let min = number1.reduce((min, el) => {
        if (min < el){
            return min;
        }else{
            return el;
        }
    }); 

    return min;
}
// console.log(getMin(number1));


// QS: Create a new array using the map function whose each element is equal to the original element puls 5.
let mapPlus = [2, 4, 6, 1, 8, 5, 9];
console.log(mapPlus.map((number)=> number +5));



console.log("kunj");