const form = document.getElementById("forgot-form");
const button = document.querySelector(".fly-in-button");
const overlay = document.querySelector(".overlay");

/**
 * this delays the following code bei ms milliseconds
 * @param {}  - no param
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * when form is submitted, starts code for sending mail for resetting password
 * @param {}  - no param
 */
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const emailMatching = await sendMail();
  if (emailMatching) {
    document.body.classList.add("clicked");
    button.classList.add("clicked");
    await delay(1000);
    form.submit();
  }
});


/**
 * send mail
 * @param {}  - no param
 */
async function sendMail() {
  let email = document.getElementById("email");
  email.classList.remove("border-red");
  error.style = "display:none;";
  if (users[0].email == email.value) {
    return true;
  } else {
    email.classList.add("border-red");
    email.value = "";
    error.style = "display:flex;";
    return false;
  }
}
