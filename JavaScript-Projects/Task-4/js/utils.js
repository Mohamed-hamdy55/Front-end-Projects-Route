const addItemToLocalStorage = (key, value) => {
localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = (key) => {
return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
};

const validate = (input, errorElment) => {
    const regexMap = {
        name : /^[a-zA-Z]+( [a-zA-Z]+){1,3}$/, 
        email : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/,  
    }
    const errorMessagesMap = {
        name: "Enter a name contains only letters up 2 words min,  4 words max.",
        email: "Enter a valid email.",
        password: "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.",
    }


    if(regexMap[input.name].test(input.value.trim())){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      errorElment.textContent = "";
      return true;
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      errorElment.textContent = errorMessagesMap[input.name];
      return false;
    }
}

const clearInputs = (inputs, errorElments) => {
  inputs.forEach((input) => {
    input.value="";
    input.classList.remove("is-valid", "is-invalid");
  })
  errorElments.forEach((errorElment) => {
    errorElment.textContent="";
  })
};

const handleChange = (changeType, input, errorElment) => {
  input.addEventListener( changeType, ()=>{
    validate(input, errorElment);
  })
}

const navigateTo = (path) => {
  window.location.assign(path);
}

const redirectToLogin = () => {
  const currentPath = window.location.pathname;

  if (currentPath.includes('/pages/'))
    navigateTo('../login/index.html');
  else 
    navigateTo('pages/login/index.html');
  
}

const redirectToHome = () => {
  const currentPath = window.location.pathname;

  if (currentPath.includes('/pages/'))
    navigateTo('../../index.html');
  else 
    navigateTo('index.html');
}