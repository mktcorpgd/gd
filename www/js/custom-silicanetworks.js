jQuery(document).ready(function() {

    // Mapa de red
	if ( jQuery('body').hasClass('page-id-32849') ) {
		jQuery('#wpcf7-f31529-p32849-o1 .wpcf7-submit').val('Descargar mapa de red');
	}

	// Empresas
	if ( jQuery('body').hasClass('page-id-36729') || jQuery('body').hasClass('parent-pageid-36729') ) {

		// Copiar información en campo oculto
		function fullInfoSRV() {
			var service = jQuery('input[name=SRV]:checked').val();
			var srvinternet = jQuery('input[name=SRVINTERNET]:checked').val();
			var srvinternetvel = jQuery('input[name=SRVINTERNETVEL]:checked').val();
			if ( service.indexOf('Internet / Tránsito IP') > -1 ) {
				service = 'Internet '+srvinternet+' ('+srvinternetvel+')';
			}
			jQuery('input[name=SRVFULL]').val(service);
			jQuery('input[name=SRVFULLINFO]').val(service);
		}
		jQuery('input[name=SRV],input[name=SRVINTERNET],input[name=SRVINTERNETVEL]').change(function() {
			fullInfoSRV();
		});
		jQuery('textarea[name=SRVMSG]').on('input',function() {
			var srvfull = jQuery('input[name=SRVFULL]').val();
			var srvmsg = jQuery(this).val();
			var srvfullinfo = srvfull+' / '+srvmsg;
			jQuery('input[name=SRVFULLINFO]').val(srvfullinfo);
		});

		// Cambio URL en logo
		var type_srv = jQuery('.type-srv a').attr('href');
		jQuery('.fusion-logo-link').attr('href',type_srv);

	}
	

	// Animaciones en destacados
	jQuery('.fusion-portfolio.destacados .fusion-portfolio-content-wrapper').hover(
		function() {
			var gif_img = jQuery(this).find('.wp-post-image').attr('src');
			gif_img = gif_img.substring(gif_img.indexOf('s-icon-web-')+11,gif_img.indexOf('-frame'));
			jQuery(this).find('.wp-post-image').attr('srcset','/wp-content/uploads/sites/5/s-icon-web-'+gif_img+'.gif');
		}, function() {
			var gif_img = jQuery(this).find('.wp-post-image').attr('src');
			gif_img = gif_img.substring(gif_img.indexOf('s-icon-web-')+11,gif_img.indexOf('-frame'));
			jQuery(this).find('.wp-post-image').attr('srcset','/wp-content/uploads/sites/5/s-icon-web-'+gif_img+'-frame.jpg');
		}
	);

});