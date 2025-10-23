
const initApp = () => {
  "use strict";
  
  const userLoged = getItemFromLocalStorage("userLoged");
  if(!userLoged){
    redirectToLogin()
  }

  const userInfoParagraph = document.getElementById("user-info");

  userInfoParagraph.textContent = `Welcome, ${userLoged.name}`

};

document.addEventListener("DOMContentLoaded", initApp);

  