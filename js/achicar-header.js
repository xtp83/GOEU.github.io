<script>
	window.onscroll = function() {
		if(document.documentElement.scrollTop > 50) {
			document.getElementById("cabecera").style.height = "70px";
			document.getElementById("cabecera").style.fontSize = "10px";
		}
		else {
			document.getElementById("cabecera").style.height = "100px";	
			document.getElementById("cabecera").style.fontSize = "15px";		
		}
	}
</script>