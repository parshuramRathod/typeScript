class Employee {
    public firstName: string;
    public lastName: string;
    public designation: string;
    public Print(): void {
        console.log("Employee Deatails");
    }
}

class Manager extends Employee {
    // constructor
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor
        super()
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // over riding parent class print method
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName}- ${this.designation}`);
    }
}

class Lead extends Employee {
    // constructor
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor
        super()
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // over riding parent class print method
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName}- ${this.designation}`);
    }
}

class Developer extends Employee {
    // constructor
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor
        super()
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // over riding parent class print method
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName}- ${this.designation}`);
    }
}

let employees: Employee[] = new Array(new Manager("Jack","Sparrow","Manager"),new Lead("Sumit","Pande","Lead"),new Developer("Parshuram","Rathod","Developer"));
for (const emp of employees) {
    emp.Print();
}
