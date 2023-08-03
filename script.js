// function for changing background color of buttons on the main page
let buttons = document.getElementsByClassName("button_choice");

function changeColor(clickedButton) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "transparent";
    buttons[i].style.color = "#116A7B";
  }
  clickedButton.style.backgroundColor = "#116A7B";
  clickedButton.style.color = "black";
}

// the code for sending to another page by clicking on the buttons in the menu
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetPage = this.getAttribute("href");
      window.location.href = targetPage;
    });
  });
});

// the code for showing tracklist
const showButtons = document.querySelectorAll(".show-button");
const tracklists = document.querySelectorAll(".tracklist");

showButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    tracklists[index].classList.toggle("show");
  });
});

// the code for registration

let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let namefill = document.getElementById("name_fill");
let title = document.getElementById("title");

signin.onclick = function () {
  namefill.style.maxHeight = "0";
  title.innerHTML = "Sign In";

  signup.classList.add("disabled");
  signin.classList.remove("disabled");
};

signup.onclick = function () {
  namefill.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";

  signup.classList.remove("disabled");
  signin.classList.add("disabled");
};

//searchbar

function search() {
  let filter = document.getElementById("find").value.toUpperCase();

  let item = document.querySelectorAll(".card_buy");

  let l = document.getElementsByTagName("h2");

  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName("h2")[0];

    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

//shopping cart

//button rate
