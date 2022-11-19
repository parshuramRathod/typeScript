var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyrno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyrno = frequentFlyrno;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyrno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparrow", 102);
passenger.display();
var passenger2 = new Passenger("Harry", "Potter", 479);
passenger2.display();
for (var item in passenger) {
    if (passenger[item] ==  instanceof function () { }) {
        console.log(item);
    }
}
