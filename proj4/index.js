const cards = document.querySelectorAll(".card");
console.log(cards);

//Variables
var isFLipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

const flip = () => {
  // console.log("Card Flipped");
  // console.log(this);

  this.classList.add("flip");
  if (!isFLipped) {
    isFLipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

const checkIt = () => {
  // console.log("Checking . . . ");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

const success = () => {
  // console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

const fail = () => {
  // console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 700);
}

const reset = () => {
  isFLipped = false;
  firstCard = null;
  secondCard = null;
}

//ToDo: Shuffle All the cards

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
