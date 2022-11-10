var Employee = {
    first_name: "Parshuram",
    last_name: "Rathod",
    emp_id: "123",
    company: "Barclays"
};
console.log('===============Objecct Traverse===================');
for (var element in Employee) {
    console.log(element);
}
;
console.log('==================Object Destructuring===================');
for (var element in Employee) {
    console.log(element, Employee[element]);
}
;
console.log('===============Objecct Traverse===================');
var vaccin_array = ["J&J", 'Pfizer', 'Sputnic'];
vaccin_array.push('Covaxin');
for (var _i = 0, vaccin_array_1 = vaccin_array; _i < vaccin_array_1.length; _i++) {
    var element = vaccin_array_1[_i];
    console.log(element);
}
;
console.log('==================Object Destructuring===================');
var vaccinn_array = {
    vaccin1: "J&J",
    vaccin2: "Pfizer",
    vaccin3: "Sputnic",
    vaccin4: "Covaxin"
};
for (var elemnt in vaccinn_array) {
    console.log(elemnt, vaccinn_array[elemnt]);
}
