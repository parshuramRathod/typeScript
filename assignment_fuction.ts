// let grades = prompt('Please enter your marks');
let prompt = (math:number,physics:number,chem:number) =>{
let average = (math+physics+chem)/3;
if (average>90) {
    console.log(`Your Maths marks is :${math}`);
    console.log(`Your physics marks is :${physics}`);
    console.log(`Your chemistry marks is :${chem}`);
    console.log(`Your average is ${average} and your grade is A`);
}
console.log('================================================');

if (average>70 && average<90) {
     console.log(`Your Maths marks is :${math}`);
    console.log(`Your physics marks is :${physics}`);
    console.log(`Your chemistry marks is :${chem}`);
    console.log(`Your average is ${average} and your grade is B`);
}
console.log('================================================');
if (average<70) {
     console.log(`Your Maths marks is :${math}`);
    console.log(`Your physics marks is :${physics}`);
    console.log(`Your chemistry marks is :${chem}`);
    console.log(`Your average is ${average} and your grade is C`);
}
}
grades(70,60,70);
grades(80,70,75);
grades(95,95,95);

