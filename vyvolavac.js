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

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return; // return bez hodnoty ukonci funkci
    }

    // Generujeme náhodný index
    let winnerIndex = Math.floor((Math.random() * jmena.length));

    // Získáme výherní jméno na patřičném indexu

    let winnerName = jmena[winnerIndex];

    // Vyřadíme vylosované jméno z osudí

    let deleteWinnerName = jmena.splice(winnerIndex,1);

    // Výherní jméno si uložíme do pole k ostatním výherním

    tazenaJmena.push(winnerName);
    
}