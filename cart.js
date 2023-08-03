let carts = document.querySelectorAll(".add_cart");

let products = [
  {
    name: "Born to die",
    tag: "borntodie",
    price: 75.99,
    inCart: 0,
  },
  {
    name: "Honeymoon",
    tag: "honeymoon",
    price: 45.99,
    inCart: 0,
  },
  {
    name: "Ultraviolence",
    tag: "ultraviolence",
    price: 50.99,
    inCart: 0,
  },
  {
    name: "Norman Fucking Rockwell",
    tag: "nfr",
    price: 65.99,
    inCart: 0,
  },
  {
    name: "Born to die - paradise edition",
    tag: "paradise",
    price: 65.99,
    inCart: 0,
  },
  {
    name: "Lust for life",
    tag: "lfl",
    price: 50.99,
    inCart: 0,
  },
  {
    name: "Blue banisters",
    tag: "bb",
    price: 60.99,
    inCart: 0,
  },
  {
    name: "Chemtrails over the country club",
    tag: "cotcc",
    price: 60.99,
    inCart: 0,
  },
  {
    name: "Did you know that there is a tunnel under ocean boulevard",
    tag: "ob",
    price: 89.99,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log("the product is clicked", products[i]);
    set(products);
  });
}

function set(products) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems) || {}; // Initialize as an empty object if it doesn't exist

  for (let i = 0; i < products.length; i++) {
    if (products[i].inCart > 0) {
      cartItems[products[i].tag] = products[i];
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// You might want to call the "set" function initially if you have any pre-existing cart items in localStorage.

// Other functions that might be needed in your shopping cart:

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  // Now you can loop through "cartItems" and display the items in the cart as needed.
}

function clearCart() {
  localStorage.removeItem("productsInCart");
}

document.addEventListener("DOMContentLoaded", function () {
  displayCart(); // Call the function to display the cart items
});
