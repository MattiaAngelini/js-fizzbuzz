//Consegna:
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


//BONUS 1:
//Crea un container nel DOM , aggiungendo un elemento html con il numero o 
//la stringa corretta da mostrare.

//BONUS 2:
//Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*,
// a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


//START

//  selettore per il container creato nel DOM, 
//in cui inserirò box con all'interno valori del ciclo FOR.
const numbContainer = document.querySelector('#numbers-container');

// stampare in console tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
   
    let numberMod;
    //Per i multipli di 3 e di 5 stampi “Fizzbuz” al posto del numero.  
    if (i % 3 === 0 && i % 5 === 0) {
        numberMod = "FizzBuzz";
    } else if (i % 3 === 0) {
        // Per i multipli di 3 stampi “Fizz” al posto del numero.
        numberMod = "Fizz";  
    } else if (i % 5 === 0) {
        // Per i multipli di 5 stampi “Buzz” al posto del numero.
        numberMod = "Buzz";
        // altrimenti stampi valore di i.
    } else {
        numberMod = i;
    }

    //BONUS 1//
     // creo costante che crea un elemento <div>
     const newBox = document.createElement('div');
     // all'interno dell'elemento creato inserisco come contenuto i valori del loop for.
     newBox.innerHTML = numberMod;
     // all'elemento creato aggiungo la classe .box creata precedentemente nel css.
     newBox.classList.add('box');

    //BONUS 2//
    // creo condizione per aggiungere una classe alle box (bg-color nel css),
    // in base ai risultati delle condizioni precedenti si applicano
    // classi bg-color qui selezionate:
    
     if (numberMod === "Fizz") {
        newBox.classList.add('fizz');
    } else if (numberMod === "Buzz") {
        newBox.classList.add('buzz');
    } else if (numberMod === "FizzBuzz") {
        newBox.classList.add('fizzbuzz');
    }

     // "appendo" l'elemento appena creato  al container presente nel DOM.
     numbContainer.append(newBox);

}

    