const description = document.querySelector(".description");
const dropToExpand = document.querySelector("#btn");
const title = document.querySelector(".title");
const changebtn = document.querySelector("#changebtn");

dropToExpand.addEventListener("click", (e) => {
  // toggle the display property of the description element
  dropToExpand.classList.toggle("collaspe");

  if (dropToExpand.classList.contains("collaspe")) {
    changebtn.src = "resources/images/arro-up-3100.svg";
  } else {
    changebtn.src = "resources/images/arrow-down-3101.svg";
  }
});
