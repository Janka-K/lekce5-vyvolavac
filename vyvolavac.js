let jmena = [
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
    "Soňa"
];

let tazenaJmena = [];

let count = 0;

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return; // return bez hodnoty ukonci funkci
    }

    // Generujeme náhodný index
    let winnerIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu

    let winnerName = jmena[winnerIndex];

    // Vyřadíme vylosované jméno z osudí

    let deleteWinnerName = jmena.splice(winnerIndex,1);

    // Výherní jméno si uložíme do pole k ostatním výherním

    //tazenaJmena.push(winnerName);

    tazenaJmena.unshift(winnerName);



    let winner = document.querySelector("#vyherka");
    winner.textContent = winnerName;


    let list = document.querySelector("#seznam");
    list.textContent = tazenaJmena;
    
    let winnerCount = document.querySelector("#number");
    winnerCount.textContent = tazenaJmena.length;
}