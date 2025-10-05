window.addEventListener("DOMContentLoaded", function() {
    
  const user = localStorage.getItem("utente_accesso");

  if (user) {
    document.getElementById("nome").innerText = "Benvenuto, " + user + "!";
  }
});

//addeventlistener può essere anche tolto