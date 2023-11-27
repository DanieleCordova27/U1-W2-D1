/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//Partiamo dicendo che i datatype in JavaScript sono 4 tipi:
//1-ASSEGNAZIONE, ossia quando al valore di un elemento "a" viene banalmente collegato attraverso un filo un "nome identificativo".
let a= "vocale"
console.log("il valore di 'a' è", a) //ciò significa che "il valore di a è vocale".
//2-ARITMETICI, ossia quando al valore di un elemento "b" viene collegato attraverso un altro filo un "numero identificativo", ma
//stavolta potremmo usare più elementi per fare ogni tipo di operazione. 
let b= 2
let c= 2
let d= b+c
console.log("quanto vale d?", d) //stavolta abbiamo detto che b vale 2, esattamente come c, però d è la somma dei precedenti
//elementi: cioè 4.
//3-COMPARAZIONE, ossia quando mettiamo a confronto 2 elementi cercando di capire se sono maggiori(>), uguali(===), minori(<),
//oppure come in rari casi sia maggiori che uguali(>=) o minori ed uguali(<=).
//In questo caso le risposte che ci verranno suggerite potranno essere "TRUE"(vero) o "FALSE"(falso).
let num1= 5
let num2= 10
let num3= 10
console.log("num1<num2") //ora ad esempio ci viene detto che "num1" corrisponde al valore 5, mentre "num2" e "num3"a 10.
//quindi è corretto dire che 5 sia minore di 10, perciò la risposta che otterremo sarà "TRUE", nel caso in cui avremmo letto
//num1>num2 sarebbe stato scorretto, quindi "FALSE".
//4-LOGICI, ossia quando leghiamo attraverso "&&", separiamo con "||" oppure neghiamo con "!", ricevendo sempre la stessa risposta
//di prima (TRUE o FALSE)
console.log("num1<num2||num2>=num3") //ora ci dice che num1 è minore di num2(TRUE) OPPURE num2 è maggiore o uguale di num3(TRUE) 
//con "&&" sarebbero dovuti essere tutti giusti come in questo caso per renderlo vero, altrimenti anche una risposta falsa 
//lo avrebbe reso sbagliato. Con "||" serve che ce ne sia anche solo uno vero e sarà sempre corretto.


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName= "Daniele"
console.log("il valore di myName è", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a1= 12
let a2= 20
let a3= a1 + a2 //a1=12 + a2=20 ----> 22 è la soluzione.

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x= 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let myName= "Cordova" 
 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y= 4
let z= y - x
console.log("il valore di z è", z)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1= "john"
let name2= "John"
console.log(!"name1===name2") //in questo modo dichiaro che NON sono uguali name1 e name2 
console.log("name1!==name2") //è solo un altro modo per dire la stessa cosa