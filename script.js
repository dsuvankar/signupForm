const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("signup-form");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formMessage = document.getElementById("form-message");

const emailValidation = () => {
  const emailValue = emailInput.value;
  if (
    emailValue.length > 3 &&
    emailValue.includes("@") &&
    emailValue.includes(".")
  ) {
    emailError.textContent = "";
    return true;
  } else {
    emailError.textContent =
      "Make sure email is more than 3 characters and has @ and a .";
    return false;
  }
};

const passwordValidation = () => {
  const passwordValue = passwordInput.value;
  if (passwordValue.length > 8) {
    passwordError.textContent = "";
    return true;
  } else {
    passwordError.textContent = "Password must be more than 8 characters";
    return false;
  }
};

const showValidationMessages = () => {
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();
  if (isEmailValid && isPasswordValid) {
    formMessage.textContent = "All good to go!";
    formMessage.className = "success";
  } else {
    formMessage.textContent = "";
  }
};

emailInput.addEventListener("change", () => {
  emailValidation();
  showValidationMessages();
});

passwordInput.addEventListener("change", () => {
  passwordValidation();
  showValidationMessages();
});

showValidationMessages();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();

  if (isEmailValid && isPasswordValid) {
    if (confirm("Do you want to submit the form?")) {
      alert("Successful signup!");
    } else {
      form.reset();
      formMessage.textContent = "";
      showValidationMessages();
    }
  }
});
