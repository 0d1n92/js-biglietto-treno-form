// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
var ticket= [""];
var nome= getElementById('id');
var train;
var carriage;
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
