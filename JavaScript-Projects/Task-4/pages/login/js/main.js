const initApp = () => {
  "use strict";
  
  const userLoged = getItemFromLocalStorage("userLoged");
  if(userLoged){
    redirectToHome()
  }
  
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const submitBtn = document.getElementById("submitBtn");
  const users = getItemFromLocalStorage("users") || [];


 
  handleChange('input', email, emailError);
  handleChange('input', password, passwordError);

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const isEmailValid = validate(email, emailError);
    const isPasswordValid = validate(password, passwordError);

    if (!isEmailValid || !isPasswordValid) return;

    // check if user exist
    const user = users.find(
      (user) => user.email.toLowerCase() === email.value.trim().toLowerCase()
    );

    // in real live example it is very dangeours to show to user what is the wrong cardentials
    // we can say "user has wrong cardentials", for security reasons
    // Note: Also checking on login on all valid password condition is wrong, but here for learning goal it is okay
    if (!user) {
      emailError.textContent = "No user with this email";
      return;
    }else if(user.password !== password.value){
      passwordError.textContent = "The user password is wrong";
      return;
    }

    clearInputs([email, password], [emailError, passwordError]);
    // act like loging demo, "Cookies" is more secure
    addItemToLocalStorage("userLoged", user)

    redirectToHome()
  });
};

document.addEventListener("DOMContentLoaded", initApp);
