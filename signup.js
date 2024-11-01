//==============signup page=========================//

const linkbtn_login = document.querySelector(".linkbtn_login");
const linkbtn_signup = document.querySelector(".linkbtn_signup");
const form_login = document.querySelector(".form");
const form_signup = document.querySelector(".form_signup");
const login = document.getElementById("#login");
const signup = document.getElementById("#signup");
const dialogue = document.getElementById(".dialogue");

login.addEventListener("click", () => {
  dialogue.setAttribute((display = "none"));
});
