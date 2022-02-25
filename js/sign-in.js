const inputContainer = document.querySelector(".input-container");

const todoInput = document.querySelector(
  ".input-container input[type='textuser']"
);

// console.log(todoInput);
console.log(typeof localStorage.username);
// localStorage.clear();
inputContainer.addEventListener("submit", (e) => {
  const userValue = document.getElementById("user-value").value;
  const emailValue = document.getElementById("email-value").value;
  const phoneValue = document.getElementById("phone-value").value;
  console.log(userValue);
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  if (
    user.username === userValue &&
    user.email === emailValue &&
    user.phone === phoneValue
  ) {
    window.location = "./grocery.html";
  } else {
    console.log("Login Failed, Please Sign Up");
    alert("Login Failed, Please Sign Up");
    console.log(`${userValue} ${emailValue} ${phoneValue}`);
  }
});
