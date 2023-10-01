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
  const emailMatching = await sendMail();
  if (emailMatching) {
    document.body.classList.add("clicked");
    button.classList.add("clicked");
    await delay(1000);
    form.submit();
  }
});


/** CHECK THIS
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
