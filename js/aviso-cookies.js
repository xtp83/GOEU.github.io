/*se definen las variables a utilizar a partir de los métodos que capturan los ID's definidos en index.html*/
const botonAceptarCookies=document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
const cabecera = document.getElementById('cabecera');
const main = document.getElementById('main');
/*---------------------------------------------------------------------------------------------------------------------------*/
/*definición de una variable global para el Google Tag Manager.*/
dataLayer = [];
/*---------------------------------------------------------------------------------------------------------------------------*/
/*sólo deben aparecer el aviso de cookies y el fondo bloqueado cuando al preguntar por el localStorage de la sesión no conste conforme el usuario ha aceptado la política de cookies.*/
if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');	
	cabecera.classList.remove('activo');
	main.classList.remove('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
	cabecera.classList.add('activo');
	main.classList.add('activo');
}
/*---------------------------------------------------------------------------------------------------------------------------*/
/*detectamos el evento de pulsar el botón al hacer un click sobre él y ejecutamos una función que deshabilita la opción activa del aviso cookies y del fondo bloqueado. Si el usuario ha aceptado pulsando el botón Acepto entonces guardamos esta información en la variable localStorage.*/
botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');
	localStorage.setItem('cookies-aceptadas', true);
	dataLayer.push({'event': 'cookies-aceptadas'});
	cabecera.classList.add('activo');
	main.classList.add('activo');
});
