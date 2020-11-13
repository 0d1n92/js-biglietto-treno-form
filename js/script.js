// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// ASSEGNO VAR buttonSend ID DEL'ELEMENTO HTML
var buttonSend = document.getElementById('btn_enter');
var train;
var ticketPrice;
// PULSANTE INVIO SPAN ASSEGNO UN'EVENTO ALLA VARIABILE BUTTONSEND
buttonSend.addEventListener ('click',
  function (){
    var name= document.getElementById("f_name").value;
    console.log(name);
    var km = document.getElementById("f_range").value;
    var age= document.getElementById("f_age_range").value;
    var ticketPrice= fx_price(age, km);
    var train= Math.floor(Math.random()*100000) + 900000;
    var carrige= Math.floor(Math.random()*9 ) + 1;
    document.getElementById('passeger').innerHTML= name;
    document.getElementById('carrozza').innerHTML= carrige;
    document.getElementById('train_code').innerHTML= train;
  }

);
// BUTTONSEND delete
buttonSend.addEventListener ('click',
  function (){
    var name= document.getElementById("f_name").value;
    console.log(name);
    var km = "";
    var age= "";
    var ticketPrice= "";
    var train= "";
    var carriage= "";
    document.getElementById('passeger').innerHTML= name;
    document.getElementById('carrige').innerHTML= carrige;
    document.getElementById('train_code').innerHTML= train;

  }

);

//funzione calcolo prezzo
function fx_price(a, b) {
  var price = document.getElementById('ticket_price');
  var typeTicket= document.getElementById("discount").innerHTML= "Standard";
  var rate= 0.21;
  if (a == "minor" ) {
    var discount = ((b * rate)* 20 /100) ;
    priceTot = (b * rate) - discount;
    typeTicket.innerHTML= "Sconto Minorenni";
    console.log(priceTot);
    price.innerHTML= priceTot.toFixed(2);

  } else if (a == "senior") {
    //va applicato uno sconto del 40% per gli over 65.*/
      var discount = ((b * rate) * 40 / 100);
      priceTot = (b * rate) - discount;
        typeTicket.innerHTML= "Sconto Silver";
        price.innerHTML= priceTot.toFixed(2);

  } else {
    priceTot = 3.4;
    price.innerHTML= priceTot.toFixed(2);

  }
}




// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
// va applicato uno sconto del 20% per i minorenni;
