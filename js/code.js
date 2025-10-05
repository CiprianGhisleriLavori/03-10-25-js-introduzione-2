function login_funct(){
    //values
    var username= document.getElementById('utente').value;
    var password= document.getElementById('pass').value;
    //classi
    var classe_username=document.getElementById('utente');
    var classe_password=document.getElementById('pass');
    var classe_errore= document.getElementById('errore');
   //db
   var db= data_utenti();
   
   controlla_inserimento_parametri(username,password,classe_username,classe_password,classe_errore);

   controllo_credenziali(username,password,db,classe_username,classe_password,classe_errore);


}

function data_utenti(){
   var array_dati=["admin","admin","ciprian","admin"];
   return array_dati;
}

//funzione che controlla se l'inserimento è vuoto

function controlla_inserimento_parametri(username,password,classe_username,classe_password,classe_errore){

   if(username === ""){
      classe_username.classList.add("error");
      classe_errore.innerText="Inserire nome";
      alert("Inserire Nome");
   }
   if(password === ""){
         classe_password.classList.add("error");
         classe_errore.innerText="Inserire password";
         alert("Inserire Password");
   }
   if(password==="" && username===""){
         classe_errore.innerText="Inserire nome e password";
         alert("Inserire Nome e Password");
   }

}


function controllo_credenziali(username,password,db,classe_username,classe_password,classe_errore){
   for(let i= 0; i< db.length;i +=2 ){
      if(username == db[i]){
         if(password == db[i+1]){
            alert("Loggato!")
            window.location.replace("../views/benvenuto.html");
            localStorage.setItem("utente_accesso", db[i]);
         }
         else{
            inserimento_errato(classe_username,classe_password,classe_errore);
         }
      }

   }
}


function inserimento_errato(classe_username,classe_password,classe_errore){
   classe_username.classList.add('error')
   classe_password.classList.add("error");
   classe_errore.innerText="Nome o Password errati";
}
