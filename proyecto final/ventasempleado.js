window.onload = function() {
    mostrarData();
}

function limpiarFormulario() {
    document.getElementById('id').value = "";
    document.getElementById('prenda').value = "";
    document.getElementById('talle').value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("opciones").value = "";
    document.getElementById("precio").value = "";
}

function mostrarData() {
    var tablaVentas;
    if (localStorage.getItem('tablaVentas') == null) {
        tablaVentas = [];
    } else {
        tablaVentas = JSON.parse(localStorage.getItem('tablaVentas'));
    }
    var html = ""; 
    tablaVentas.forEach(function (elemento, index) {
        html+="<tr>";
        html += "<td>"+elemento.id+"</td>";
        html += "<td>"+elemento.prenda+"</td>";
        html += "<td>"+elemento.talle+"</td>";
        html += "<td>"+elemento.cantidad+"</td>";
        html += "<td>"+elemento.marca+"</td>";
        html += "<td>"+elemento.precio+"</td>";
        html += "<td>"+"<button class='btn btn-dark' onclick='editar(" + index + ")'>Editar</button>" +" "+
            "<button class='btn btn-danger' onclick='eliminar(" + index + ")'>Eliminar</button>" + "</td>";
        html += "</tr>";
    });
    document.getElementById('tablaVentas').getElementsByTagName('tbody')[0].innerHTML = html;
}

function guardarVenta() {
    let id = document.getElementById('id').value;
    let prenda = document.getElementById('prenda').value;
    let talle = document.getElementById('talle').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;
    let marcaSelect = document.getElementById('opciones');
    let marca = marcaSelect.options[marcaSelect.selectedIndex].value;
    var tablaVentas;
    
    if (localStorage.getItem('tablaVentas') == null) {
        tablaVentas = [];
    } else {
        tablaVentas = JSON.parse(localStorage.getItem('tablaVentas'));
    }
    tablaVentas.push({
       id: id,
       prenda: prenda,
       talle: talle,
       cantidad: cantidad,
       marca: marca,
       precio: precio,
    });
    localStorage.setItem('tablaVentas', JSON.stringify(tablaVentas));
    mostrarData();
    limpiarFormulario();
}

function eliminar(index) {
    var tablaVentas;
    if (localStorage.getItem('tablaVentas') == null) {
        tablaVentas = [];
    } else {
        tablaVentas = JSON.parse(localStorage.getItem('tablaVentas'));
    }
    tablaVentas.splice(index, 1); 
    localStorage.setItem('tablaVentas', JSON.stringify(tablaVentas));
    mostrarData();
}

function editar(index){
    document.getElementById('btnGuardar').style.display = 'none';
    document.getElementById('btnActualizar').style.display= 'block';
    var tablaVentas;
    if (localStorage.getItem('tablaVentas') == null) {
        tablaVentas = [];
    } else {
        tablaVentas = JSON.parse(localStorage.getItem('tablaVentas'));
    }
    document.getElementById('id').value= tablaVentas[index].id;
    document.getElementById('prenda').value= tablaVentas[index].prenda;
    document.getElementById('talle').value= tablaVentas[index].talle;
    document.getElementById("cantidad").value= tablaVentas [index].cantidad;
    document.getElementById("opciones").value= tablaVentas [index].marca;
    document.getElementById("precio").value= tablaVentas [index].precio;

    document.querySelector('#btnActualizar').onclick = function() {
        tablaVentas [index].id = document.getElementById('id').value;
        tablaVentas [index].prenda = document.getElementById('prenda').value;
        tablaVentas [index].talle = document.getElementById('talle').value;
        tablaVentas [index].cantidad = document.getElementById('cantidad').value;
        tablaVentas [index].marca = document.getElementById('opciones').value;
        tablaVentas [index].precio = document.getElementById('precio').value;
        localStorage.setItem('tablaVentas', JSON.stringify(tablaVentas));
        mostrarData();
        document.getElementById('btnGuardar').style.display = 'block';
        document.getElementById('btnActualizar').style.display = 'none';
    }
}

function finalizarcompra(){

        alert('compra realizada con exito');
    }

function cerrarsesion(){

    window.location.href = "file:///C:/xampp/htdocs/practica%20html/logintienda.html";

}