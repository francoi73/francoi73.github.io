//Menu lateral
var menu_visible=false;
var menu=document.getElementById("nav");

function mostrarOcultarMenu( ){
  if(menu_visible==false){
    menu.style.display="block";
    menu_visible=true
  }
  else{
    menu.style.display="none";
    menu_visible=false;
  }
}
//ocultar el menu al usar una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


// Barras de progreso
function crearBarra(id_barra) {
  for (let i ; i < 20; i++) { 
      let div = document.createElement("div");
      div.className = "e";
      id_barra.appendChild(div);
  }
}
var html = document.getElementById("html");
crearBarra(html);
var javascript = document.getElementById("javascript");
crearBarra(javascript);
var wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
var photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
var php = document.getElementById("php");
crearBarra(php);
var illustrator = document.getElementById("illustrator");
crearBarra(illustrator);

var entro = false;

function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && !entro) { 
      entro = true;
      animateBar(html, 19);
      animateBar(javascript, 18);
      animateBar(wordpress, 12);
      animateBar(photoshop, 16);
      animateBar(php, 16);
      animateBar(illustrator, 11);
  }
}

function animateBar(bar, cantidad) {
  let elementos = bar.getElementsByClassName("e");
  let count = 0;
  const interval = setInterval(function () {
      if (count < cantidad) {
          elementos[count].style.backgroundColor = "#8d3ee0";
          count++;
      } else {
          clearInterval(interval);
      }
  }, 100);
}

window.onscroll = function(){
  efectoHabilidades();
}
