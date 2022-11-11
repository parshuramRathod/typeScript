// let grades = prompt('Please enter your marks');
var grades = function (math, physics, chem) {
    var average = (math + physics + chem) / 3;
    if (average > 90) {
        console.log("Your Maths marks is :".concat(math));
        console.log("Your physics marks is :".concat(physics));
        console.log("Your chemistry marks is :".concat(chem));
        console.log("Your average is ".concat(average, " and your grade is A"));
    }
    console.log('================================================');
    if (average > 70 && average < 90) {
        console.log("Your Maths marks is :".concat(math));
        console.log("Your physics marks is :".concat(physics));
        console.log("Your chemistry marks is :".concat(chem));
        console.log("Your average is ".concat(average, " and your grade is B"));
    }
    console.log('================================================');
    if (average < 70) {
        console.log("Your Maths marks is :".concat(math));
        console.log("Your physics marks is :".concat(physics));
        console.log("Your chemistry marks is :".concat(chem));
        console.log("Your average is ".concat(average, " and your grade is C"));
    }
};
grades(70, 60, 70);
grades(80, 70, 75);
grades(95, 95, 95);
