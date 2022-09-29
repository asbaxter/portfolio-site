const toggle = document.querySelector(".switch");
const bubbles = document.querySelector(".bubbles");


toggle.addEventListener("click", () => {
    console.log("click");
    bubbleHandler();
})

let clicks = 0;


// because of the default behaviour of the spans in our button; one user click plays the function twice.

function bubbleHandler(){
    clicks++;
    if (clicks == 1){
        bubbles.setAttribute("id", "toggled");
    }
    if (clicks == 2){
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
