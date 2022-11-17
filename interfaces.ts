interface IProduct {
    id: number;
    name: string;
    description?: string;// optional parameter
    price: number,
    display(): void;
}//declaration only in interface

var objProduct: IProduct = {
    id: 123,
    name: "iPhone",
    description: "It is awesome",
    price: 60000,
    display(): void {
        console.log(this.id + " " + this.name);

    }
}// I have given implementation for IProduct interface
var objProduct: IProduct = {
    id: 133,
    name: "Android",
    description: "It is great",
    price: 40000,
    display(): void {
        console.log(this.id);
    }
}

