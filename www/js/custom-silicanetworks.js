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


	// FORMULARIOS - Salesforce
	function fullInfo() {
		if ( jQuery('body').hasClass('page-id-36729') || jQuery('body').hasClass('parent-pageid-36729') ) {
			var srv = jQuery('select[name=SRV] option:selected').val();
			var srv_index = jQuery('select[name=SRV]').prop('selectedIndex');
			if ( srv_index == 1 || srv_index == 2 ) {
				var srvspeed = jQuery('select[name=SRVSPEED] option:selected').val();
				srv = srv+' ('+srvspeed+')';
				console.log(srv);
				jQuery('input[name=MSG]').val(srv);
			}
		}
	}
	jQuery('select[name=SRV],select[name=SRVSPEED]').change(function() {
		jQuery(this).addClass('activefield');
		fullInfo();
	});
	jQuery('textarea[name=MSG]').on('input',function() {
		jQuery(this).addClass('activefield');
		fullInfo();
	});
	jQuery('textarea[name=MSG],select[name=SRV],select[name=SRVSPEED]').on('blur',function() {
		jQuery(this).removeClass('activefield');
	});

	
});