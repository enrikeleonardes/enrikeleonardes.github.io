const elementos = document.getElementsByTagName("formulario"),
		item = formulario.elements,
		boton = document.getElementById("btn");
		

		var Correo = function(e){

			if (correo.formulario.value == "") {
				console.log("ingrese el campo correo");
				e.preventDefault();

			}
		}

				var contrasena = function(e){

			if (pass.formulario.value == "") {
				console.log("ingrese el campo contraseña");
				e.preventDefault();

			}
		}


const validacion = function(e){

	Correo(e);
	Password(e);



}

		boton.addEventListener("click", validacion);

