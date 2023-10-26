document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar envío del formulario

  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const documento = document.getElementById('documento').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;

  const paquete1Options = document.getElementsByName('paquete1');
  let paquete1SelectedOptions = [];
  for (let i = 0; i < paquete1Options.length; i++) {
    if (paquete1Options[i].checked) {
      paquete1SelectedOptions.push(paquete1Options[i].value);
    }
  }

  let costoTotal = 0;

  paquete1SelectedOptions.forEach((option) => {
    costoTotal += parseFloat(option);
  });

  const formaPago = document.getElementById('formaPago').value;
  if (formaPago === 'efectivo') {
    const descuento = costoTotal * 0.1; // Descuento del 10% si paga en efectivo
    costoTotal *= 0.9; // Aplicar descuento del 10% si paga en efectivo

    // Mensaje de descuento
    const mensajeDescuento = '¡Usted recibirá un descuento del 10% por pagar en efectivo!';

    // Agregar el mensaje de descuento al mensaje principal
    const mensajePrincipal = `¡Gracias por registrarte, ${nombre}! El costo total es de $${costoTotal}. ${mensajeDescuento}`;

    // Mostrar el mensaje en un h2
    const h2Element = document.createElement('h2');
    h2Element.textContent = mensajePrincipal;

    const body = document.body;
    body.appendChild(h2Element);
  } else {
    // Mensaje sin descuento
    const mensajePrincipal = `¡Gracias por registrarte, ${nombre}! El costo total es de $${costoTotal}.`;

    // Mostrar el mensaje en un h2
    const h2Element = document.createElement('h2');
    h2Element.textContent = mensajePrincipal;

    const body = document.body;
    body.appendChild(h2Element);
  }

  // Aquí puedes enviar los datos del registro a un servidor o realizar otras acciones necesarias
});

function borrarSeleccion() {
  const paquete1Options = document.getElementsByName('paquete1');

  for (let i = 0; i < paquete1Options.length; i++) {
    paquete1Options[i].checked = false;
  }

  document.getElementById('valorCompra').innerHTML = 'Valor de Compra: $0';

  // Eliminar el mensaje anterior
  const h2Element = document.querySelector('h2');
  if (h2Element) {
    h2Element.remove();
  }

  localStorage.removeItem('datosCompra');
}

document.getElementsByName('paquete1').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let valorCompra = 0;

    document.getElementsByName('paquete1').forEach(function(option) {
      if (option.checked) {
        valorCompra += parseFloat(option.value);
      }
    });

    document.getElementById('valorCompra').innerHTML = `Valor de Compra: $${valorCompra}`;
  });
});

