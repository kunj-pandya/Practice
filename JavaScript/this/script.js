//  This 
//  This : "This" keyword refer to an obejct that is exexuting the current piece of code.


const student = {
    name : "kunj",
    age : 23,
    eng : 78,
    math : 68,
    phy : 81,
    getAvg() {
        let avg = (this.eng+this.math+this.phy) / 3;
        console.log(avg);
    }
};


console.log(student.getAvg());

