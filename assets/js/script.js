const toggle = document.querySelector(".switch");
const bubbles = document.querySelector(".bubbles");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

// Bubblessssssssssssss

toggle.addEventListener("click", () => {
    console.log("click");
    bubbleHandler();
})

let clicks = 0;

// because of the default behaviour of the spans in our button; one user click plays the function twice.

function bubbleHandler(){
    clicks++;
    if (clicks == 1 || clicks == 2){
        bubbles.setAttribute("id", "toggled");
    }
    if(clicks == 3){
        bubbles.removeAttribute("id", "toggled")
    }
    if(clicks == 4){
        bubbles.removeAttribute("id", "toggled")
        clicks = 0;
    }
    
}

let burgerClicks = 0;
// Hamburger Menus
hamburger.addEventListener("click", () => {
    burgerClicks++;
    if(burgerClicks == 1){
        navList.removeAttribute("id", "toggle-hidden");
        hamburger.setAttribute("id", "toggle-x");
    }
    else{
        navList.setAttribute('id', 'toggle-hidden');
        hamburger.removeAttribute("id", "toggle-hidden");
        burgerClicks = 0;
    }

})
