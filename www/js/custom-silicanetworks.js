jQuery(document).ready(function() {

	// MENÚ - Cambio URL en logo
	if ( jQuery('.type-srv').length ) {
		var type_srv = jQuery('.type-srv a').attr('href');
		jQuery('.fusion-logo-link').attr('href',type_srv);
	}
	
    // Mapa de red
	if ( jQuery('body').hasClass('page-id-32849') ) {
		jQuery('#wpcf7-f31529-p32849-o1 .wpcf7-submit').val('Descargar mapa de red');
	}

	// FORMULARIOS - Abrir formulario de contacto
	if ( window.location.href.indexOf('#') > -1 ) {
		if ( window.location.href.indexOf('#mapa') > -1 ) {
			jQuery('#open-descargar-mapa').trigger('click');
		}
	}

});