/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// 1-  richiesta informazioni utente
// 2-  generare il numero random per l'uente e il computer
// 3-  sommare e dichiarare il vincitore

// ----------------------------------------------

// recupero scelte utente

var evenOdd = prompt('Pari o Dispari?', 'Pari');

//? Validation evenOdd
while (evenOdd.trim().toLowerCase() !== 'pari' && evenOdd.trim().toLowerCase() !== 'dispari') {
    evenOdd = prompt('Pari o Dispari?', 'Pari');
}
//?  Risultato
console.log(evenOdd);

//* numero scelto dall'utente
var userNumber = parseInt(prompt('Scegli un numero da 1 a 5', '3'));

//? Validation userNumber
while (isNaN(userNumber) || userNumber <= 0 || userNumber > 5) {
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5', '3'));
}
//? Risultato
console.log(userNumber);

// * Funzione per la generazione casuale numero pc
function randomNumber(min, max) {

    //* Generazione numero randomico
    return Math.floor(Math.random() * (5 - 1)) + 1;

}
//*Invocazione funzione randomNumber
var cpuNumber = randomNumber(1, 5);
console.log(cpuNumber);

//* Somma dei  due numeri
let somma = 0;
somma = cpuNumber + userNumber;
console.log(somma);

//* Funzione per determinare se pari se dispari
function isEven(num) {
    if (somma % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//* Invocazione funzione isEven
var result = isEven(somma);

//* Criterio dichiarazione del vincitore

if (result == true && evenOdd.trim().toLowerCase() === 'pari') {
    console.log("L'utente vince");
} else if (result == false && evenOdd.trim().toLowerCase() === 'dispari') {
    console.log("L'utente vince");
} else {
    console.log('Cpu vince');
}








