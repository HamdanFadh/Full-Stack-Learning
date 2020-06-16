var age = Number(prompt("Masukan Umur"));

if(age < 0){
    alert("Salah!");
}
if(age == 21){
    alert("Ini 21, Tepat");
}
if(age % 2 !== 0){
    alert("Ini angka Ganjil");
}
if(age % Math.sqrt(age) == 0){
    alert("Bilangannya akar sempurna");
} else if(age % 2 == 0){
    alert("Ini bilangan genap");
}
