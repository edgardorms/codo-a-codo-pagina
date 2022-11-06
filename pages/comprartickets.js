//seccion constantes y variables

const ticketPrecio = 200;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");


//seccion funciones

function resetTotal() {
  total.innerHTML = "";
}

function pagoTotal() {

    //evaluaciones campos 

  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre");
    nombre.focus();
    return;
  }

  if (apellido.value === "") {
    alert("Por favor, escribe tu apellido");
    apellido.focus();
    return;
  }

  if (correo.value === "") {
    alert("Por favor, escribe tu correo");
    correo.focus();
    return;
  }

  if (categoria.value == 0) {
    alert("Selecciona una categoria");
    categoria.focus();
    return;
  }

  //seccion calculo valor tickets

  let totalValorTickets = cantidad.value * ticketPrecio;

  if (categoria.value == 1) {
    totalValorTickets = totalValorTickets;
  } else if (categoria.value == 2) {
    totalValorTickets =
      totalValorTickets - (descuentoEstudiante / 100) * totalValorTickets;
  } else if (categoria.value == 3) {
    totalValorTickets =
      totalValorTickets - (descuentoTrainee / 100) * totalValorTickets;
  } else if (categoria.value == 4) {
    totalValorTickets =
      totalValorTickets - (descuentoJunior / 100) * totalValorTickets;
  }
//insertar valor en html
  total.innerHTML = totalValorTickets;
}

//botones

btnResumen.addEventListener("click", pagoTotal);
btnBorrar.addEventListener("click", resetTotal);
