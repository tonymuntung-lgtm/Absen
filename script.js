//=================================================
// URL GOOGLE APPS SCRIPT
//=================================================

const URL_WEB_APP = "https://script.google.com/macros/s/AKfycbxp6r96qH9hlK2pLOwIeQ6PkfRx68CGQqCa230eYkcWQuO7YLm5RMgjvMwKt43QKmbKsw/exec";


//=================================================
// DATA GURU
//=================================================

const guru = [

{username:"tony",password:"mimuntung",nama:"Muhamad Fathony"},
{username:"bucarik",password:"mimuntung",nama:"Eva Dian Sofiyanti"},
{username:"jwt",password:"mimuntung",nama:"Jarwati"},
{username:"ati",password:"mimuntung",nama:"Rumar 'Ati"},
{username:"iffa",password:"mimuntung",nama:"Rachma Nur Hanifa"},
{username:"dewi",password:"mimuntung",nama:"Dewi Nurhayati"},
{username:"min",password:"mimuntung",nama:"Amin Solechatun"},
];



//=================================================
// LOGIN
//=================================================

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let berhasil = false;

for(let i=0;i<guru.length;i++){

if(username === guru[i].username &&
password === guru[i].password){

localStorage.setItem("namaGuru",guru[i].nama);

alert("Login Berhasil");

window.location.href = "dashboard.html";

berhasil = true;

break;

}

}

if(!berhasil){

alert("Username atau Password salah.");

}

}


//=================================================
// LOGOUT
//=================================================

function logout(){

localStorage.clear();

alert("Logout Berhasil");

window.location.href="index.html";

}



//=================================================
// KIRIM DATA KE GOOGLE SPREADSHEET
//=================================================

function kirimData(nama,status){

let sekarang = new Date();

let data = {

nama:nama,
tanggal:sekarang.toLocaleDateString("id-ID"),
jam:sekarang.toLocaleTimeString("id-ID"),
status:status

};


fetch(URL_WEB_APP,{

method:"POST",

body:JSON.stringify(data)

})

.then(response => response.text())

.then(result =>{

alert(result);

})

.catch(error =>{

alert("Data gagal dikirim.");

console.log(error);

});


}



//=================================================
// ABSEN MASUK
//=================================================

function absenMasuk(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Hadir");

}


//=================================================
// ABSEN PULANG
//=================================================

function absenPulang(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Pulang");

}


//=================================================
// IZIN
//=================================================

function izin(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Izin");

}


//=================================================
// SAKIT
//=================================================

function sakit(){

let nama = localStorage.getItem("namaGuru");

kirimData(nama,"Sakit");

}



//=================================================
// EXPORT EXCEL
//=================================================

function exportExcel(){

alert("Fitur Export Excel akan dibuat dari Google Spreadsheet.");

}



//=================================================
// EXPORT PDF
//=================================================

function exportPDF(){

alert("Fitur Export PDF akan dibuat dari Google Spreadsheet.");

}



//=================================================
// RIWAYAT ABSENSI
//=================================================

function riwayatAbsensi(){

alert("Fitur Riwayat Absensi sedang dibuat.");

}



//=================================================
// SERVICE WORKER (PWA)
//=================================================

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

.then(function(){

console.log("PWA Aktif");

})

.catch(function(error){

console.log(error);

});

}