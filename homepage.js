let mybutton = document.getElementById("myUpBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}









document.addEventListener("DOMContentLoaded", function ( ) {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    toggleButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });
});

const clearBtn = document.querySelector("#clear");

function onClear() {
    const itemList = document.querySelector("ul");
    // const items = itemList.querySelector("li");
    while(itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.addEventListener("click", onClear);


