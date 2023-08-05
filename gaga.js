let carts = document.querySelectorAll(".add_cart");

let vinyls = [
  {
    name: "The Fame",
    tag: "fame",
    price: 65.99,
    inCart: 0,
  },
  {
    name: "Chromatica",
    tag: "chromatica",
    price: 75.99,
    inCart: 0,
  },
  {
    name: "Born this way",
    tag: "btw",
    price: 50.99,
    inCart: 0,
  },
  {
    name: "Artpop",
    tag: "artpop",
    price: 70.99,
    inCart: 0,
  },
  {
    name: "Joanne",
    tag: "joanne",
    price: 65.99,
    inCart: 0,
  },
  {
    name: "The fame monster",
    tag: "monster",
    price: 50.99,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(vinyls[i]);
    totalCost(vinyls[i]);
  });
}

function loadCart() {
  let productNum = localStorage.getItem("cartNumbers");
  if (productNum) {
    document.querySelector(".cart_icon span").textContent = productNum;
  }
}

function cartNumbers(vinyl) {
  let productNum = localStorage.getItem("cartNumbers");

  productNum = parseInt(productNum);

  if (productNum) {
    localStorage.setItem("cartNumbers", productNum + 1);
    document.querySelector(".cart_icon span").textContent = productNum + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart_icon span").textContent = 1;
  }

  setItems(vinyl);
}

function setItems(vinyl) {
  let cartItems = localStorage.getItem("productsinCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[vinyl.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [vinyl.tag]: vinyl,
      };
    }
    cartItems[vinyl.tag].inCart += 1;
  } else {
    vinyl.inCart = 1;
    cartItems = {
      [vinyl.tag]: vinyl,
    };
  }

  localStorage.setItem("productsinCart", JSON.stringify(cartItems));
}

function totalCost(vinyl) {
  let cartCost = localStorage.getItem("totalCost");

  console.log("Existing cartCost:", cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + vinyl.price);
    console.log("Updated cartCost:", cartCost + vinyl.price);
  } else {
    localStorage.setItem("totalCost", vinyl.price);
    console.log("New cartCost:", vinyl.price);
  }
}

loadCart();
displayCart();
