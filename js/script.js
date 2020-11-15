
// button id element
var buttonSend = document.getElementById('btn_enter');
var buttonDel = document.getElementById('btn_delete');

//var form assegned element html id
var fName=document.getElementById("f_name");
var fRange=document.getElementById("f_range");
var fAge= document.getElementById("f_age_range");

//id train code
var trainCodeId=document.getElementById('train_code');

//table ticket
var printTicket=  document.getElementById('print_ticket');

// PULSANTE INVIO ASSEGNO UN'EVENTO ALLA VARIABILE BUTTONSEND
buttonSend.addEventListener ('click',
  function (){

    var name= fName.value;
    var km = fRange.value;
    var age= fAge.value;

    if (name!="" && km!="" && km !=0 && age!="") {
    var ticketPrice= fx_price(age, km); //function price calc
    var train= Math.floor(Math.random()*100000) + 900000; //numero treno
    var carriage= Math.floor(Math.random()*9 ) + 1; //carrozza
    fx_typeTrain (trainCodeId);
    trainCodeId.innerHTML+= train;
    document.getElementById('passeger').innerHTML= name;
    document.getElementById('carriage').innerHTML= carriage;
    printTicket.className="show";
    var c= 1;
  } else {

    alert("i campi non risultano correttamente compilati")

  }

  }

);


// BUTTON delete
buttonDel.addEventListener ('click',
  function (){
    //delete all value
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


//function  price calc a=age b=km
function fx_price(a, b) {
  //assegned id tab td element html
  var tablePrice = document.getElementById('ticket_price');

  var rate= 0.21; //costo km
  //prezzo
  var price= b * rate;

  var stringPrice="Standard"
  //age > 65
  if (a=="senior") {
    price*= 1 - 40/100;
    stringPrice="Sconto Silver"
  } else if (a=="minor") {
      // prezzo*1-percentuale di sconto
      //price=km*prezzoalkm-20%
      price*= 1 - 20/100;
      stringPrice="Minorenne"
  }
  document.getElementById("discount").innerHTML= stringPrice;
  tablePrice.innerHTML= price.toFixed(2)+"€";
}

function fx_typeTrain(position) {
  var random= Math.floor(Math.random()*3) + 1;
  var typeTrain= "<strong>Regionale</strong>\t"
  if (random==1){
     typeTrain="<strong>Intercity</strong>\t";
  } else if (random==2) {
    typeTrain="<strong>Freccia</strong>\t"
  }
  trainCodeId.innerHTML= typeTrain;

}
