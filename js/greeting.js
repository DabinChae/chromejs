const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const logInButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick(event){
    event.preventDefault();
    // console.log(event);  
    const username=loginInput.value;
    localStorage.setItem("username",username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username)
    console.log(username);

}

function handleLinkClick(event){
    event.preventDefault();
    alert("click!"); 
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// logInButton.addEventListener("click",onLoginBtnClick);

// link.addEventListener("click",handleLinkClick);

const saveUserName = localStorage.getItem("username");

if(saveUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginBtnClick);

  
}
else{
    const username = saveUserName;
    paintGreeting(username)
}