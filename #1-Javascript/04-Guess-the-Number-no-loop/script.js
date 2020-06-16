console.warn("NGAPAIN!!!")
alert("Tebak nomor 1 sampai 4");

// create number
var nomor = Math.floor(Math.random() * Math.floor(5));

alert(nomor);
// tanya berapa
var tebakan = Number(prompt("Berapa hayo?"));

// cek tebakan

if(tebakan < nomor){
    alert("kukekecilan");
}   else if(tebakan > nomor){
    alert("kegedean");
}   else{
    alert("pass");
}