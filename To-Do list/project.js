const input_box = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
// const searchbtn = document.querySelector(".row button");

function to_do(){
    if(input_box.value ==='')
    {
        alert("Bhaiya ! kuch to likho");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value='';
    savedata();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();