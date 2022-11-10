let Employee = {
    first_name: "Parshuram",
    last_name: "Rathod",
    emp_id: "123",
    company: "Barclays"
};
console.log('===============Objecct Traverse===================');
for (const element in Employee) {
    console.log(element);
};
console.log('==================Object Destructuring===================');
for (const element in Employee) {
    console.log(element, Employee[element]);
};
console.log('===============Objecct Traverse===================');

var vaccin_array = ["J&J",'Pfizer','Sputnic'];
vaccin_array.push('Covaxin');
for (const element of vaccin_array) {
    console.log(element);  
};
console.log('==================Object Destructuring===================');
var vaccinn_array= {
    vaccin1 : "J&J",
    vaccin2 : "Pfizer",
    vaccin3 : "Sputnic",
    vaccin4 : "Covaxin",
}
for (const elemnt in vaccinn_array) {
    console.log(elemnt,vaccinn_array[elemnt]);   
}

