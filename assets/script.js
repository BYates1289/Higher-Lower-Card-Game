const card = document.getElementById("card");
const lastCard = document.getElementById("lastCard");

function loadCards() {
  randomCard = Math.floor(Math.random() * 13 + 2);
  randomSuit = Math.floor(Math.random() * 4 + 1);
  randomCardNumber = randomCard;
  switch (randomCard) {
    case 14:
      randomCard = "A";
      break;
    case 13:
      randomCard = "K";
      break;
    case 12:
      randomCard = "Q";
      break;
    case 11:
      randomCard = "J";
      break;
    default:
      break;
  }
  switch (randomSuit) {
    case 1:
      randomSuit = "C";
      break;
    case 2:
      randomSuit = "D";
      break;
    case 3:
      randomSuit = "S";
      break;
    case 4:
      randomSuit = "H";
      break;
    default:
      break;
  }
  card.style.backgroundImage = "url(assets/img/cards/" + randomCard + randomSuit + ".png";
  lastCard.style.backgroundImage = "url(assets/img/cards/red_back.png";
}
function nCard() {
  newCard = Math.floor(Math.random() * 13 + 2);
  newSuit = Math.floor(Math.random() * 4 + 1);
  newCardNumber = newCard;
  switch (newCard) {
    case 14:
      newCard = "A";
      break;
    case 13:
      newCard = "K";
      break;
    case 12:
      newCard = "Q";
      break;
    case 11:
      newCard = "J";
      break;
    default:
      break;
  }
  switch (newSuit) {
    case 1:
      newSuit = "C";
      break;
    case 2:
      newSuit = "D";
      break;
    case 3:
      newSuit = "S";
      break;
    case 4:
      newSuit = "H";
      break;
    default:
      break;
  }