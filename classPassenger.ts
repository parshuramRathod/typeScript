class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyrno: number
    constructor(firstName: string, lastName: string, frequentFlyrno: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyrno = frequentFlyrno;
    }
    display() {
        console.log(this.firstName + " " + this.lastName + " "+ this.frequentFlyrno);
    }

}
var passenger = new Passenger("Jack", "Sparrow", 102);
passenger.display();
var passenger2 = new Passenger("Harry","Potter",479);
passenger2.display();

for (const item in passenger) {
   if(passenger[item]==instanceof function){
    console.log(item);
   }
}