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
  if (
    localStorage.username === userValue &&
    localStorage.email === emailValue &&
    localStorage.phone === phoneValue
  ) {
    window.location = "./grocery.html";
  } else {
    console.log("Login Failed, Please Sign Up");
    alert("Login Failed, Please Sign Up");
    console.log(`${userValue} ${emailValue} ${phoneValue}`);
  }
});
