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
	
	// Si es una página de país:
	if ( jQuery('.fusion-fullwidth.country-flag').length ) {
		jQuery('#wrapper').addClass('country-flag');
		jQuery('.country-flag').removeClass('hidden');
		var flag = window.location.pathname;
		flag = flag.substring(1,flag.length-1);
		switch(flag) {
			case 'ar':
				var ctry_name = 'Argentina';
				var ctry_url = 'ar';
				break;
			case 'br':
				var ctry_name = 'Brasil';
				var ctry_url = 'br';
				break;
			case 'cl':
				var ctry_name = 'Chile';
				var ctry_url = 'cl';
				break;
			case 'mx':
				var ctry_name = 'México';
				var ctry_url = 'mx';
				break;
			case 'pe':
				var ctry_name = 'Perú';
				var ctry_url = 'pe';
				break;
			case 'pr':
				var ctry_name = 'Puerto Rico';
				var ctry_url = 'pr';
				break;
			case 'uy':
				var ctry_name = 'Uruguay';
				var ctry_url = 'uy';
				break;
		}
		jQuery('.country-flag.menu-item>a').attr('href','/'+ctry_url);
		jQuery('.country-flag.menu-item.fusion-dropdown-menu>a>span>img').attr('src','/wp-content/uploads/flag-'+ctry_url+'.svg');
		var cur_title = jQuery('.country-flag.menu-item.fusion-dropdown-menu .sub-menu li span img[src*="flag-'+ctry_url+'"]').attr('alt');
		jQuery('.country-flag.menu-item.fusion-dropdown-menu').attr('title',ctry_name);
		jQuery('.fusion-button,.menu-item a').each(function(i) {
			var curhref = jQuery(this).attr('href');
			if ( curhref.indexOf('?') > -1 ) {
				jQuery(this).attr('href',curhref+'&ctry='+ctry_url);
			}
			else {
				jQuery(this).attr('href',curhref+'?ctry='+ctry_url);
			}
		});
		jQuery('.fusion-logo-link').attr('href','/'+ctry_url);
		jQuery('.country-flag.menu-item > a > span.menu-text').empty();
		jQuery('.country-flag.menu-item > a > span.menu-text').html('<img src="/wp-content/uploads/flag-'+ctry_url+'.svg" alt="'+ctry_name+'" /><span> '+ctry_name+'</span>');
	}

	// Si viene de una página de país:
	if ( window.location.href.indexOf('ctry') > -1 ) {
		var urlParams = new URLSearchParams(window.location.search);
		ctry = urlParams.get('ctry');
		switch(ctry) {
			case 'ar':
				var ctry_name = 'Argentina';
				var ctry_url = 'ar';
				break;
			case 'br':
				var ctry_name = 'Brasil';
				var ctry_url = 'br';
				break;
			case 'cl':
				var ctry_name = 'Chile';
				var ctry_url = 'cl';
				break;
			case 'mx':
				var ctry_name = 'México';
				var ctry_url = 'mx';
				break;
			case 'pe':
				var ctry_name = 'Perú';
				var ctry_url = 'pe';
				break;
			case 'pr':
				var ctry_name = 'Puerto Rico';
				var ctry_url = 'pr';
				break;
			case 'uy':
				var ctry_name = 'Uruguay';
				var ctry_url = 'uy';
				break;
		}
		jQuery('.fusion-button,.menu-item a').each(function(i) {
			var curhref = jQuery(this).attr('href');
			if ( curhref.indexOf('?') > -1 ) {
				jQuery(this).attr('href',curhref+'&ctry='+ctry_url);
			}
			else {
				jQuery(this).attr('href',curhref+'?ctry='+ctry_url);
			}
		});
		jQuery('.fusion-logo-link').attr('href','/'+ctry_url);
		jQuery('.country-flag.menu-item > a > span.menu-text').empty();
		jQuery('.country-flag.menu-item > a > span.menu-text').html('<img src="/wp-content/uploads/flag-'+ctry_url+'.svg" alt="'+ctry_name+'" /><span> '+ctry_name+'</span>');
	}

});