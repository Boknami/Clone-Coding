const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    
    if(username === ""){
        alert("입력 값 없어!");
    } else if(username.length > 10){
        alert("이름이 너무 길어!");
    }
}

loginButton.addEventListener("click", onLoginBtnClick)