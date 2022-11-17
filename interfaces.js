var objProduct = {
    id: 123,
    name: "iPhone",
    description: "It is awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
}; // I have given implementation for IProduct interface
var objProduct = {
    id: 133,
    name: "Android",
    description: "It is great",
    price: 40000,
    display: function () {
        console.log(this.id);
    }
};
objProduct.display();
