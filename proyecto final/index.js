const submit = document.getElementById("submit"),
password = document.getElementById("password"),
username = document.getElementById("username"),
visible = document.getElementById("visible");

document.addEventListener("change" , (e)=>{
    if(e.target === visible){
        if(visible.checked === false) password.type = "password";
        else password.type = "text";
    }
});

document.addEventListener("click", (e) =>{
    if (e.target === submit){
        if ( password.value == "tienda" && username.value == "admin"){
            e.preventDefault ();
            window.location.href= "file:///C:/xampp/htdocs/practica%20html/crudelegir.html";
        }
        else
        {
            if ( password.value == "123456" && username.value == "empleado" ){
                e.preventDefault ();
                window.location.href= "file:///C:/xampp/htdocs/practica%20html/ventasempleado.html";
            }
           else {
            alert("acceso denegado, datos incorrectos");
           }
           
        }
        

    }
    

})

