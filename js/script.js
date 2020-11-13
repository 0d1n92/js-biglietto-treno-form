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
var ticketPrice;
// PULSANTE INVIO SPAN ASSEGNO UN'EVENTO ALLA VARIABILE BUTTONSEND
buttonSend.addEventListener ('click',
  function (){
    var nome= document.getElementById("f_name").value;
    var km = document.getElementById("f_range").value;
    var age= document.getElementById("f_age_range").value;
    console.log (km);
    var ticketPrice= fx_price(age, km);
  }

);
// / PULSANTE INVIO SPAN-CLOSE
function fx_price(a, b) {

  var rate= 0.21;
  if (a == "minor" ) {
    var discount = ((b * rate)* 20 /100) ;
    ticketPrice = (b * rate) - discount;

  } else if (a == "senior") {
    //va applicato uno sconto del 40% per gli over 65.*/
      var discount = ((b * rate) * 40 / 100);
      ticketPrice = (b * rate) - discount;


  } else {
      ticketPrice = (b * rate);

  }
  console.log(ticketPrice)
}




// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
// va applicato uno sconto del 20% per i minorenni;
