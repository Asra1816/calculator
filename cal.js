let btns = document.querySelectorAll(".btn");
let inp = document.querySelector("input");

for(btn of btns) {
    btn.addEventListener("click", function(event) {
        // inp.value += event.target.innerText;
        res(event);
    });
}

function calculate () {
    inp.value = eval(inp.value);
}
function clear () {
    inp.value = "";
}

function res (event) {
    let val = event.target.innerText;

    if(val === "=") {
        console.log("pass");
        calculate();
    }
    else if(val === "C") {
        clear();
    }
    else{
        inp.value += val;
    }
}