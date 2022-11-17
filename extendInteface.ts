interface IExterior {
    color:string;
    numOfDoors:number;
}
interface IInterior{
    seats:number;
    auto:boolean;
}
interface Icar extends IExterior,IInterior{
    make:string;
    model:string;
    year:number;
}
var myCar:Icar={
    make:"TATA",
    model:"Altroz",
    year:2022,
    color:'Gray',
    numOfDoors:4,
    seats:4,
    auto:false
}
