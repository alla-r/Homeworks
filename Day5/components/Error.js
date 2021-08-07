class Error {
  static showError = (errText = "Something went wrong") => {
    const errContainer = document.querySelector(".error-pop-up");
    const errTextContainer = document.querySelector(".error-pop-up p");
    errTextContainer.innerHTML = errText;
    errContainer.classList.toggle("hide");

    setTimeout(() => {
      errContainer.classList.toggle("hide");
    }, 2000);
  }

  static showInputError = (errElement, errText) => {
    if (errText) {
      errElement.innerHTML = errText;
    }
    errElement.classList.toggle("hide");

    setTimeout(() => {
      errElement.classList.toggle("hide");
    }, 2000);
  }
}

export default Error;