const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");

const validationInput = ({ target }) => target.value.length > 2 ? (
    button.removeAttribute("disabled")) : button.setAttribute("disabled", "");

input.addEventListener("input", validationInput);