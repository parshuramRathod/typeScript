class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyrno: number
    constructor(firstName: string, lastName: string, flightno: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this, this.frequentFlyrno = flightno;
    }
}
var passenger = new Passenger("Jack","Sparrow",102);

console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyrno);
