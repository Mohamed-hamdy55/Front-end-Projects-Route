const initApp = () => {
  "use strict";

  const addItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItemFromLocalStorage = (key) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
  };

  const nameRegex = /^\w{3,}(\s+\w+)*$/;
  const urlRegex =
    /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*(\?[\w=&-]*)?(#[\w-]*)?$/;

  const siteName = document.getElementById("bookmarkName");
  const siteUrl = document.getElementById("bookmarkURL");
  const submitBtn = document.getElementById("submitBtn");
  const tableContent = document.getElementById("tableContent");
  const nameError = document.getElementById("nameError");
  const urlError = document.getElementById("urlError");

  let bookmarks = getItemFromLocalStorage("bookmarks");

  const validate = (regex, element, errorElement, message) => {
    if (!regex.test(element.value.trim())) {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      errorElement.textContent = message;
      return false;
    } else {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      errorElement.textContent = "";
      return true;
    }
  };

  const showBookmarks = () => {
    tableContent.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
      const bookmarkHTML = `
        <tr>
          <td>${index + 1}</td>
          <td>${bookmark.siteName}</td>
          <td>
            <button class="btn btn-visit" onclick="visitWebsite('${bookmark.siteURL}')">
              <i class="fa-solid fa-eye px-2"></i><span>Visit</span>
            </button>
          </td>
          <td>
            <button class="btn btn-delete" onclick="deleteBookmark(${index})">
              <i class="fa-solid fa-trash-can px-2"></i><span>Delete</span>
            </button>
          </td>
        </tr>`;
      tableContent.innerHTML += bookmarkHTML;
    });
  };

  const clearInputs = () => {
    siteName.value = "";
    siteUrl.value = "";
    nameError.textContent = "";
    urlError.textContent = "";
    siteName.classList.remove("is-valid", "is-invalid");
    siteUrl.classList.remove("is-valid", "is-invalid");
  };

  // make changes happen during user input after each character is added
  siteName.addEventListener("input", () =>
    validate(nameRegex, siteName, nameError, "Name must have at least 3 characters")
  );
  siteUrl.addEventListener("input", () =>
    validate(urlRegex, siteUrl, urlError, "Enter a valid URL")
  );
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const isNameValid = validate(nameRegex, siteName, nameError, "Name must have at least 3 characters");
    const isUrlValid = validate(urlRegex, siteUrl, urlError, "Enter a valid URL, Must be secured");

    if (!isNameValid || !isUrlValid) return;

    // No dublicates allowed
    const nameExists = bookmarks.some(
      (bookmark) => bookmark.siteName.toLowerCase() === siteName.value.trim().toLowerCase()
    );
    const urlExists = bookmarks.some(
      (bookmark) => bookmark.siteURL.toLowerCase() === siteUrl.value.trim().toLowerCase()
    );

    if (nameExists || urlExists) {
      if (nameExists)
        nameError.textContent = "A bookmark with this name already exists";
      if (urlExists)
        urlError.textContent = "This URL is already bookmarked";
      return;
    }

    const bookmark = {
      siteName: siteName.value.trim(),
      siteURL: siteUrl.value.trim(),
    };

    bookmarks.push(bookmark);
    addItemToLocalStorage("bookmarks", bookmarks);
    showBookmarks();
    clearInputs();
  });

  /* Note: 
    make them under window object to call it directly in front end 'onClick event'
    very bad solution but better than adding event listener using for loop
  */
  window.deleteBookmark = (index) => {
    bookmarks.splice(index, 1);
    addItemToLocalStorage("bookmarks", bookmarks);
    showBookmarks();
  };

  window.visitWebsite = (url) => {
    const httpsUrl = /^https?:\/\//;
    if (!httpsUrl.test(url)) {
      url = "https://" + url;
    }
    window.open(url, "_blank");
  };

  showBookmarks();
};

document.addEventListener("DOMContentLoaded", initApp);
