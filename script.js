// let ctr = 0;
// function callback(){
//     const el = document.querySelectorAll("h4")[1]
//     el.innerHTML = ctr;
//     ctr = ctr + 1;  
// }

// setInterval(callback,1000)

let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h4")[1];
    if (el) { // Ensure the element exists
        el.innerHTML = ctr;
        ctr = ctr + 1;
    }

    if (ctr >= 10) { // Termination condition
        clearInterval(intervalID);
    }
}

let intervalID = setInterval(callback, 1000);
