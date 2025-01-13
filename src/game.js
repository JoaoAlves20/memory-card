const grid = document.querySelector(".grid");

const characters = [
    "beth", "jerry", "jessica", "morty",
    "pessoa-passaro", "pickle-rick",
    "rick", "summer", "meeseeks", "scroopy"
];

let firstCard = "";
let secondCard = "";

function checkEndGame() {
    const disabledCards = document.querySelectorAll(".disabled-card");

    if (disabledCards.length === 20) {
        setTimeout(() => {
            alert("Congratulations, you're very good in the game!")
        }, 500);
    }
};

function checkCards() {
    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add("disabled-card");
        secondCard.firstChild.classList.add("disabled-card");

        firstCard = "";
        secondCard = "";

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("revel-card");
            secondCard.classList.remove("revel-card");

            firstCard = "";
            secondCard = "";
        }, 500);
    };
};

function revelCard({ target }) {    
    if (target.parentNode.className.includes("revel-card")) {
        return;
    };
    
    if (firstCard === "") {
        target.parentNode.classList.add("revel-card");
        firstCard = target.parentNode;
    } else if (secondCard === "") {
        target.parentNode.classList.add("revel-card");
        secondCard = target.parentNode;

        checkCards();
    };
};

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

function createCard(character) {
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url("../images/${character}.png")`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revelCard)
    card.setAttribute("data-character", character);

    return card;
};

function loadingGame() {
    const duplicateCharacters = [...characters, ...characters];
    const sortedArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
    sortedArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
};

loadingGame();