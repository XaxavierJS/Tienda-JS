class poleras {
  constructor(talla, material, genero, condicion) {
    this.talla = talla;
    this.material = material;
    this.genero = genero;
    this.condicion = condicion;
  }
  mostrarInfo() {
    let info = `Esta polera tiene la talla ${this.talla}, esta fabricado en ${this.material}, es un producto ${this.condicion} y es ${this.genero}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere optio neque vero, consequatur, earum magni ut illo laudantium veniam architecto aspernatur amet, ex voluptatibus cum excepturi! Necessitatibus consectetur ratione cum!`;
    return info;
  }
}

const polera1 = new poleras("Xl", "Algodon", "unisex", "reacondicionado");
const polera2 = new poleras("XXL", "fibra Sintetica", "Femenino", "Nuevo");
const polera3 = new poleras("L", "Poliester", "Masculino", "Usado");
const polera4 = new poleras("M", "Algodon", "femenino", "Nuevo");
const polera5 = new poleras("XS", "Poliester", "unisex", "Reacondicionado");
const polera6 = new poleras("M", "Fibra Sintetica", "Masculino", "Nuevo");

// dom
const listaPolera = document.querySelectorAll(".prendas__bloque");
const inicio = document.querySelector(".prendas");
const info = document.querySelector(".info-articulo");
const titulo = document.getElementById("titulo");
const backArrow = document.getElementById("backArrow");
const ArrowUp = document.getElementById("arrowUp");

const descripcionPolera = document.getElementById("descripcionPolera");
const nombrePolera = document.getElementById("nombrePolera");
const sloganPolera = document.getElementById("sloganPolera");
const img = document.querySelector(".img_prenda");

// backArror
backArrow.addEventListener("click", cambiarInfo);
// seleccionar articulo
listaPolera.forEach((polera) => {
  polera.addEventListener("click", (e) => {
    abrirArticulo(e);
  });
});
// Abrir articulo
function cambiarInfo() {
  inicio.classList.toggle("hidden");
  info.classList.toggle("hidden");
}
// Mostrar informacion del articulo
function abrirArticulo(remera) {
  cambiarInfo();
  const papa = remera.target.parentNode.id;
  nombrePolera.innerHTML = "Polera " + papa;
  if (papa === "negra") {
    img.src = "../Img/polera1.jpg";
    descripcionPolera.innerText = polera1.mostrarInfo();
  } else if (papa === "gris") {
    img.src = "../Img/polera2.webp";
    descripcionPolera.innerText = polera2.mostrarInfo();
  } else if (papa === "blanca") {
    img.src = "../Img/polera3.webp";
    descripcionPolera.innerText = polera3.mostrarInfo();
  } else if (papa === "stun") {
    img.src = "../Img/polera4.webp";
    descripcionPolera.innerText = polera4.mostrarInfo();
  } else if (papa === "ccs") {
    img.src = "../Img/polera5.webp";
    descripcionPolera.innerText = polera5.mostrarInfo();
  } else if (papa === "dreamture") {
    img.src = "../Img/polera6.webp";
    descripcionPolera.innerText = polera6.mostrarInfo();
  }
}

// titulo
function desplazar() {
  window.scrollTo(0, 0);
}
titulo.addEventListener("click", desplazar);

ArrowUp.addEventListener("click", desplazar);
