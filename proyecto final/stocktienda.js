window.onload = function() {
    mostrarData();
}

function limpiarFormulario() {
    document.getElementById('prendas faltantes').value = "";
    document.getElementById('talle').value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("opciones").value = "";
    document.getElementById("precio de costo").value = "";
}

function mostrarData() {
    var listaStock;
    if (localStorage.getItem('listaStock') == null) {
        listaStock = [];
    } else {
        listaStock = JSON.parse(localStorage.getItem('listaStock'));
    }
    var html = ""; 
    listaStock.forEach(function (elemento, index) {
        html+="<tr>";
        html += "<td>"+elemento.prendasfaltantes+"</td>";
        html += "<td>"+elemento.talle+"</td>";
        html += "<td>"+elemento.cantidad+"</td>";
        html += "<td>"+elemento.marca+"</td>";
        html += "<td>"+elemento.preciodecosto+"</td>";
        html += "<td>"+"<button class='btn btn-dark' onclick='editar(" + index + ")'>Editar</button>" +" "+
            "<button class='btn btn-danger' onclick='eliminar(" + index + ")'>Eliminar</button>" + "</td>";
        html += "</tr>";
    });
    document.getElementById('tablaStock').getElementsByTagName('tbody')[0].innerHTML = html;
}

function cargarfaltante() {
    let prendasfaltantes = document.getElementById('prendasfaltantes').value;
    let talle = document.getElementById('talle').value;
    let cantidad = document.getElementById('cantidad').value;
    let preciodecosto = document.getElementById('preciodecosto').value;
    let marcaSelect = document.getElementById('opciones');
    let marca = marcaSelect.options[marcaSelect.selectedIndex].value;
    var listaStock;
    
    if (localStorage.getItem('listaStock') == null) {
        listaStock = [];
    } else {
        listaStock = JSON.parse(localStorage.getItem('listaStock'));
    }
    listaStock.push({
       prendasfaltantes: prendasfaltantes,
       talle: talle,
       cantidad: cantidad,
       marca: marca,
       preciodecosto: preciodecosto,
        
    });
    localStorage.setItem('listaStock', JSON.stringify(listaStock));
    mostrarData();
    limpiarFormulario();
}

function eliminar(index) {
    var listaStock;
    if (localStorage.getItem('listaStock') == null) {
        listaStock = [];
    } else {
        listaStock = JSON.parse(localStorage.getItem('listaStock'));
    }
    listaStock.splice(index, 1); 
    localStorage.setItem('listaStock', JSON.stringify(listaStock));
    mostrarData();
}

function editar(index){
    document.getElementById('btnGuardar').style.display = 'none';
    document.getElementById('btnActualizar').style.display= 'block';
    var listaStock;
    if (localStorage.getItem('listaStock') == null) {
        listaStock = [];
    } else {
        listaStock = JSON.parse(localStorage.getItem('listaStock'));
    }
    document.getElementById('prendasfaltantes').value= listaStock[index].prendasfaltantes;
    document.getElementById('talle').value= listaStock[index].talle;
    document.getElementById("cantidad").value= listaStock [index].cantidad;
    document.getElementById("opciones").value= listaStock [index].marca;
    document.getElementById("preciodecosto").value= listaStock [index].preciodecosto;

    document.querySelector('#btnActualizar').onclick = function() {
        listaStock [index].prendasfaltantes = document.getElementById('prendasfaltantes').value;
        listaStock [index].talle = document.getElementById('talle').value;
        listaStock [index].cantidad = document.getElementById('cantidad').value;
        listaStock [index].marca = document.getElementById('opciones').value;
        listaStock [index].preciodecosto = document.getElementById('preciodecosto').value;
        localStorage.setItem('listaStock', JSON.stringify(listaStock));
        mostrarData();
        document.getElementById('btnGuardar').style.display = 'block';
        document.getElementById('btnActualizar').style.display = 'none';
    }

}


function volver(){
    window.location.href = "file:///C:/xampp/htdocs/practica%20html/crudelegir.html";

}

function cerrarsesion(){

    window.location.href = "file:///C:/xampp/htdocs/practica%20html/logintienda.html";

}