//prima parte
const nome= "Ciprian";
var faruk ="faruk";

var variabile = document.getElementById('form-class').innerText ;
alert(variabile);

document.getElementById('p-js').innerText = nome;
function sorpresa_faruk(){
document.getElementById('faruk').innerText =faruk;
}

//fine prima parte
function accedi_bottone(array_nomi_e_password){
    if(document.getElementById('nome').value === ""){
        alert("Non puo essere vuoto");
        
        document.getElementById("nome").classList.add('border-red');
    }
    else{
       document.getElementById('nome').classList.add('border-green');
       for (i=0 ;i<array_nomi_e_password.lenght; i++ ){
           var nome = document.getElementById('nome').value;
           var password = document.getElementById('password').value;
           if (nome === array_nomi_e_password[i]  &&  password === array_nomi_e_password[i+1]){
               alert("Accesso eseguito");
           }
       }
   }
    
}

function registra_bottone(array_nomi_e_password){
        if(document.getElementById('nome').value === ""){
        alert("Non puo essere vuoto");
        document.getElementById("nome").classList.add('border-red');
    }
    else{
        var nome = document.getElementById('nome').value;
        var password = document.getElementById('password').value;
        array_nomi_e_password.push(nome,password);
       document.getElementById('nome').classList.add('border-green');
       console.log(array_nomi_e_password);
       return array_nomi_e_password;
   }
    
}

function init_registrazione(){
    var array_nomi_e_password= [];
    return array_nomi_e_password;
    
}
