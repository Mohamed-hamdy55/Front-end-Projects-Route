
const initApp = () => {
  "use strict";
  
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const submitBtn = document.getElementById("submitBtn");
  let users = getItemFromLocalStorage("users") || [];


 
  handleChange('input', name, nameError);
  handleChange('input', email, emailError);
  handleChange('input', password, passwordError);

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const isNameValid = validate(name,nameError);
    const isEmailValid = validate(email, emailError);
    const isPasswordValid = validate(password, passwordError);

    if (!isNameValid || !isEmailValid || !isPasswordValid) return;

    // No dublicates allowed
    const emailExists = users.some(
      (user) => user.email.toLowerCase() === email.value.trim().toLowerCase()
    );

    if (emailExists) {
      emailError.textContent = "A user with this email already exists";
      return;
    }

    const user = {
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };

    users.push(user);
    addItemToLocalStorage("users", users);
    clearInputs([name, email, password], [nameError, emailError, passwordError]);

    redirectToLogin()
  });
};

document.addEventListener("DOMContentLoaded", initApp);
