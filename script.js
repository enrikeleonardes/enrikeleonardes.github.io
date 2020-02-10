const elementos = document.getElementsByTagName("formulario"),
		item = formulario.elements,
		boton = document.getElementById("btn");


		var Correo = function(e){

			if (formulario.correo.value == "") {
				console.log("ingrese el campo correo");
				alerta1.innerHTML ="Ingrese El Campo Correo";
				e.preventDefault();

			}
		}

				var contrasena = function(e){

			if (formulario.pass.value == "") {
				console.log("ingrese el campo contraseña");
				alerta2.innerHTML ="Ingrese El Campo contraseña";
				e.preventDefault();

			}
		}


const validacion = function(e){

	Correo(e);
	contrasena(e);



}

		boton.addEventListener("click", validacion);

