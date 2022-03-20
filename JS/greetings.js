/*로그인 폼*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoInput2 = document.querySelector("#todo-form input");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const hour = new Date().getHours();

function onLoginSubmit(event) {
  /*If you make space, JS will fill it with info of event */
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greet(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function timegreeting(hour) {
  if (hour >= 6 && hour <= 11) {
    return "morning";
  } else if (hour >= 12 && hour <= 17) {
    return "afternoon";
  } else {
    return "evening";
  }
}

function greet(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
  todoInput2.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Good ${timegreeting(hour)}, ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greet(savedUserName);
}

/*refreshing + submitting is a default action of form*/
/*JS gives "important info" regarding the event, as an argument for the function in the addEventlistener.*/

function logoutHandler() {
  logout.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem("username");
  localStorage.removeItem("toDos");

  location.reload();
  alert("Successfully logged out!");
}

/*location.reload()로 새로고침 시 로그아웃 버튼에 HIDDEN 속성이 초기화되버려*/

function logoutbtnHandler() {
  if (localStorage.getItem("username") !== null) {
    logout.classList.remove(HIDDEN_CLASSNAME);
  } else {
    logout.classList.add(HIDDEN_CLASSNAME);
  }
}

window.addEventListener("load", logoutbtnHandler);
logout.addEventListener("click", logoutHandler);

/*if(localStorage.getItem("username") == null){
    logout.classList.add(HIDDEN_CLASSNAME);
} */
