const myNumber = document.querySelector("#my_number");
const maxNumber = document.querySelector("#max_number");
const myButton = document.querySelector("#my_number__form");
const result = document.querySelector(".result");
const myNumberSpan = document.querySelector("#my_number__span");
const randomNumber = document.querySelector("#random_number");
const resultSpan = document.querySelector("#result__span");
const HIDDEN = "hidden";

function resultShow(myNumbervalue,myRandomvalue){
    if(myNumbervalue==myRandomvalue){
        resultSpan.innerText=`You won!`;
    }else{
        resultSpan.innerText=`You lose!`;
    }
}


function onPlayClick(event) {
  event.preventDefault();
  const myNumbervalue = myNumber.value;
  const myRandomvalue = Math.ceil(Math.random()*maxNumber.value);
  myNumberSpan.innerText = `${myNumbervalue}`;
  randomNumber.innerText = `${myRandomvalue}`;
  resultShow(myNumbervalue,myRandomvalue);
  result.classList.remove("hidden");
}



myButton.addEventListener("submit", onPlayClick);
