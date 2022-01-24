const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo electrónico.
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
/*	telefono: /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/
   Esto valida los siguientes formatos:
+44 07988-825 465 (con cualquier combinación de guiones en lugar de espacio, excepto que solo un espacio debe seguir al +44)
+44 (0) 7988-825 465 (con cualquier combinación de guiones en lugar de espacios, excepto que no puede existir ningún guión                         directamente antes o después del (0) y el espacio antes o después del (0) no necesita existir)
123 456-789 0123 (con cualquier combinación de guiones en lugar de los espacios)
123-123 123 (con cualquier combinación de guiones en lugar de los espacios)
123 123456 (el espacio puede ser reemplazado por un guión)
1234567890
*/
}

const campos = {
	usuario: false,
	nombre: false,
	apellidos: false,
	password: false,
	correo: false,
	telefono: false,
	sexo: false,
	mensaje: false
}
	
const descNombre = document.getElementById('nombre');
const descApellidos = document.getElementById('apellidos');
const descCorreo = document.getElementById('correo');
const hombreChecked = document.getElementById('hombre');
const mujerChecked = document.getElementById('mujer');
const numTelefono = document.getElementById('telefono');

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":   // el campo teléfono es OPCIONAL. Sólo se valida si se informa dicho campo.
			if(numTelefono.value.length !== 0){
				validarCampo(expresiones.telefono, e.target, 'telefono');				
			} else {
				document.getElementById(`grupo__telefono`).classList.remove('formulario__grupo-incorrecto');
				document.getElementById(`grupo__telefono`).classList.add('formulario__grupo-correcto');
				document.querySelector(`#grupo__telefono i`).classList.add('fa-check-circle');
				document.querySelector(`#grupo__telefono i`).classList.remove('fa-times-circle');
				document.querySelector(`#grupo__telefono .formulario__input-error`).classList.remove('formulario__input-error-activo');
				campos[campo] = true;
			}
		break;      
		case "sexo": 
			validarsexo();
		break;
		case "mensaje":
			validarmensaje();
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

const validarsexo = () => {
	
	if(hombreChecked.checked || mujerChecked.checked) {
		document.getElementById(`grupo__sexo`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__sexo`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__sexo i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__sexo i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__sexo .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['sexo'] = true;
	} else {
		document.getElementById(`grupo__sexo`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__sexo`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__sexo i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__sexo i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__sexo .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['sexo'] = false;
	}
}

const validarmensaje = () => {
	
	const textmensaje = document.getElementById('mensaje');
	
	if(textmensaje.value.length == 0){
		document.getElementById(`grupo__mensaje`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__mensaje`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__mensaje i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__mensaje i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__mensaje .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['mensaje'] = false;
	} else {
		document.getElementById(`grupo__mensaje`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__mensaje`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__mensaje i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__mensaje i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__mensaje .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['mensaje'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
	input.addEventListener('keyup', validarmensaje);
	input.addEventListener('blur', validarmensaje);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
	validarsexo();
	validarmensaje();
	
	if(campos.nombre && campos.apellidos && campos.correo /* && campos.telefono */ && campos.sexo && campos.mensaje){
	 /*  (hombreChecked.checked || mujerChecked.checked) && campos.mensaje){  */
		 formulario.reset();
		
		 document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		 setTimeout(() => {
		  	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		 }, 5000);

		 document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
		 	icono.classList.remove('formulario__grupo-correcto');
		 });
		
		 document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
	} else {
		 document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});