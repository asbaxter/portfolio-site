const toggle = document.querySelector(".switch");
const bubbles = document.querySelector(".bubbles");


toggle.addEventListener("click", () => {
    console.log("click");
    bubbleHandler();
})

let clicks = 0;

function bubbleHandler(){
    clicks++;
    console.log(clicks)
    if (clicks == 1){
        bubbles.setAttribute("id", "toggled");
        console.log('bubbles off');
    }
    if (clicks == 2){
        bubbles.setAttribute("id", "toggled");
        console.log('bubbles off');
    }
    if(clicks == 3){
        bubbles.removeAttribute("id", "toggled")
        console.log("bubbles on");
    }
    if(clicks == 4){
        bubbles.removeAttribute("id", "toggled")
        console.log("bubbles on");
        clicks = 0;
    }
    

}