
// Object Literals : used to store keyed collection & complx entities( Key , Value pair).

// "Where Objects are collection pf properties". 

const student = {
    name : "Kunj",
    age : 23,
    marks : 75
};

// Get values : student["name"] & student.name 
// Array can be used inside Object literals.

const item = {
    price : 99.99,
    discount : 10,
    colors : ["red","blue"]
};

// JS automatically converts obejcts keys to stings.(even is we use number as key.)

const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e"
};

// Add / Update / delete value
// stu.name = "xtz"; (update)
// stu.gender = "male"; (add)
// stu.marks = [87 ,98 ,99]; (Array)
// delete stu.gender; (delete)

const stu = {
    name : "abc",
    age : 24,
    marks : 87,
    city : "Mumbai"
};

// objects of Objects

const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi"
    },
    shradha : {
        grade : "A",
        city : "pune"
    },
    karan :{
        grade : "AB",
        city : "Mumbai"
    }
};

// Array of Objects 

const infoStu = [
    {
        name : "Aman",
        grade : "A+"
    },
    {
        name : "Shradha",
        grade : "B"
    }
];
