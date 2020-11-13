// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
var ticket= [""];
// ASSEGNO VAR buttonSend ID DEL'ELEMENTO HTML
var buttonSend = document.getElementById('btn_enter');

var train;
var carriage;
// PULSANTE INVIO SPAN ASSEGNO UN'EVENTO ALLA VARIABILE BUTTONSEND
buttonSend.addEventListener ('click',
  function (){
    var nome= document.getElementById("f_name").value;
    var km = document.getElementById("f_range").value;
    console.log (km);
  }
);
// / PULSANTE INVIO SPAN-CLOSE
var ticketPrice= function () {
var rate= 0.21;
if (age < 18 ) {
  var discount = ((km * rate)* 20 /100) ;
  ticketPrice = (km * rate) - discount;

} else if (age > 65) {
  //va applicato uno sconto del 40% per gli over 65.*/
    var discount = ((km * rate) * 40 / 100);
    ticketPrice = (km * rate) - discount;


} else {
    ticketPrice = (km * rate);

}
};

// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
// va applicato uno sconto del 20% per i minorenni;
