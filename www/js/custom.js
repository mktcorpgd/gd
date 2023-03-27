// GENERAL - Función para obtener variables GET
jQuery.getPrm = function(name){var results=new RegExp('[?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}else{return results[1]||0;}}

// GENERAL - Función para normalizar textos
var normalize=(function(){var from="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",to="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",mapping={};for(var i=0,j=from.length;i<j;i++)mapping[from.charAt(i)]=to.charAt(i);return function(str){var ret=[];for(var i=0,j=str.length;i<j;i++){var c=str.charAt(i);if(mapping.hasOwnProperty(str.charAt(i))){ret.push( mapping[c]);}else{ret.push(c);}}return ret.join('').replace(/[^-A-Za-z0-9]+/g,'-').toLowerCase();}})();

// FORMULARIOS - Ejecutar al confirmar envío de mail
document.addEventListener('wpcf7mailsent', function(e) {

	// Variables
	var event_action = '';


	// grupodatco.com
	if ( e.detail.contactFormId == 35652 ) {
		event_action = 'Contacto';
	}
	else if ( e.detail.contactFormId == 22540 ) {
		event_action = 'Recurso';
	}


	// baitcon.com
	if ( e.detail.contactFormId == 27561 ) {
		event_action = 'Contacto';
		var callback = function () {
			if (typeof(url) != 'undefined') {
				window.location = url;
			}
		};
		gtag('event', 'conversion', {
			'send_to': 'AW-10869955594/qOq2CMqV_asDEIq4mb8o',
			'event_callback': callback
		});		
	}
	else if ( e.detail.contactFormId == 27563 ) {
		event_action = 'Recurso';
	}


	// silicanetworks.com
	else if ( e.detail.contactFormId == 22820 ) {
		event_action = 'Contacto (ES)';
	}
	else if ( e.detail.contactFormId == 31529 ) {
		event_action = 'Recurso (ES)';
	}
	else if ( e.detail.contactFormId == 31114 ) {
		event_action = 'Contacto (EN)';
	}
	else if ( e.detail.contactFormId == 33992 ) {
		event_action = 'Recurso (EN)';
	}
	else if ( e.detail.contactFormId == 24097 ) {
		event_action = 'Contacto (BR)';
	}
	else if ( e.detail.contactFormId == 33995 ) {
		event_action = 'Recurso (BR)';
	}


	// velocom.com.ar
	else if ( e.detail.contactFormId == 23530 ) {
		event_action = 'Contacto Internet';
		gtag('event', 'conversion', {'send_to': 'AW-698636057/nP_BCLC5ufYBEJmukc0C'});
	}
	else if ( e.detail.contactFormId == 19204 ) {
		event_action = 'Solicitud';
	}
	else if ( e.detail.contactFormId == 25052 ) {
		event_action = 'Contacto Fibra';
		jQuery('.controls.pac-target-input').removeClass('warning').removeClass('sent');
		jQuery('.wpcf7-response-inner').remove();
	}


	// Enviar evento
	ga('send', {
		hitType: 'event',
		eventCategory: 'Formularios',
		eventAction: event_action
	});

}, false);


// FORMULARIOS - Ejecutar al enviar con o sin error
document.addEventListener('wpcf7submit', function(e) {
	jQuery('.wpcf7.sending .wpcf7-submit').val(jQuery('.wpcf7.sending .wpcf7-submit').attr('name')).removeClass('sending').removeAttr('readonly');
	jQuery('.wpcf7.sending input,.wpcf7.sending select,.wpcf7.sending textarea').removeClass('sending');
	jQuery('.wpcf7').removeClass('sending');
	jQuery('.wpcf7-submit').trigger('blur');
}, false);


// Menú transparente
function scrollHeaderTransp() {
	var scroll = jQuery(window).scrollTop();
	if ( scroll < 20 ) {
		jQuery('.fusion-header-wrapper').addClass('on-top');
	}
	else {
		jQuery('.fusion-header-wrapper').removeClass('on-top');
	}
}


jQuery(document).ready(function() {

	
	// GENERAL - Guardar código de idioma
	var lang = jQuery('html').attr('lang').substring(0,2);

	
	// GENERAL - Si es una landing:
	if ( jQuery('.landing').length ) {
		jQuery('.fusion-wrapper').addClass('landing');
	}


	// MENÚ - Si tiene la clase: convertir en transparente el fondo del header
	if ( jQuery('.post-content .header-transparent').length ) {
		jQuery('#wrapper').addClass('header-transparent');
	}
	scrollHeaderTransp();
	jQuery(window).scroll(function() {
		scrollHeaderTransp();
	});


	// CONTENIDOS - Si slider está vacío:
	var sdltr = jQuery('#sliders-container').text();
	if ( sdltr.length > 1 ) {
		jQuery('#sliders-container').addClass('has-content');
	}
  

	// CONTENIDOS - Abrir en una nueva pestaña
	jQuery(document).on('click','#prensa .fusion-post-content.post-content>h2>a,#prensa span.meta-tags a',function(e) {
		window.open(this.href,'_blank');
		e.preventDefault();
		e.stopPropagation();
	});


	// CONTENIDOS - Eliminar atributos title de las imágenes
	jQuery('#content a[title]').each(function(i){jQuery(this).removeAttr('title');});
	jQuery('#content img[title]').each(function(i){jQuery(this).removeAttr('title');});
	jQuery('.fusion-icon-blogger').each(function(i){jQuery(this).removeAttr('title');});


	// CONTENIDOS - Ocultar párrafos con espacios en blanco
	jQuery('p').filter(function(){return jQuery.trim(this.innerHTML)===''}).remove();
	jQuery('p').filter(function(){return jQuery.trim(this.innerHTML)==='&nbsp;'}).remove();


	// CONTENIDO - Mostrar mes actual
	if ( jQuery('.cur_year').length || jQuery('.cur_month').length ) {
		const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
		const d = new Date();
		var getDaysInMonth = function(month,year) {
			return new Date(year, month, 0).getDate();
		};
		var lastday = getDaysInMonth(d.getMonth()+1,d.getFullYear());
		var cur_month = monthNames[d.getMonth()];
		var cur_year = new Date().getFullYear();
		jQuery('.cur_month').text(cur_month);
		jQuery('.cur_year').text(cur_year);
		jQuery('.last_day').text(lastday);
	}


	// RECURSO - Mostrar preview
	if ( jQuery('body.single-format-link').length ) {
		var site_id = jQuery('body').attr('class');
		site_id = site_id.substr(site_id.indexOf('site-id-')+8,2);
		site_id = site_id.trim();
		var link_ref = window.location.pathname;
		link_ref = link_ref.substring(link_ref.indexOf('/')+1,link_ref.length-1);
		if ( site_id != 1 ) { // si no es grupodatco.com
			site_id = 'sites/'+site_id+'/';
		}
		else {
			site_id = '';
		}
		if ( jQuery('.wpml-ls-native').length ) {
			link_ref = link_ref.substring(3,link_ref.length);
		}
		jQuery('.avada-page-titlebar-wrapper').css('background-image','url(/wp-content/uploads/'+site_id+link_ref+'-pdf-large.jpg');
		jQuery('<img src="/wp-content/uploads/'+site_id+link_ref+'-pdf-large.jpg" width="300" class="preview" />').insertBefore('#main .wpcf7');
	}


	// PORTFOLIO - Agregar botones en cards
	if ( jQuery('.fusion-portfolio').length ) {
		var btn_info;
		var btn_left;
		var btn_right
		jQuery('.fusion-portfolio-post').each(function(i) {
			var link_post = jQuery('.fusion-portfolio-post:eq('+i+') h2 a').attr('href');
			if ( lang == 'es' ) {
				btn_info = 'Más info';
				btn_left = 'Conocer más';
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
					btn_right = 'Prueba gratuita';
				}
				else {
					btn_right = 'Contactar';
				}
			}
			else if ( lang == 'en' ) {
				btn_info = 'More info';
				btn_left = 'Learn more';
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
					btn_right = 'Free trial';
				}
				else {
					btn_right = 'Contact';
				}
			}
			else if ( lang == 'pt' ) {
				btn_info = 'Mais info';
				btn_left = 'Saber mais';
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
					btn_right = 'Teste grátis';
				}
				else {
					btn_right = 'Contato';
				}
			}
			var classes_button = 'fusion-button button-flat fusion-button-round button-default';
			var modal = ' data-toggle="modal" data-target=".fusion-modal';
			if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
				classes_button += ' fusion-modal-text-link';
				modal += '.demo"';
			}
			else {
				if ( lang == 'es' ) {
					modal += '.contacto-rapido"';
				}
				else if ( lang == 'en' ) {
					modal += '.contacto-rapido-en"';
				}
				else if ( lang == 'pt' ) {
					modal += '.contacto-rapido-pt"';
				}
			}
			var html_buttons;
			var btn_q;
			if ( !jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('tag-solo-contacto') || !jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('c-solo-contacto') ) {
				html_buttons = '<a class="'+classes_button+'" href="'+link_post+'"><span class="fusion-button-text">'+btn_left+'</span></a>';
				var btn_q = 'two';
			}
			html_buttons += '<a class="'+classes_button+' fusion-modal-text-link" '+modal+'><span class="fusion-button-text">'+btn_right+'</span></a>';
			jQuery('.fusion-portfolio-post:eq('+i+') .fusion-portfolio-content').append('<a href="#info" class="more-info"><i class="fa-solid fa-angle-down"></i> <span>'+btn_info+'</span></a><div class="fusion-buttons '+btn_q+'">'+html_buttons+'</div>');
		});
	}


	// PORTFOLIO - Desktop / Mostrar/ocultar información
	if ( jQuery(window).width() > 920 ) {
		var btn_info;
		var btn_hide;
		if ( lang == 'es' ) {
			btn_info = 'Más info';
			btn_hide = 'Ocultar';
		}
		else if ( lang == 'en' ) {
			btn_info = 'Info';
			btn_hide = 'Hide';
		}
		else if ( lang == 'pt' ) {
			btn_info = 'Mais info';
			btn_hide = 'Ocultar';
		}
		jQuery('.fusion-portfolio-post h2 a,.fusion-portfolio-content-wrapper .fusion-image-wrapper a').on('click',function(e) {
			jQuery(this).closest('article').toggleClass('expanded');
			jQuery('.fusion-portfolio article').toggleClass('opacity');
			var $more_info = jQuery(this).closest('article').find('.more-info');
			$more_info.toggleClass('open');
			if ( $more_info.hasClass('open') ) {
				$more_info.find('span').text(btn_hide);
			}
			else {
				$more_info.find('span').text(btn_info);
			}
			e.preventDefault();
		});
		jQuery('.fusion-portfolio .more-info').on('click',function(e) {
			jQuery(this).closest('article').toggleClass('expanded');
			jQuery('.fusion-portfolio article').toggleClass('opacity');
			jQuery(this).toggleClass('open');
			if ( jQuery(this).hasClass('open') ) {
				jQuery(this).find('span').text(btn_hide);
			}
			else {
				jQuery(this).find('span').text(btn_info);
			}
			e.preventDefault();
		});
		if ( jQuery('.fusion-portfolio').length ) {
			jQuery('html').on('click',function(e) {
				var expanded = e.target.closest('.expanded');
				if (!expanded) {
					jQuery('.fusion-portfolio article').removeClass('visible').removeClass('expanded').removeClass('opacity');
					jQuery('.more-info').removeClass('open');
					jQuery('.more-info span').text(btn_info);
				}
			});
			jQuery(document).on('keydown',function(e) {
				if ( e.key == 'Escape' ) {
					jQuery('.fusion-portfolio article').removeClass('visible').removeClass('expanded').removeClass('opacity');
					jQuery('.more-info').removeClass('open');
					jQuery('.more-info span').text(btn_info);
				}
			});
			var zindex = 999;
			jQuery('.fusion-portfolio,.fusion-portfolio article').each(function(i) {
				zindex--;
				jQuery(this).css('z-index',zindex);
			});
		}

	}


	// META - Categorías de países como banderas
	if ( jQuery('.fusion-portfolio-content .fusion-portfolio-meta a').length ) {
		jQuery('.fusion-portfolio-content .fusion-portfolio-meta a[href*="/flag-"]').each(function() {
			jQuery(this).empty();
		});
	}


	// FORMULARIOS - Si existe #RESP: asignar nuevo responsable
	if ( jQuery('#RESP').length ) {
		var new_resp = jQuery('#RESP a').attr('href');
		new_resp = new_resp.substring(new_resp.indexOf('mailto:')+7,new_resp.length);
		jQuery('input[name="RESP"]').val(new_resp);
	}
	if ( window.location.href.indexOf('?ctry') > -1 ) {
		var urlParams = new URLSearchParams(window.location.search);
		ctry_url = urlParams.get('ctry');
		jQuery('input[name="RESP"]').val(ctry_url+'@grupodatco.com');
	}	


	// FORMULARIOS - Si existe #RESP_BCC: asignar responsable en copiar oculta
	if ( jQuery('#RESP_BCC').length ) {
		var new_resps = '';
		jQuery('#RESP_BCC a').each(function(i) {
			var new_resp_bcc = jQuery(this).attr('href');
			new_resp_bcc = new_resp_bcc.substring(new_resp_bcc.indexOf('mailto:')+7,new_resp_bcc.length);
			new_resps += new_resp_bcc+', ';
		});
		new_resps = new_resps.substring(0,new_resps.length-2);
		jQuery('input[name="RESP_BCC"]').val(new_resps);
	}

	
	// FORMULARIOS - Abrir formulario de contacto
	if ( window.location.href.indexOf('#contacto') > -1 ) {
		jQuery('#open-contacto-rapido').trigger('click');
	}


	// FORMULARIOS - Agregar clase para mostrar color default cuando se selecciona
	jQuery('.wpcf7-select:not(.highlight)').change(function() {
		if ( !jQuery(this).hasClass('selected') ) {
			jQuery(this).addClass('selected');
		}
	});


	// FORMULARIOS - Convertir a mayúsculas
	jQuery('input[name*="ORG"]').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toUpperCase());
	});


	// FORMULARIOS - Convertir a minúsculas
	jQuery('input[name*="EMAIL"]').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toLowerCase());
	});
	jQuery('.comment-author').each(function(i) {
		jQuery(this).find('strong').text(jQuery(this).find('strong').text().toLowerCase());
	});


	// FORMULARIOS - Convertir a letras capitales
	jQuery.fn.capitalize = function(e) {
		jQuery.each(this,function() {
			var split = this.value.split(' ');
			for (var i = 0,len = split.length; i < len; i++) {
				split[i] = split[i].charAt(0).toUpperCase()+split[i].substr(1).toLowerCase();
			}
			this.value = split.join(' ');
		});
		return this;
	};
	jQuery('input[name*="FNAME"],input[name*="LNAME"],input[name*="ROLE"]').on('input',function (e) {
		jQuery(this).capitalize();
	});


	// FORMULARIOS - Deshabilitar botón para enviar formulario una vez presionado
	jQuery('.wpcf7-submit:not([readonly])').on('click',function(e) {
		if ( jQuery(this).val().indexOf('...') === -1 ) {
			jQuery(this).attr('name',jQuery(this).val());
			var sending_lang = '';
			if ( lang == 'es' || lang == 'pt' ) {
				sending_lang = 'Enviando...';
			}
			else if ( lang == 'en' ) {
				sending_lang = 'Sending...';
			}
			jQuery(this).attr({
				value: sending_lang,
				readonly: 'readonly'
			});
			var form_id = jQuery(this).parent().parent().parent().attr('id');
			jQuery('#'+form_id).addClass('sending');
			jQuery('.wpcf7.sending input,.wpcf7.sending select,.wpcf7.sending textarea').addClass('sending');
		}
	});


	// FORMULARIOS - Guardar título y URL en inputs
	if ( jQuery('input[name="TITLE"]').length ) {
		jQuery('input[name="TITLE"]').val(document.title);
	}
	if ( jQuery('input[name*="SRC"]').length ) {
		var src_input = window.location.href;
		jQuery('input[name*="SRC"]').val(src_input);
		if ( jQuery('input[name="HREF"]').length ) {
			jQuery('input[name="HREF"]').val(src_input);
		}
	}


	// FORMULARIOS - Salesforce: asignar "Web"
	if ( jQuery('input[name="LEADMKT"]').length ) {
		jQuery('input[name="LEADMKT"]').val('Web');
	}


	// FORMULARIOS - Limpiar espacios iniciales y finales al cambiar/salir de campo (blur)
	jQuery(document).on('blur','.wpcf7 input',function() {
		jQuery('input').each(function() {
			this.value = jQuery(this).val().trim();
		})
	});


	// FORMULARIOS - Limpiar alerta "requerido" al escribir en el campo
	jQuery('.wpcf7-form-control-wrap input').on('input', function(e) {
		if ( jQuery(this).val().length > 0 ) {
			jQuery(this).siblings('.wpcf7-not-valid-tip').hide();
		}
		else {
			jQuery(this).siblings('.wpcf7-not-valid-tip').show();
		}
	});
	jQuery('.wpcf7-form-control-wrap select').on('change', function(e) {
		if ( jQuery('option:selected',this).index() > 0 ) {
			jQuery(this).parent('.wpcf7-select-parent').siblings('.wpcf7-not-valid-tip').hide();
		}
		else {
			jQuery(this).parent('.wpcf7-select-parent').siblings('.wpcf7-not-valid-tip').show();
		}
	});


	// FORMULARIOS - Comprobar si hay campos opcionales
	jQuery('.wpcf7-form-control:not(.wpcf7-submit):not(.hidden):not([type=hidden]').each(function(i) {
		if ( jQuery(this).hasClass('wpcf7-validates-as-required') ) {
			jQuery(this).parent().addClass('wpcf7-validates-as-required');
		}
		else {
			var formid = jQuery(this).closest('.wpcf7').attr('id');
			if ( !jQuery('#'+formid).hasClass('notallrequired') ) {
				jQuery('#'+formid).addClass('notallrequired');
			}
		}
	});


	// SIDEBAR - Si existe link a datasheet: asignar URL
	if ( jQuery('#sidebar .cta-link').length ) {
		var url = window.location.pathname;
		url = url.substring(0,url.length-1);
		var slug = url.substring(url.lastIndexOf('/')+1,url.length);
		jQuery('#sidebar .cta-link').attr({
			'href': '/datasheet-'+slug+'/'
		});
	}


	// MODAL - Convertir link de menú para activar modal
	if ( jQuery('li[class*="fusion-modal-text-link"]').length ) {
		jQuery('li[class*="fusion-modal-text-link"]').each(function(i) {
			jQuery('li[class*="fusion-modal-text-link"]:eq('+i+') a').addClass('fusion-modal-text-link');
			jQuery('li[class*="fusion-modal-text-link"]:eq('+i+') a').attr('data-toggle','modal');
			var modal_target = jQuery('li[class*="fusion-modal-text-link"]:eq('+i+') a').attr('href');
			modal_target = modal_target.substring(1,modal_target.length);
			jQuery('li[class*="fusion-modal-text-link"]:eq('+i+') a').removeAttr('href');
			jQuery('li[class*="fusion-modal-text-link"]:eq('+i+') a').attr('data-target','.fusion-modal.'+modal_target);
		});
	}


	// MODAL - Trasladar nombre de producto/servicio a ventana modal
	jQuery('.fusion-portfolio-post .fusion-modal-text-link').on('click',function(e) {
		if ( jQuery(this).attr('data-target') == '.fusion-modal.demo' ) {
			if ( lang == 'es' ) {
				modal_title_lang = 'Solicitar demo gratuita para';
			}
			else if ( lang == 'en' ) {
				modal_title_lang = 'Request free trial for';
			}
			else if ( lang == 'pt' ) {
				modal_title_lang = 'Solicite demonstração gratuita para';
			}
		}
		else {
			if ( lang == 'es' ) {
				modal_title_lang = 'Contactar por';
			}
			else if ( lang == 'en' ) {
				modal_title_lang = 'Contact for';
			}
			else if ( lang == 'pt' ) {
				modal_title_lang = 'Contato para';
			}
		}
		var title_post = jQuery(this).parent().parent().find('h2 a').text();
		jQuery('input[name="TITLE"]').val(title_post);
		jQuery('.fusion-modal .modal-title').html(modal_title_lang+' <span>'+title_post+'</span>');
		e.preventDefault();
	});


	// FOOTER - Mover bloque de partners
	if ( jQuery('#partners_footer').length && !jQuery('body').hasClass('page-id-45066') ) {
		jQuery('#partners_footer').insertBefore('.fusion-footer-widget-area');
	}


	// FOOTER - Asignar año y ID
	jQuery('.fusion-footer').attr('id','fusion-footer');
	jQuery('.fusion-copyright-notice span.cur_year').text((new Date).getFullYear());


	// PRECIOS - Cambiar comas por puntos
	if ( jQuery('.fusion-pricing-table').length ) {
		jQuery('.integer-part').each(function() {
			var text = jQuery(this).text();
			jQuery(this).text(text.replace(',','.')); 
		});

	}


});