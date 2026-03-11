function goHome(){

document.getElementById("home").style.display="block"
document.getElementById("dudas").style.display="none"
document.getElementById("links").style.display="none"

}

function showDudas(){

document.getElementById("home").style.display="none"
document.getElementById("dudas").style.display="block"
document.getElementById("links").style.display="none"

}

function showLinks(){

document.getElementById("home").style.display="none"
document.getElementById("dudas").style.display="none"
document.getElementById("links").style.display="block"

}

function toggle(id){

let e=document.getElementById(id)

if(e.classList.contains("hidden")){
e.classList.remove("hidden")
}else{
e.classList.add("hidden")
}

}

function goNotas(){

window.location.href="AQUI_TU_LINK_DE_GITHUB"

}
