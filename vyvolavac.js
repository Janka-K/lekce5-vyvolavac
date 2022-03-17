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


//je potreba vyrobit resetovaci tlacitko vyvolavace

function reset(element){
    jmena.push(element);
    //tazenaJmena.splice(element,tazenaJmena.length);
}



function resetButton(index){
    count = 0;
    tazenaJmena.forEach(reset);
    tazenaJmena.splice(index,tazenaJmena.length);
    if (tazenaJmena.lenght === 0){
        return;
    }
    let score = document.querySelector("#number").innerHTML = count;
    document.querySelector("#seznam").textContent = tazenaJmena;
    document.querySelector("#vyherka").textContent = tazenaJmena;
}