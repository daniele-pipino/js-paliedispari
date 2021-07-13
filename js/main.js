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
console.log(evenOdd);

// todo validation

var userNumber = parseInt(prompt('Scegli un numero da 1 a 5', '3'));
console.log(userNumber);

// todo validation

// generazione casuale numero pc

function randomNumber(min, max) {

    // generazione numero randomico
    return Math.floor(Math.random() * (5 - 1)) + 1;

}

var cpuNumber = randomNumber(1, 5);
console.log(cpuNumber);






