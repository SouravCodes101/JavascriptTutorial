const cards = document.querySelectorAll(".card");
// console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

let checkIt = () => {
  firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
};

function flip() {
  // console.log("card flipped");
  // console.log(this);

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    // console.log(firstCard);
    // console.log(secondCard);
    checkIt();
  }
}

let reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

let success = () => {
  // console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

let fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 700);
};

//ToDo: Shuffle
window.addEventListener("load", () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
});
