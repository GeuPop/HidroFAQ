function goHome(){

document.getElementById("home").classList.remove("hidden");

document.getElementById("dudas").classList.add("hidden");

document.getElementById("links").classList.add("hidden");

}



function showDudas(){

document.getElementById("home").classList.add("hidden");

document.getElementById("dudas").classList.remove("hidden");

document.getElementById("links").classList.add("hidden");

}



function showLinks(){

document.getElementById("home").classList.add("hidden");

document.getElementById("dudas").classList.add("hidden");

document.getElementById("links").classList.remove("hidden");

}



function toggle(id){

document.getElementById(id).classList.toggle("hidden");

}



function goNotas(){

window.location.href="https://TU-PAGINA-DE-NOTAS-AQUI";

}
