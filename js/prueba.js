let edad;
let añoActual = 2023;
let edadCliente;
let Pago;
const Impuesto = "1.5%";


const saludar = (nombreComprador) => alert ("hola " + nombreComprador)

do {
  nombreComprador = prompt("Un gusto en saludarle, por favor ingrese su nombre para continuar").toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
} while (!nombreComprador || !isNaN(nombreComprador));
do {
    edad = parseInt(prompt("Indíquenos su año de nacimiento para corroborar su identidad"));
  } while (isNaN(edad) || edad <= 0);
  edadCliente = añoActual - edad;
  if (edadCliente >= 18) {
    saludar( nombreComprador + " Tu edad actual es " + edadCliente + " puedes continuar con la compra ")
  } else {
    alert("Necesita de un adulto para continuar");
  }
  let opcioneCompra;
  do {
    opcioneCompra = parseInt(prompt("Indíquenos su medio de pago:\n1. Al Contado\n2. Tarjeta de Crédito"));
  } while (isNaN(opcioneCompra) || opcioneCompra < 1 || opcioneCompra > 2);
  if (opcioneCompra === 1) {
    alert("Contamos con descuentos exclusivos");
  } else if (opcioneCompra === 2) {
    let costoFinal;
    do {
      costoFinal = parseFloat(prompt("Indique el costo final de la compra"));
    } while (isNaN(costoFinal) || costoFinal <= 0);
    costoFinal += parseFloat(Impuesto);
    alert("El costo final con impuesto es: " + costoFinal);
  } else {
    alert("Indique una opción válida");
  }
  let continuarComprando = true;
  while (continuarComprando) {
    let costoFinal;
    do {
      costoFinal = parseFloat(prompt("Indique el costo final de la compra"));
    } while (isNaN(costoFinal) || costoFinal <= 0);
    let descuento = 0;
    if (costoFinal >= 100 && costoFinal < 500) {
      descuento = 10;
    } else if (costoFinal >= 500 && costoFinal < 1000) {
      descuento = 20;
    } else if (costoFinal >= 1000) {
      descuento = 30;
    }
    let costoConDescuento = costoFinal - (costoFinal * descuento / 100);
    alert("El costo final con descuento es: " + costoConDescuento);
    let opcionContinuar;
    do {
        opcionContinuar = prompt("¿Desea continuar comprando? (S/N)").toUpperCase();
      } while (opcionContinuar !== "S" && opcionContinuar !== "N");
      if (opcionContinuar !== "S") {
        continuarComprando = false;
        alert("Gracias por su compra. ¡Vuelva pronto!");
      }
    
}