let names = [
  "Markéta",
  "Kateřina",
  "Júlia",
  "Lucie",
  "Aneta",
  "Veronika",
  "Petra",
  "Olga",
  "Naďa",
  "Nikola",
  "Eva",
  "Anísa",
  "Terezia",
  "Diana",
  "Anna",
  "Iva",
  "Denisa",
  "Zuzana",
  "Jana",
  "Martina",
  "Lenka",
  "Iveta",
  "Pavla",
  "Lucie",
  "Kamila",
  "Soňa",
];

let selectedNames = [];

let originalContent = document.querySelector("#seznam").textContent;

let countNames = 0;

function selectName() {
  if (names.length === 0) {
    return; // return bez hodnoty ukonci funkci
  }

  // Generujeme náhodný index
  let winnerIndex = Math.floor(Math.random() * names.length);

  // Získáme výherní jméno na patřičném indexu

  let winnerName = names[winnerIndex];

  // Vyřadíme vylosované jméno z osudí

  let deleteWinnerName = names.splice(winnerIndex, 1);

  // Výherní jméno si uložíme do pole k ostatním výherním

  //tazenaJmena.push(winnerName);

  selectedNames.unshift(winnerName);

  let winner = document.querySelector("#vyherka");
  winner.textContent = winnerName;

  let list = document.querySelector("#seznam");
  list.textContent = selectedNames;

  let winnerCount = document.querySelector("#number");
  winnerCount.textContent = selectedNames.length;
}



function nameRemove(element) {
  names.push(element);
}

function resetButton() {
  countNames = 0;
  selectedNames.forEach(nameRemove);
  selectedNames.splice(0,selectedNames.length);
  if (selectedNames.lenght === 0) {
    return;
  }
  document.querySelector("#number").innerHTML = countNames;
  document.querySelector("#seznam").textContent = originalContent;
  document.querySelector("#vyherka").textContent = selectedNames;
}
