//Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

//Task 2: Object Methds
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order Id: ${this.orderId}, Total: $${this.totalAmount}, Status: ${this.status}`)
    }
};
order.displayOrder();

//Task 3: Array Manipulation
let cartItems = ["Dog Bed", "Dog Leash", "Dog Collar"];
cartItems.push("Dog Toy"); //adding new item
cartItems.pop(); //removing the last items
cartItems.unshift("Dog Harness"); //adding item to the beginning
cartItems.shift(); //removing beginnig item

console.log(cartItems);

//Task 4: Map Method