jQuery(document).ready(function($){


	// LOGIN - Marcar "Recordarme"
	$('#rememberme').attr('checked',true);


	// LOGIN - Texto ayuda
	$('body:not(.login-action-lostpassword).login #nav').append('<span id="info_access">Este acceso es distinto al de tu mail corporativo. Si tienes problemas, puedes escribir a <a href="mailto:somos@grupodatco.com?subject=Problemas de acceso" target="_blank">somos@grupodatco.com</a>.</span>');


});