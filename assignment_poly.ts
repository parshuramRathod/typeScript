class Eventmanagement {
    public id : number;
    public name : string;
    public discription: string;
    public startTime:string;
    public address : string;
    public display():void{
        console.log("Event organized for engagement ceremony"); 
    }
}

class Organizer extends Eventmanagement {
    constructor(id:number,name:string){
        super()
        this.id = id;
        this.name = name;
    }
    public display(): void {
        super.display()
        console.log(`${this.id} ${this.name}`);  
    }
}
class Eventt extends Eventmanagement {
    constructor(id:number,name:string,discription:string,startTime:string){
        super()
        this.id = id;
        this.name = name;
        this.discription= discription;
        this.startTime= startTime;
    }
    public display(): void {
        super.display()
        console.log(`${this.id} ${this.name} ${this.discription} ${this.startTime}`);  
    }
}


class Venue extends Eventmanagement {
    constructor(id:number,name:string,discription:string,address:string){
        super()
        this.id = id;
        this.name = name;
        this.discription= discription;
        this.address= address;
    }
    public display(): void {
        super.display()
        console.log(`${this.id} ${this.name} ${this.discription} ${this.address}`);  
    }
}
let eventmanagment : Eventmanagement[] = new Array(new Organizer(1122,"Rajmudra"),new Eventt(1122,"Rajmudra","Engagement ceremony","18:00"),new Venue(1122,"Rajmudra","Engagement ceremony","Nirmiti Lawns vijapur road solapur"))
for (const eve of eventmanagment) {
    eve.display();
}