jQuery(document).ready(function() {
	
	// Trivias: mover título de puntaje:
	jQuery('.ays_score').each(function(i) {
		jQuery(this).insertBefore('.ays_score_message:eq('+i+')');
	});

	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});
		
	// Mostrar contenidos por ajax:
	jQuery('.slick-slide').each(function(i) {
		var href_link = jQuery('.content-title',this).find('a').attr('href');
		if ( (jQuery(this).height() > 150 && jQuery(window).width() > 960) || (jQuery(this).height() > 140 && jQuery(window).width() < 960) ) {
			jQuery(this).addClass('more-info');
			jQuery('.content-details',this).prepend('<a class="masklink" href="'+href_link+'"></a>');
		}
	});
	jQuery('.more-info .content-details a,.post-loop a').magnificPopup({
		type: 'ajax',
		ajax: {
			cursor: 'mfp-ajax-cur',
			tError: 'El contenido no pudo ser cargado.'
		},
		tClose: 'Cerrar (Esc)',
		tLoading: 'Cargando...',
		callbacks: {
			parseAjax: function(mfpResponse) {
				mfpResponse.data = jQuery(mfpResponse.data).find('#content');
			},
			ajaxContentAdded: function() {
				if ( jQuery('#comment').length ) {
					jQuery('#comment').attr({
						'placeholder':'Escribir un comentario...'
					});
				}
			}
		}
	});
	jQuery('#post-content a.sc-button.small[href*="/categoria"]').magnificPopup({
		type: 'ajax',
		ajax: {
			cursor: 'mfp-ajax-cur',
			tError: 'El contenido no pudo ser cargado.'
		},
		tClose: 'Cerrar (Esc)',
		tLoading: 'Cargando...',
		callbacks: {
			parseAjax: function(mfpResponse) {
				mfpResponse.data = jQuery(mfpResponse.data).find('#content .padder');
			}
		}
	});

	// Abrir contador
	/*if ( jQuery.cookie('suprise-viewed') != 'yes' ) {
		jQuery('#open-surprise').magnificPopup({
			items: {
				src: '.container_countdown',
				type: 'inline'
			},
			mainClass: 'mfp-fade',
			zoom: {
				enabled: true,
				duration: 3000,
				easing: 'ease-in-out',
			},
			callbacks: {
				open: function() {
					jQuery.cookie('suprise-viewed','yes',{expires:7});
				},
				close: function() {
					jQuery('.container_countdown').removeClass('mfp-hide');
				}					
			}
		});
		jQuery(document).scroll(function() {
			var y = jQuery(this).scrollTop();
			if ( y > 800 && jQuery('body').hasClass('complete') ) {
				if ( jQuery.cookie('suprise-viewed') != 'yes' ) {
					jQuery('#open-surprise').trigger('click');
				}
			}
		});
	}
	else {
		jQuery('.container_countdown').removeClass('mfp-hide');
	}*/
		
	// Ir hacia parte de la página
	jQuery('a[href^=#goto]').on('click',function(e) {
		var goto_selector = jQuery(this).attr('href').substring(5,jQuery(this).attr('href').length);
		jQuery('html,body').animate({
			scrollTop: jQuery('#'+goto_selector).offset().top-100},
			'slow',
			'easeInBounce'
		);
		e.preventDefault();
	});

	// Mover menú personalizado
	jQuery('#menu40gd').insertAfter('#header');
	
	// Mostrar nota en ventana modal
	if ( window.location.href.indexOf('#open-') > -1 ) {
		var href_link = window.location.href;
		href_link = href_link.substring(href_link.indexOf('#open-')+6,href_link.length);
		href_link = href_link.split('_');
		jQuery(window).load(function(){
			jQuery.magnificPopup.open({
				items: {
					src: 'https://somos.grupodatco.com/'+href_link[0]+'/'+href_link[1],
					type: 'ajax'
				},
				ajax: {
					cursor: 'mfp-ajax-cur',
					tError: 'El contenido no pudo ser cargado.'
				},
				tClose: 'Cerrar (Esc)',
				tLoading: 'Cargando...',
				callbacks: {
					parseAjax: function(mfpResponse) {
						mfpResponse.data = jQuery(mfpResponse.data).find('#content');
					},
					ajaxContentAdded: function() {
						if ( jQuery('#comment').length ) {
							jQuery('#comment').attr({
								'placeholder':'Escribir un comentario...'
							});
						}
					}
				}
			});
		});
	}
});