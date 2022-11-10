var emp = {
    name: "Dnyanesh",
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);


function display(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log("Id", id);
    console.log("Name", name);
    console.log("Role", role);
}
// display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");
