jQuery(document).ready(function() {

    // Mapa de red
	if ( jQuery('body').hasClass('page-id-32849') ) {
		jQuery('#wpcf7-f31529-p32849-o1 .wpcf7-submit').val('Descargar mapa de red');
	}

	// Empresas
	function fullInfo() {
		var service = jQuery('input[name=SRV]:checked').val();
		var srvinternet = jQuery('input[name=SRVINTERNET]:checked').val();
		var srvinternetvel = jQuery('input[name=SRVINTERNETVEL]:checked').val();
		var msg = jQuery('textarea[name=MSG]').attr('value');
		if ( service.indexOf('Internet') > -1 ) {
			service = 'Internet '+srvinternet+' ('+srvinternetvel+')';
		}
		jQuery('input[name=FULLINFO').val(service+' / '+msg);
	}
	jQuery('input[name=SRV],input[name=SRVINTERNET],input[name=SRVINTERNETVEL]').change(function() {
		fullInfo();
	});
	jQuery('textarea[name=MSG]').on('input',function() {
		fullInfo();
	});
	

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