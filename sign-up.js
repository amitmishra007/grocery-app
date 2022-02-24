const inputContainer = document.querySelector(".input-container");

const todoInput = document.querySelector(
  ".input-container input[type='textuser']"
);

// console.log(todoInput);
console.log(localStorage);
// localStorage.clear();
inputContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = document.getElementById("user-value").value;
  const emailValue = document.getElementById("email-value").value;
  const phoneValue = document.getElementById("phone-value").value;

  console.log(userValue);
  console.log(emailValue);
  console.log(phoneValue);
  localStorage.setItem(`username`, `${userValue}`);
  localStorage.setItem(`phone`, `${phoneValue}`);
  localStorage.setItem(`email`, `${emailValue}`);
  console.log(localStorage);
  window.location = "./index.html";
});
