const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");

const validationInput = ({ target }) => target.value.length > 2 ? (
    button.removeAttribute("disabled")) : button.setAttribute("disabled", "");

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem("player", input.value);
    window.location = "pages/game.html";
};

input.addEventListener("input", validationInput);
form.addEventListener("submit", handleSubmit)