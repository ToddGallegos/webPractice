const myh1 = document.getElementById("myh1");
const ageInput = document.getElementById("ageInput");
const ageButton = document.getElementById("ageButton");
const ageParagraph = document.getElementById("ageParagraph");
const counterNumber = document.getElementById("counterNumber");
const rollButton = document.getElementById("rollButton");
const diceParagraph = document.getElementById("diceParagraph");
counterNumber.textContent = 0;
let counter = 0;

myh1.textContent = "Todd's Playground";

function checkAge() {
  let input = ageInput.value.trim();
  ageInput.value = "";
  if (input === "") {
    ageParagraph.textContent = "Enter a valid number!";
    return;
  }
  let ageValue = Number(input);
  if (isNaN(ageValue)) {
    ageParagraph.textContent = "Please enter a number!";
  } else {
    if (ageValue >= 100) {
      ageParagraph.textContent = `${ageValue}?? Prehistoric!`;
    } else if (ageValue >= 40) {
      ageParagraph.textContent = `At ${ageValue} you're getting old.`;
    } else if (ageValue >= 18) {
      ageParagraph.textContent = `Ah ${ageValue}, the prime of life.`;
    } else if (ageValue >= 0) {
      ageParagraph.textContent = `You're just a baby.`;
    } else if (ageValue < 0) {
      ageParagraph.textContent = "You're not even born yet.";
    }
  }
}

ageButton.onclick = checkAge;

ageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAge();
  }
});

counterUp.onclick = function () {
  counter++;
  counterNumber.textContent = counter;
};
counterReset.onclick = function () {
  counter = 0;
  counterNumber.textContent = counter;
};
counterDown.onclick = function () {
  counter--;
  counterNumber.textContent = counter;
};

rollButton.onclick = function () {
  let diceNumber = Math.floor(Math.random() * 6 + 1);
  let diceNumber2 = Math.floor(Math.random() * 6 + 1);
  diceParagraph.textContent = `${diceNumber} and ${diceNumber2}`;
};
