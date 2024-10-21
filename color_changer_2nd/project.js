function randomcolor(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const random = `rgb(${red},${green},${blue})`;
    return random;
}


const start_button = document.querySelector(".button_one");
const stop_button = document.querySelector(".button_two");
const body = document.body;

let Interval_ID;

function start(){
    Interval_ID = setInterval(() => {
        body.style.backgroundColor = randomcolor(); 
    }, 1000);
}
function stop(){
    clearInterval(Interval_ID);
    body.style.backgroundColor = "white";
} 
start_button.addEventListener("click",start);
stop_button.addEventListener("click",stop);