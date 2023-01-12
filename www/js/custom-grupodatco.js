jQuery(document).ready(function() {

	// Mobile - Trasladar elementos del menú
	if ( jQuery(window).width() < 920 ) {
		jQuery('.mobile-hidden>ul>li').appendTo('.mobile-append .sub-menu');
	}

	// Escritorio - Al pasar mouse mostrar descripción de pilares
	if ( jQuery(window).width() > 920 ) {
		jQuery('.pilares .fusion_builder_column_inner .fusion-column-wrapper').hover(
			function() {
				jQuery(this).find('.fusion-text').css('height','70px');
			}, function() {
				jQuery(this).find('.fusion-text').css('height','0');
			}
		);
	}
	
	// IoP:
	if ( jQuery('body').hasClass('page-id-43399') ) {
		jQuery(document).on('click','.suite .fusion-modal-text-link',function() {
			var title_suite = jQuery(this).parent().parent().parent().find('.imageframe-align-center img').attr('alt');
			jQuery('input[name=TITLE]').val(title_suite);
			jQuery('.fusion-modal.contacto-rapido h3').text('Contactar por '+title_suite);
		});
		jQuery(document).on('click','.fusion-menu-item-button .fusion-modal-text-link',function() {
			jQuery('input[name=TITLE]').val(jQuery('.entry-title').text());
			jQuery('.fusion-modal.contacto-rapido h3').text('Contactanos para más información');
		});
	}

	// Si viene de un país:
	if ( jQuery('#wrapper').hasClass('country-flag') ) {
		var ctry = location.pathname;
		ctry = ctry.substring(1,ctry.length-1);
		switch(ctry) {
			case 'ar':
				var ctry_name = 'Argentina';
				break;
			case 'br':
				var ctry_name = 'Brasil';
				break;
			case 'cl':
				var ctry_name = 'Chile';
				break;
			case 'mx':
				var ctry_name = 'México';
				break;
			case 'pe':
				var ctry_name = 'Perú';
				break;
			case 'pr':
				var ctry_name = 'Puerto Rico';
				break;
			case 'uy':
				var ctry_name = 'Uruguay';
				break;
		}
		jQuery('<span> '+ctry_name+'</span>').insertAfter('.country-flag.menu-item.fusion-dropdown-menu>a>span>img');
		jQuery('.fusion-portfolio-post').each(function(i) {
			var curhref = jQuery(this).find('a').attr('href');
			jQuery(this).find('a').attr('href',curhref+'?ctry='+ctry);
		});
	}
	if ( window.location.href.indexOf('?ctry') > -1 ) {
		var urlParams = new URLSearchParams(window.location.search);
		ctry_url = urlParams.get('ctry');
		jQuery('.fusion-logo-link').attr('href','/'+ctry_url);
		jQuery('.country-flag.menu-item').removeClass('hidden');
		jQuery('.country-flag.menu-item.fusion-dropdown-menu>a>span>img').attr('src','/wp-content/uploads/flag-gd_'+ctry_url+'.svg');
		var cur_title = jQuery('.country-flag.menu-item.fusion-dropdown-menu .sub-menu li span img[src*="flag-gd_'+ctry_url+'"]').attr('alt');
		jQuery('.country-flag.menu-item.fusion-dropdown-menu').attr('title',cur_title);
	}

});