//Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
console.log(`Customer Name: ${customer.name}`); //display customer name
console.log(`Customer Age: ${customer.age}`); //display customer age
console.log(`Customer Email: ${customer.email}`); //display customer email

//Task 2: Object Methds
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order Id: ${this.orderId}, Total: $${this.totalAmount}, Status: ${this.status}`)
    } //log the order details
};
order.displayOrder(); //call the fucntion

//Task 3: Array Manipulation
let cartItems = ["Dog Bed", "Dog Leash", "Dog Collar"];
cartItems.push("Dog Toy"); //adding new item
cartItems.pop(); //removing the last items
cartItems.unshift("Dog Harness"); //adding item to the beginning
cartItems.shift(); //removing beginnig item

console.log(cartItems);

//Task 4: Map Method
let prices = [100, 200, 300]; //array of prices
const discount = 0.9; //10% discount
let discountPrice = prices.map(price => price * discount)//applying the discount to prices

console.log(discountPrice);

//Task 5: Filter Method
let inventory = [5, 0, 12, 8, 0];
let availableStock = inventory.filter(stock => stock > 0);
//Filtering out the zero stock
console.log (`Available stock: ${availableStock}`);

//Task 6: Reduce Method
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((total, sales)=> total + sales, 0);
//calculating the total revenue
console.log(`Total Revenue: $${totalRevenue}`);

//Task 7: find() Method
let customers = ["Alice", "Bob", "Charlie", "David"];
let findCustomer = customers.find(customer => customer === "Charlie");

console.log(`Customer: ${findCustomer}`);

//Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return tax = amount * taxRate;
    };
console.log (`Tax Amount: $${calculateTax(250, 0.07)}`);
//applyed a 7% tax rate to $250 to determine the tax amount

//Task 9: Function Expression
function applyDiscount (price, discount) {
    return discount = price - (price * discount);
};
console.log (`Discounted Price: $${applyDiscount(170, 0.40)}`);
//applyed a 40% discount to $170 to determine the discounted price

//Task 10: Arrow Function
let calculatePoints = (purchaseAmount) => {
    let points = Math.floor(purchaseAmount / 10);
    return points;
} //Function for determing points earned
let loyaltyPoints = calculatePoints(3600); //points accumulated 
console.log(`Loyalty Points: ${loyaltyPoints}`);