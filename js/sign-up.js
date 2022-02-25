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
  const userObject = {
    username: userValue,
    phone: phoneValue,
    email: emailValue,
  };
  const user = JSON.stringify(userObject);
  localStorage.setItem("user", user);
  // localStorage.setItem(`phone`, `${phoneValue}`);
  // localStorage.setItem(`email`, `${emailValue}`);
  console.log(localStorage);
  window.location = "./index.html";
});
