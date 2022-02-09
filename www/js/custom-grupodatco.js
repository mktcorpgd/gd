jQuery(document).ready(function() {

	// En mobile trasladar elementos del menú
	if ( jQuery(window).width() < 920 ) {
		jQuery('.mobile-hidden>ul>li').appendTo('.mobile-append .sub-menu');
	}

	// En escritorio al pasar mouse mostrar descripción de pilares
	if ( jQuery(window).width() > 920 ) {
		jQuery('.pilares .fusion_builder_column_inner .fusion-column-wrapper').hover(
			function() {
				jQuery(this).find('.fusion-text').css('height','70px');
			}, function() {
				jQuery(this).find('.fusion-text').css('height','0');
			}
		);
	}
	
	// Ocultar partners:
	if ( jQuery('.no-partners').length ) {
		jQuery('body').addClass('no-partners');
	}
    // Si necesita branding: Datco, Focus, Interservices, Sersat:
	if ( jQuery('.branding').length ) {
		jQuery('body').addClass('branding');
		var branding =jQuery('.fusion-fullwidth.branding').attr('class');
		branding = branding.substring(branding.indexOf('branding')+9,branding.length);
		branding = branding.substring(0,branding.indexOf(' '));
		jQuery('#wrapper,#boxed-wrapper').addClass(branding);
		jQuery('#wrapper .fusion-logo-link img').attr('srcset','');
		if ( jQuery('.fusion-fullwidth.branding').hasClass('grupo_datco') ) {
			jQuery('#wrapper .fusion-standard-logo,#wrapper .fusion-mobile-logo').attr('src','/wp-content/uploads/'+branding+'-ima_h-one_stroke-dark.svg');
		}
		else if ( jQuery('.fusion-fullwidth.branding').hasClass('networks0g') ) {
			jQuery('#wrapper .fusion-standard-logo,#wrapper .fusion-mobile-logo').attr('src','/wp-content/uploads/'+branding+'-ima_h-one_stroke-dark.svg');
			jQuery('<img src="/wp-content/uploads/sigfox_0goperator-dark.svg" width="121" height="48" alt="Sigfox 0G Operator" class="sigfox_0goperator" />').insertAfter('#wrapper .fusion-standard-logo,#wrapper .fusion-mobile-logo');
		}
		else {
			if ( jQuery('body').hasClass('single-avada_portfolio') ) {
				jQuery('#wrapper .fusion-standard-logo,#wrapper .fusion-mobile-logo').attr('src','/wp-content/uploads/'+branding+'-white.svg');
			}
			else {
				jQuery('#wrapper .fusion-standard-logo,#wrapper .fusion-mobile-logo').attr('src','/wp-content/uploads/'+branding+'-ima_h-one_stroke-dark-es.svg');
			}
		}
		jQuery('link[rel="shortcut icon"]').attr('href','/favicon_'+branding+'.ico');		
	}

    // Sophos XG:
	if ( jQuery('body').hasClass('postid-38401') || jQuery('body').hasClass('postid-39246') ) {

		// Mostrar/ocultar precios según variable <target>
		jQuery('.prices').hide();
		var target_name = decodeURIComponent(jQuery.getPrm('target'));
		if ( target_name == 'corp' ) {
			jQuery('.prices.corp').show();
		}
		else if ( target_name == 'isp' ) {
			jQuery('.prices.isp').show();
			jQuery('.term-isp').text('abonados');
		}

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

    // CONTENIDOS - Si requiere agregar CTA
	if ( jQuery('body').hasClass('single') ) {
		if ( jQuery('#content>article').hasClass('category-tecnologia-cuidado-personal') ) {
			jQuery('#text-17').insertAfter('.post-content>.fusion-fullwidth.fusion-builder-row-1 p:last');
		}
	}

	// SI VIENE DE UN PAÍS:
	if ( jQuery('#wrapper').hasClass('country-flag') ) {
		var ctry = location.pathname;
		ctry = ctry.substring(1,ctry.length-1);
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