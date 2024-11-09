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


function rollDice(){

  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");


  const values = [];

  const images = [];

  for(let i = 0 ; i < numOfDice; i++){
      const value = Math.floor(Math.random() *6 ) + 1;
      values.push(value);
      images.push(`<img src="imagesss/${value}.jpg">`)
  }

  // diceResult.textContent = `國家: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
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


