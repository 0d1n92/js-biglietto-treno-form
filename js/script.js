
// ASSEGNO VAR buttonSend ID DEL'ELEMENTO HTML
var buttonSend = document.getElementById('btn_enter');
var buttonDel = document.getElementById('btn_delete');
var fName=document.getElementById("f_name");
var fRange=document.getElementById("f_range");
var fAge= document.getElementById("f_age_range");
var trainCodeId=document.getElementById('train_code');
var printTicket=  document.getElementById('print_ticket');
var ticketPrice;
// PULSANTE INVIO SPAN ASSEGNO UN'EVENTO ALLA VARIABILE BUTTONSEND
buttonSend.addEventListener ('click',
  function (){
    var name= fName.value;
    var km = fRange.value;
    var age= fAge.value;
    if (name!="" && km!="" && km !=0 && age!="") {
    var ticketPrice= fx_price(age, km);
    var train= Math.floor(Math.random()*100000) + 900000;
    var carriage= Math.floor(Math.random()*9 ) + 1;
    fx_typeTrain (trainCodeId);
    trainCodeId.innerHTML+= train;
    document.getElementById('passeger').innerHTML= name;
    document.getElementById('carriage').innerHTML= carriage;

    printTicket.className="show";
  } else {
    alert("i campi non risultano corretamente compilati")
  }
  }

);
// BUTTONSEND delete
buttonDel.addEventListener ('click',
  function (){
    printTicket.className="hidden";
    var ticketPrice= "";
    var name= fName.value="";
    var km = fRange.value="";
    var age= fAge.value="";
    document.getElementById('passeger').innerHTML= "";
    document.getElementById('carriage').innerHTML= "";
    document.getElementById('train_code').innerHTML= "";
    document.getElementById('ticket_price').innerHTML="";
    document.getElementById("discount").innerHTML="";
  }

);

//funzione calcolo prezzo
function fx_price(a, b) {
  var price = document.getElementById('ticket_price');
  var typeTicket= document.getElementById("discount").innerHTML= "Standard";
  var rate= 0.21;
  // Categoria selezionata dall'utente (offerta)
  if (a == "minor" ) {
    var discount = ((b * rate)* 20 /100) ;
    priceTot = (b * rate) - discount;
    typeTicket.innerHTML= "Sconto Minorenni";
    price.innerHTML= priceTot.toFixed(2)+"€";

  } else if (a == "senior") {
    //va applicato uno sconto del 40% per gli over 65.*/
      var discount = ((b * rate) * 40 / 100);
      priceTot = (b * rate) - discount;
        typeTicket.innerHTML= "Sconto Silver";
        price.innerHTML= priceTot.toFixed(2)+"€";

  } else {
    priceTot = (b * rate)
    price.innerHTML= priceTot.toFixed(2)+"€";

  }
}

function fx_typeTrain(position) {
  var random= Math.floor(Math.random()*3) + 1;

  if (random==1){
    position.innerHTML="<strong>Regionale</strong>\t";

  } else if (random==2) {
      position.innerHTML="<strong>Intercity</strong>\t";

  } else {
    position.innerHTML="<strong>Freccia</strong>\t"
  }
}


// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
