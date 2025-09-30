/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
const n1 = 12;
const n2 = 25;
if (n1 > n2) {
  console.log(
    "il numero N1 è",
    n1,
    "il numero N2 è",
    n2,
    "quindi N1 è maggiore di N2"
  );
} else {
  console.log(
    "il numero N1 è",
    n1,
    "il numero N2 è",
    n2,
    "quindi N2 è maggiore di N1"
  );
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
const n3 = 3;
if (n3 !== 5) {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
const n4 = 15;
if (n4 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
const n5 = 25;
const n6 = 5;
if (n5 === 8 || n6 === 8 || n5 + n6 === 8 || n5 - n6 === 8) {
  console.log(
    "n5 è",
    n5,
    "n6 è",
    n6,
    "uno dei due numeri dati è 8 oppure la loro somma o sottrazione è 8"
  );
} else {
  console.log(
    "n5 è",
    n5,
    "n6 è",
    n6,
    "nessuno dei numeri dati è 8 e nemmeno la somma o sottrazione dei due numeri fa 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5 eCOMMERCE");
let totalShoppingCart = 23;
if (totalShoppingCart > 50) {
  console.log(
    "il totale è:",
    totalShoppingCart,
    "hai diritto alla spedizione gratuita poiché il tuo carrello supera i 50 euro"
  );
} else {
  console.log(
    "il totale è:",
    totalShoppingCart + 10,
    "non hai diritto alla spedizione gratuita poiché il tuo carrello non supera i 50 euro"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6 CARRELLO BLACK FRIDAY");
let totalShoppingCart1 = 70;
const blackFridayDiscount = 0.2;
let shoppingCartBlackFriday = totalShoppingCart1 * (1 - blackFridayDiscount);
console.log("il totale dei prodotti è", totalShoppingCart1);
console.log(
  "Poiché oggi è il Black Friday è stato applicato uno sconto 20% ora il totale dei prodotti è",
  shoppingCartBlackFriday
);
if (shoppingCartBlackFriday > 50) {
  console.log(
    "il totale è:",
    shoppingCartBlackFriday,
    "hai diritto alla spedizione gratuita poiché il tuo carrello supera i 50 euro"
  );
} else {
  console.log(
    "il totale è:",
    shoppingCartBlackFriday + 10,
    "poiché non hai diritto alla spedizione gratuita poiché il tuo carrello non supera i 50 euro"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");
let n7 = 2;
let n8 = 151;
let n9 = 10;
let o1, o2, o3;

if (n7 >= n8 && n7 >= n9) {
  o1 = n7; //il primo è n7
  if (n8 >= n9) {
    //il secondo sarà n8
    o2 = n8;
    o3 = n9;
  } else {
    //altrimenti il secondo è n9
    o2 = n9;
    o3 = n8;
  }
} else if (n8 >= n7 && n8 >= n9) {
  o1 = n8; //il primo è n8
  if (n7 >= n9) {
    o2 = n7; //il secondo è n7
    o3 = n9;
  } else {
    // altrimenti il secondo è n9
    o2 = n9;
    o3 = n7;
  }
} else if (n9 >= n7 && n9 >= n8) {
  o1 = n9; // il primo è n9
  if (n7 >= n8) {
    o2 = n7;
    o3 = n8;
  }
} else {
  o2 = n8;
  o3 = n7;
}

console.log("i valori ordinati sono:", o1, o2, o3);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8 typeof");
let j = "automobile";
console.log(j, "=", typeof j);
if (typeof j === "number") {
  console.log("il valore è un numero");
} else {
  console.log("il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9 ALGORITMO PER VERIFICARE SE PARI O DISPARI");
let x = 346;
if (x % 2 === 0) {
  console.log("x è", x, "il numero è pari");
} else {
  console.log("x è", x, "il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10 fixare il codice");
let val = 7;
console.log(val, " è");
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 11 aggiungere una proprietà city");
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 12 rimuovere la proprietà lastName");
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 13 eliminare ultima proprieta di skills");
console.log(me.skills);
me.skills.pop();
console.log(me.skills);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 14 creazione ARRAY vuoto da riempire");
const numbers = Array(10);
console.log(numbers);
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;
numbers[4] = 5;
numbers[5] = 6;
numbers[6] = 7;
numbers[7] = 8;
numbers[8] = 9;
numbers[9] = 10;
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("Esercizio 15 sostituzione di un valore nell array");
console.log(numbers);
numbers[9] = 100;
console.log(numbers);
