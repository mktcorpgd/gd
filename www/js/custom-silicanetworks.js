jQuery(document).ready(function() {

    // Mapa de red
	if ( jQuery('body').hasClass('page-id-32849') ) {
		jQuery('#wpcf7-f31529-p32849-o1 .wpcf7-submit').val('Descargar mapa de red');
	}

	// Copiar información en campo oculto
	function fullInfo() {
		var msg = jQuery('textarea[name=MSG]').val();
		if ( jQuery('body').hasClass('page-id-36729') || jQuery('body').hasClass('parent-pageid-36729') ) {
			var srv = jQuery('select[name=SRV] option:selected').val();
			var srv_index = jQuery('select[name=SRV]').prop('selectedIndex');
			if ( srv_index == 1 || srv_index == 2 ) {
				var srvspeed = jQuery('select[name=SRVSPEED] option:selected').val();
				srv = srv+' ('+srvspeed+')';
			}		
			if ( msg.length > 0 ) {
				jQuery('input[name=PAINSF]').val(srv+' / '+msg);
			}
			else {
				jQuery('input[name=PAINSF]').val(srv);
			}
		}
		else {
			jQuery('input[name=PAINSF]').val(msg);
		}
	}
	jQuery('select[name=SRV],select[name=SRVSPEED').change(function() {
		fullInfo();
	});
	jQuery('textarea[name=MSG]').on('input',function() {
		fullInfo();
	});

	// Cambio URL en logo
	if ( jQuery('.type-srv').length ) {
		var type_srv = jQuery('.type-srv a').attr('href');
		jQuery('.fusion-logo-link').attr('href',type_srv);
	}

});