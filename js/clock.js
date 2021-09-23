const clock = document.querySelector("h2#clock")

// function sayHello(){
//     console.log("hello");
// }

// setTimeout(sayHello,5000);

// // setInterval(sayHello,2000);


function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hour}:${min}:${second}`);
}

getClock()
setInterval(getClock,1000);