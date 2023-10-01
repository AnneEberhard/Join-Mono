let users = [];
let username = document.getElementById("name");
let email = document.getElementById("email");
let confirm = document.getElementById("confirmpassword");
let password = document.getElementById("password");
let signup = document.getElementById("signup");

const form = document.getElementById("forgot-form");
const button = document.querySelector(".fly-in-button");
const overlay = document.querySelector(".overlay");

/**
 * this delays the creation of a new promise
 * @param {}  - no param
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** CHECK THIS
 * adding eventlistenter
 * @param {}  - no param
 */
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const passwordMatching = await addUser();
  if (passwordMatching) {
    document.body.classList.add("clicked");
    button.classList.add("clicked");
    await delay(1000);
    form.submit();
    window.location.href = "index.html";
  }
});

/** CHECK THIS
 * this function adds a new user
 * @param {}  - no param
 */
async function addUser() {
  confirm.classList.remove("border-red");
  error.style = "display: none;";
  if (
    username.value.length >= 1 &&
    email.value.length >= 1 &&
    password.value.length >= 1 &&
    password.value == confirm.value
  ) {
    users.push({
      name: username.value,
      email: email.value,
      password: password.value,
    });
    await setItem("users", JSON.stringify(users));
    resetForm();
    return true;
  } else {
    confirm.classList.add("border-red");
    error.style = "display: flex;";
    confirm.value = "";
    return false;
  }
}

/** CHECK THIS
 * aresets the form
 * @param {}  - no param
 */
function resetForm() {
  username.value = "";
  email.value = "";
  confirm.value = "";
  password.value = "";
  signup.disabled = false;
}
