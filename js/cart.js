let carts = document.querySelectorAll(".add_cart");

let products = [
  {
    name: "Born to die",
    tag: "btd",
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
    name: "Born to die. Paradise",
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
    tag: "ocean",
    price: 89.99,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function loadCart() {
  let productNum = localStorage.getItem("cartNumbers");
  if (productNum) {
    document.querySelector(".cart_icon span").textContent = productNum;
  }
}

function cartNumbers(product) {
  let productNum = localStorage.getItem("cartNumbers");

  productNum = parseInt(productNum);

  if (productNum) {
    localStorage.setItem("cartNumbers", productNum + 1);
    document.querySelector(".cart_icon span").textContent = productNum + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart_icon span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsinCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsinCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  console.log("Existing cartCost:", cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    console.log("Updated cartCost:", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
    console.log("New cartCost:", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsinCart");
  cartItems = JSON.parse(cartItems);
  let productCont = document.querySelector(".items");
  let costContainer = document.querySelector(".checkout");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productCont) {
    productCont.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productCont.innerHTML += `
      <div class='line_cart'>
        <img src="./images/${item.tag}.png"/>
          <div class="item-details">
            <h3>${item.name}</h3>
          </div>
          <div class='price'>
            <p>$${item.price}</p>
          </div>
          <div class='quanity'>
            <i class="fa fa-dot-circle-o"></i>
            <span>${item.inCart}</span>
            <i class="fa fa-dot-circle-o"></i>
          </div>
          <div class='remove'>
            <i class="fa fa-trash remove"></i> 
          </div>
          <div class='total'>
            $${item.inCart * item.price}</div>
          </div>
      </div>
      <div class='line'></div>
      `;
    });

    costContainer.innerHTML += `
      <div class='total-cont'>
        <button class='total-title'>Checkout</button>
        <h5 class='total-amount'>$${cartCost}</h5>
      </div>
    `;
  }
}

let delete_prod = document.getElementsByClassName(".remove");
let product_remove = document.getElementsByClassName(".line_cart");

delete_prod.onclick = function () {
  product_remove.style.maxHeight = "0";
};

loadCart();
displayCart();
