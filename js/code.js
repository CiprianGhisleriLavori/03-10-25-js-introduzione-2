function login_funct(){
    //values
    var username= document.getElementById('utente').value;
    var password= document.getElementById('pass').value;
    //classi
    var classe_username=document.getElementById('utente');
    var classe_password=document.getElementById('pass');
   //db
   var db= data_utenti();
}

function data_utenti(){
   var array_dati=["admin","admin"];
   return array_dati;
}