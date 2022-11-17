var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this, this.frequentFlyrno = flightno;
    }
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparrow", 102);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyrno);
