//*Chiedere all’utente di inserire una parola
//* Creare una funzione per capire se la parola inserita è palindroma /

let userWord = prompt('Inserisci una parola');

//? Validazione userword
while (!userWord || userWord.trim() === '') {
    userWord = prompt('Inserisci una parola');
}

//* Formattazione
userWord = userWord.trim().toLowerCase();
console.log('Parola selezionata', userWord);

// logica per definire se la parola inserita è palindorma

//? 1- Scomporre la parola in un array col metodo split usando una funzione
//? 2- Invertire i caratteri della parola inserita e verificre che siano identici alla parola originnale

//* Scomponiamo la parola dell'utente in un array con il metodo split grazie ad una funzione

function isPalidrome(word) {
    //* Variabile d'appoggio
    var reversedWord = '';

    //* Ciclo per girare la parola al contrario ---- (in questo punto mi sono aiutato un pò con la correzione di Marco fatta in classe ma il resto lo svolto da solo)
    for (var i = word.length - 1; i >= 0; i--) {
        var currentLetter = word[i];
        reversedWord += currentLetter;
    }

    //* Verifica se la parola è palindroma
    if (reversedWord === userWord) {
        console.log('La parola è Palindroma');
    } else {
        console.log('La parola non è Palindroma');
    }
}

//* Invocazione funzione
isPalidrome(userWord);