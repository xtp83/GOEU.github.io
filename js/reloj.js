(function(){
	var actualizarHora = function() {
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampn,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();
		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		var semanaCatalan = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
		var semanaEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		pDiaSemana.textContent = semana[diaSemana];
	/*	pDiaSemanaCatalan.textContent = semanaCatalan[diaSemana];  */
	/*	pDiaSemanaEnglish.textContent = semanaEnglish[diaSemana];  */
		pDia.textContent = dia;
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		var mesesCatalan = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
		var mesesEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		pMes.textContent = meses[mes];
	/*	pMesCatalan.textContent = mesesCatalan[mes];  */
	/*	pMesEnglish.textContent = mesesEnglish[mes];  */
		pYear.textContent = year;
		/*sólo para el formato inglés.*/
		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		};
		if (horas == 0) {
			horas = 12;
		};
		/**/
		if (horas < 10) {
			horas = "0" + horas;
		};
		if (minutos < 10) {
			minutos = "0" + minutos;
		};
		if (segundos < 10) {
			segundos = "0" + segundos;
		};
		pHoras.textContent = horas;
		pAMPM.textContent = ampm;
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};
	actualizarHora();
	var intervalo = setInterval(actualizarHora,1000);
})();