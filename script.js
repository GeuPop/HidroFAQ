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

function goNotas(){

alert("Aquí puedes poner el enlace a las notas del curso");

}

function toggle(id){

var element=document.getElementById(id);

if(element.classList.contains("hidden")){

element.classList.remove("hidden");

}else{

element.classList.add("hidden");

}

}
