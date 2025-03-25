const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

function calculateTotal(cart){
    let total=0;

    cart.forEach(element => {
        total += element.price * element.quantity;
    });

    return total;
}

const total = calculateTotal(cart);
console.log(total);
