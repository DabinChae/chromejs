const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const logInButton = loginForm.querySelector("button");
const link = document.querySelector("a");

// console.log(link.innerText);

function onLoginBtnClick(event){
    event.preventDefault();
    // console.log(event);  
    const username=loginInput.value;
    console.log(username);

}

function handleLinkClick(){
    alert("click!"); 
}

// logInButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginBtnClick);
// link.addEventListener("click",handleLinkClick);
