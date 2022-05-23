// GENERAL - Función para obtener variables GET
jQuery.getPrm = function(name){var results=new RegExp('[?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}else{return results[1]||0;}}

// FORMULARIOS - Ejecutar al confirmar envío de mail
document.addEventListener('wpcf7mailsent', function(e) {

	// Variables
	var event_action = '';

	// BAITCON
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
	else if ( e.detail.contactFormId == 28530 ) {
		event_action = 'Newsletter';
	}

	// GRUPO DATCO
	else if ( e.detail.contactFormId == 35652 ) {
		event_action = 'Contacto';
	}
	else if ( e.detail.contactFormId == 22540 ) {
		event_action = 'Recurso';
	}

	// RED CAPRICORNIO
	else if ( e.detail.contactFormId == 25323 ) {
		event_action = 'Contacto';
	}

	// SILICA NETWORKS
	else if ( e.detail.contactFormId == 22820 ) {
		event_action = 'Contacto (ES)';
	}
	else if ( e.detail.contactFormId == 31114 ) {
		event_action = 'Contacto (EN)';
	}
	else if ( e.detail.contactFormId == 24097 ) {
		event_action = 'Contacto (BR)';
	}
	else if ( e.detail.contactFormId == 31529 ) {
		event_action = 'Recurso (ES)';
	}
	else if ( e.detail.contactFormId == 33992 ) {
		event_action = 'Recurso (EN)';
	}
	else if ( e.detail.contactFormId == 33995 ) {
		event_action = 'Recurso (BR)';
	}

	// SMARTIME
	else if ( e.detail.contactFormId == 23299 ) {
		event_action = 'Contacto';
	}

	// VELOCOM
	else if ( e.detail.contactFormId == 23530 ) {
		event_action = 'Contacto';
		gtag('event', 'conversion', {'send_to': 'AW-698636057/nP_BCLC5ufYBEJmukc0C'});
	}
	else if ( e.detail.contactFormId == 19204 ) {
		event_action = 'Solicitud';
	}

	// VELOCOM FIBRA
	else if ( e.detail.contactFormId == 25052 ) {
		event_action = 'Contacto';
		jQuery('.controls.pac-target-input').removeClass('warning').removeClass('sent');
		jQuery('.wpcf7-response-inner').remove();
	}

	// Enviar evento a Analytics
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


// PARA EVENTOS:
if ( window.location.href.indexOf('/eventos/') > -1 ) {

	if ( window.location.href.indexOf('#registrarme') > -1 ) {
		jQuery('#registrarme input[name*="FNAME"]').focus();
	}

}

// Menú transparente
function scrollHeaderTransp() {
	var scroll = jQuery(window).scrollTop();
	if ( scroll < 20 ) {
		if ( jQuery('.header-transparent').length ) {
			jQuery('#wrapper,.fusion-header').removeClass('bkg');
		}
		jQuery('#wrapper,.fusion-header').addClass('on-top');
	}
	else {
		if ( jQuery('.header-transparent').length ) {
			jQuery('#wrapper,.fusion-header').addClass('bkg');
		}
		jQuery('#wrapper,.fusion-header').removeClass('on-top');
	}
}


jQuery(document).ready(function() {

	// Si es una landing:
	if ( jQuery('.fusion-fullwidth.landing').length ) {
		jQuery('.fusion-wrapper').addClass('landing');
		jQuery('.fusion-main-menu-search,.fusion-icon-search,.fusion-footer-widget-area').hide();
		jQuery('.fusion-footer-widget-area.fusion-widget-area').css('padding-top','0!important');
	}

	// Con bandera:
	if ( jQuery('.fusion-fullwidth.country-flag').length ) {
		jQuery('#wrapper').addClass('country-flag');
		jQuery('.country-flag').removeClass('hidden');
		if ( jQuery('.fusion-fullwidth.landing').length ) {
			var flag = jQuery('.fusion-fullwidth.country-flag').attr('class');
			flag = flag.substr(flag.indexOf('country-flag')+13,2);
		}
		else { 
			var flag = window.location.pathname;
			flag = flag.substring(1,flag.length-1);
			jQuery('.country-flag.menu-item>a').attr('href','/'+flag);
		}
		jQuery('.country-flag.menu-item.fusion-dropdown-menu>a>span>img').attr('src','/wp-content/uploads/flag-gd_'+flag+'.svg');
		var cur_title = jQuery('.country-flag.menu-item.fusion-dropdown-menu .sub-menu li span img[src*="flag-gd_'+flag+'"]').attr('alt');
		jQuery('.country-flag.menu-item.fusion-dropdown-menu').attr('title',cur_title);
	}


	// GENERAL - Guardar código de idioma
	var lang = jQuery('html').attr('lang').substring(0,2);

	// MENÚ - Si tiene la clase: convertir en transparente el fondo del header
	if ( jQuery('.post-content .header-transparent').length ) {
		jQuery('#wrapper').addClass('header-transparent');
	}
	jQuery('.fusion-header').addClass('on-top');
	scrollHeaderTransp();
	jQuery(window).scroll(function() {
		scrollHeaderTransp();
	});
	if ( jQuery('.gradient-gd').length ) {
		jQuery('#wrapper').addClass('gradient-gd');
	}
	if ( jQuery('.gradient-b').length ) {
		jQuery('#wrapper').addClass('gradient-b');
	}
	if ( jQuery('.gradient-s').length ) {
		jQuery('#wrapper').addClass('gradient-s');
	}
	if ( jQuery('.slider').length ) {
		jQuery('#wrapper').addClass('slider');
	}
	if ( jQuery('.no-menu').length ) {
		jQuery('#wrapper').addClass('no-menu');
	}
	if ( jQuery('.no-header-logo').length ) {
		jQuery('#wrapper').addClass('no-header-logo');
	}

	// BLOG - Eliminar link de autor
	jQuery('a[rel=author],.meta-tags a').removeAttr('href');

	// CONTENIDOS - Abrir en una nueva pestaña
	jQuery(document).on('click','body.site-id-26 #prensa .fusion-post-content.post-content>h2>a,body.site-id-26 #prensa span.meta-tags a',function(e) {
		window.open(this.href,'_blank');
		e.preventDefault();
		e.stopPropagation();
	});

	// CONTENIDOS - Eliminar etiquetas si hay más de 1
	if ( jQuery('.fusion-meta-info-wrapper>.meta-tags a').length > 1 ) {
		jQuery('.fusion-meta-info-wrapper>.meta-tags a[rel="category tag"]+.fusion-inline-sep').remove();
	}

	// CONTENIDOS - Categorías de países como banderas
	if ( jQuery('.fusion-portfolio-content .fusion-portfolio-meta a').length ) {
		jQuery('.fusion-portfolio-content .fusion-portfolio-meta a[href*="/flag-"]').each(function() {
			jQuery(this).empty();
		});
	}
	
	// CONTENIDOS - Animar scroll según "hidden_link" elegido
	jQuery(document).on('click','.hidden_link,.gotolink a',function(e) {
		var link_id = jQuery(this).attr('href');
		jQuery('html,body').animate({
			scrollTop: jQuery(link_id).offset().top-150
		},1000);
		jQuery(link_id).find('.fusion-portfolio-content-wrapper').addClass('hover');
		jQuery('.fusion-portfolio-content-wrapper:not(.hover)').css('opacity','.5');
		setTimeout(function() {
			jQuery(link_id).find('.fusion-portfolio-content-wrapper').removeClass('hover');
			jQuery('.fusion-portfolio-content-wrapper:not(.hover)').css('opacity','1');
		},2000);
		e.preventDefault();
	});
	jQuery('.hidden_link').on({
		mouseenter: function () {
			jQuery('.fusion-image-switch img:last-child').css('opacity',1);
		},
		mouseleave: function () {
			jQuery('.fusion-image-switch img:last-child').css('opacity',0);
		}
	});

	// CONTENIDOS - Convertir a dropcap primer párrafo de nota
	if ( jQuery('body').hasClass('single-format-standard') ) {
		jQuery('span[id^=more]').remove();
	}
	
	// CONTENIDOS - Eliminar atributos title de las imágenes
	jQuery('#content a[title]').each(function(i){jQuery(this).removeAttr('title');});
	jQuery('#content img[title]').each(function(i){jQuery(this).removeAttr('title');});
	jQuery('.fusion-icon-blogger').each(function(i){jQuery(this).removeAttr('title');});

	// CONTENIDOS - Mostrar/ocultar información para portfolio con imagen y título
	if ( jQuery(window).width() > 920 ) {
		jQuery('.box-buttons .fusion-post-content').on('click',function(e) {
			jQuery(this).parent().parent().parent('article').toggleClass('expanded');
			jQuery('.box-buttons article').toggleClass('opacity');
			e.stopPropagation();
		});
		jQuery('html').click(function(e) {
			if( !jQuery(e.target).hasClass('expanded') ) {
				jQuery('.box-buttons article').removeClass('visible').removeClass('expanded').removeClass('opacity');
			}
		});
		var zindex = 100;
		jQuery('.box-buttons article').each(function(i) {
			zindex--;
			jQuery(this).css('z-index',zindex);
		});
	}

	// CONTENIDO - Mostrar mes actual en legales
	if ( jQuery('#legales').length ) {
		const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
		const d = new Date();
		var getDaysInMonth = function(month,year) {
			return new Date(year, month, 0).getDate();
		};
		var lastday = getDaysInMonth(d.getMonth()+1,d.getFullYear());
		var cur_month = monthNames[d.getMonth()];
		var cur_year = new Date().getFullYear();
		jQuery('#legales .cur_month').text(cur_month);
		jQuery('#legales .cur_year').text(cur_year);
		jQuery('#legales .last_day').text(lastday);
	}

	// CONTENIDOS - Ocultar párrafos con espacios en blanco
	jQuery('p').filter(function(){return jQuery.trim(this.innerHTML)===''}).remove();
	jQuery('p').filter(function(){return jQuery.trim(this.innerHTML)==='&nbsp;'}).remove();

	// CONTENIDOS - Mostrar preview
	if ( jQuery('body.single-format-link').length ) {
		var site_id = jQuery('body').attr('class');
		site_id = site_id.substr(site_id.indexOf('site-id-')+8,2);
		site_id = site_id.trim();
		if ( site_id != 1 ) {
			site_id = 'sites/'+site_id+'/';
		}
		else {
			site_id = '';
		}
		var link_href = window.location.pathname;
		link_href = link_href.substring(link_href.indexOf('/')+1,link_href.length-1);
		if ( site_id == 'sites/5/' ) {
			link_href = link_href.substring(3,link_href.length);
		}
		jQuery('.avada-page-titlebar-wrapper').addClass('bkg')
		jQuery('.avada-page-titlebar-wrapper').css('background-image','url(/wp-content/uploads/'+site_id+link_href+'-pdf-large.jpg');
		jQuery('<img src="/wp-content/uploads/'+site_id+link_href+'-pdf-large.jpg" width="300" class="preview" />').insertBefore('#main .wpcf7');
	}


	// CONTENIDOS - Si es una entrada para lectura, no fijar sidebar
	if ( jQuery('body').hasClass('single-format-standard') ) {
		if ( jQuery('#content>article').hasClass('category-blog') || jQuery('#content>article').hasClass('category-noticias') || jQuery('#content>article').hasClass('category-casos') || jQuery('.not-stucked').length ) {
			jQuery('#sidebar .fusion-sidebar-inner-content').addClass('not-stucked');
		}
	}

	// FORMULARIOS - Si existe: asignar nuevo responsable
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

	// FORMULARIOS - Si existe: asignar copiar oculta
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

	
	// FORMULARIOS - Si existe: asignar copiar oculta
	if ( jQuery('body.single-avada_portfolio').length ) {
		jQuery('input[name="BREADCRUMB"]').val(jQuery('.fusion-breadcrumbs').text());
	}
	

	// FORMULARIOS - Abrir formulario de contacto
	if ( window.location.href.indexOf('#contacto') > -1 ) {
		jQuery('#open-contacto-rapido').trigger('click');
	}
	if ( window.location.href.indexOf('#oferta') > -1 ) {
		jQuery('#open-oferta-librestream').trigger('click');
	}


	// FORMULARIOS - Agregar clase para mostrar color default cuando se selecciona
	jQuery('.wpcf7-select:not(.highlight)').change(function() {
		if ( !jQuery(this).hasClass('selected') ) {
			jQuery(this).addClass('selected');
		}
	});


	// FORMULARIOS - Agregar clase para selects con highlight
	jQuery('.wpcf7-select').each(function(i) {
		if ( jQuery(this).hasClass('highlight') ) {
			jQuery(this).parent().addClass('parent-highlight');
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


	// FORMULARIOS - Guardar URL y título en inputs
	if ( jQuery('input[name="TITLE"]').length ) {
		var entry_title = jQuery('.entry-title:first').text();
		jQuery('input[name="TITLE"]').each(function() {
			jQuery(this).attr('value',entry_title);
		});
		if ( jQuery('input[name*="SRC"]:not(.manual)').length ) {
			if ( jQuery('input[name*="SRC"]').val().length == 0 ) {
				jQuery('input[name*="SRC"]').val(jQuery('body').attr('data-refer')+' => '+window.location.href);
			}
			else if ( jQuery('input[name="HREF"]').length ) {
				jQuery('input[name="HREF"]').val(window.location.href);
			}
		}
		// Si es página de alguna UN o es un subsitio, identificarlo con "+UN" para automation GD-Auto21:
		if ( jQuery('body').hasClass('page-id-42955') || jQuery('body').hasClass('page-id-26163') || jQuery('body').hasClass('page-id-39457') || jQuery('body').hasClass('page-id-39485') || jQuery('body').hasClass('page-id-26159') || jQuery('body').hasClass('page-id-26161') || jQuery('body').hasClass('page-id-26165') ) {
			var src_input = jQuery('input[name*="SRC"]').val();
			jQuery('input[name*="SRC"]').val(src_input+'+UN');
		}
		var mail_href = jQuery('.fusion-main-menu a[href*=mailto]').attr('href');
		if ( mail_href !== undefined ) {
			if ( mail_href.indexOf('?subject') === -1 ) {
				jQuery('.fusion-header a[href*=mailto]').attr('href',mail_href+'?subject=Contacto desde '+window.location);
			}
		}
		var site_id = jQuery('body').attr('class');
		site_id = site_id.substr(site_id.indexOf('site-id-')+8,2);
		site_id = site_id.trim();
		var page_id = jQuery('body').attr('class');
		page_id = page_id.substr(page_id.indexOf('page-id-')+8,5);
		page_id = page_id.trim();
		var leadmkt = '';
		var idform = jQuery('.wpcf7').attr('id');
		idform = idform.substring(idform.indexOf('wpcf7-')+6,idform.length);
		idform = idform.substring(0,idform.indexOf('-'));
		var src = jQuery('input[name*="SRC"]').val();
		// Asignar origen según sitio web
		if ( site_id == 1 ) { // GD - grupodatco.com
			if ( page_id == 43399 ) { // IOP
				leadmkt = 'IOP';
			}
			else if ( page_id == 23431 ) { // IOT
				leadmkt = 'IOT';
			}
			else if ( page_id == 26159 ) { // DSW
				leadmkt = 'DSW';
			}
			else if ( page_id == 26163 ) { // DIT
				leadmkt = 'DIT';
			}
			else if ( page_id == 26159 ) { // F
				leadmkt = 'F';
			}
			else if ( page_id == 26161 ) { // I
				leadmkt = 'I';
			}
			else if ( page_id == 26165 ) { // ST
				leadmkt = 'ST';
			}
			else {
				leadmkt = 'GD';
				if ( idform == 'f35652' ) {
					src = src+'+Recurso';
				}
				else {
					src = src+'+Contacto';
				}
				jQuery('input[name*="SRC"]').val(src);	
			}
		}
		else if ( site_id == 5 ) { // silicanetworks.com
			leadmkt = 'SCO'
			if ( idform == 'f31529' ) {
				src = src+'+Recurso';
			}
			else {
				src = src+'+Contacto';
			}
			jQuery('input[name*="SRC"]').val(src);
		}
		else if ( site_id == 16 ) { // smartime.com.ar
			leadmkt = 'IOP';
		}
		else if ( site_id == 25 ) { // baitcon.com
			leadmkt = 'B';
		}
		else if ( site_id == 26 ) { // redcapricornio.net
			leadmkt = 'SIT';
		}
		else if ( site_id == 28 ) { // velocomfibra.com.ar
			leadmkt = 'V';
		}
		else {
			leadmkt = 'GD';
		}
		jQuery('input[name=LEADMKT]').val('MKT-'+leadmkt);
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


	// BOTONES - Agregar botones en cajas para categorías
	if ( jQuery('.fusion-portfolio').length ) {
		var modal_btn_left_lang;
		var modal_btn_right_lang;
		jQuery('.fusion-portfolio-post').each(function(i) {
			var link_post = jQuery('.fusion-portfolio-post:eq('+i+') h2 a').attr('href');
			if ( lang == 'es' ) {
				modal_btn_left_lang = 'Conocer más';
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
					modal_btn_right_lang = 'Prueba gratuita';
				}
				else if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('datasheet') ) {
					modal_btn_right_lang = 'Contactar';
				}
				else {
					modal_btn_right_lang = 'Contactar';
				}
			}
			else if ( lang == 'en' ) {
				modal_btn_left_lang = 'Learn more';
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
					modal_btn_right_lang = 'Free trial';
				}
				else {
					modal_btn_right_lang = 'Contact';
				}
			}
			else if ( lang == 'pt' ) {
				modal_btn_left_lang = 'Saber mais';
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
					modal_btn_right_lang = 'Teste grátis';
				}
				else {
					modal_btn_right_lang = 'Contato';
				}
			}
			if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('demo') ) {
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('post-38401') ) {
					var external_link = 'target="_blank" href="https://secure2.sophos.com/es-es/products/next-gen-firewall/free-trial.aspx?id=0013Z00001hTgcp"';
					var classes_button = 'fusion-button button-flat fusion-button-round button-large button-default button-left';
					var modal = '';
				}
				else {
					var classes_button = 'fusion-button button-flat fusion-button-round button-large button-default button-left fusion-modal-text-link';
					var modal = ' data-toggle="modal" data-target=".fusion-modal.demo"';
				}
				jQuery('.fusion-portfolio-post:eq('+i+') .fusion-portfolio-content').append('<div class="fusion-buttons"><a class="fusion-button button-flat fusion-button-round button-large button-default button-left" href="'+link_post+'"><span class="fusion-button-text">'+modal_btn_left_lang+'</span></a><a class="'+classes_button+'" '+external_link+''+modal+'><span class="fusion-button-text">'+modal_btn_right_lang+'</span></a></div>');
			}
			else if ( jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('datasheet') && (jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('tag-solo-contacto') || jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('c-solo-contacto')) ) {
				modal_btn_left_lang = 'Ver datasheet';
				var link_id = jQuery('.fusion-portfolio-post:eq('+i+') h2 a').attr('href');
				link_id = link_id.substring(link_id.indexOf('servicio/')+9,link_id.length-1);
				jQuery('.fusion-portfolio-post:eq('+i+') h2 a').attr('id',link_id);
				if ( link_id.indexOf('-2') > -1 ) {
					link_id = link_id.substring(0,link_id.length-2);
				}
				if ( jQuery('.fusion-portfolio-post:eq('+i+')').attr('class').indexOf('turbomaster') > -1 ) {
					link_post = 'https://www.silicanetworks.com/datasheet-'+link_id;
					var link_target = '_blank';
				}
				else {
					link_post = '/datasheet-'+link_id;
					var link_target = '_self';
				}
				jQuery('.fusion-portfolio-post:eq('+i+') h2 a,.fusion-portfolio-post:eq('+i+') .fusion-image-wrapper a').attr({
					'href': link_post,
					'target': link_target
				});
				jQuery('.fusion-portfolio-post:eq('+i+') .fusion-portfolio-content').append('<div class="fusion-buttons"><a class="fusion-button button-flat fusion-button-round button-large button-default button-left" href="'+link_post+'" target="'+link_target+'"><span class="fusion-button-text">'+modal_btn_left_lang+'</span></a><a class="fusion-button button-flat fusion-button-round button-large button-default button-right fusion-modal-text-link" data-toggle="modal" data-target=".fusion-modal.contacto-rapido"><span class="fusion-button-text">'+modal_btn_right_lang+'</span></a></div>');
			}
			else {
				jQuery('.fusion-portfolio-post:eq('+i+') .fusion-portfolio-content').append('<div class="fusion-buttons"><a class="fusion-button button-flat fusion-button-round button-large button-default button-left" href="'+link_post+'"><span class="fusion-button-text">'+modal_btn_left_lang+'</span></a><a class="fusion-button button-flat fusion-button-round button-large button-default button-right fusion-modal-text-link" data-toggle="modal" data-target=".fusion-modal.contacto-rapido"><span class="fusion-button-text">'+modal_btn_right_lang+'</span></a></div>');
			}
			if ( (jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('tag-solo-contacto') || jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('c-solo-contacto')) && !jQuery('.fusion-portfolio-post:eq('+i+')').hasClass('datasheet') ) {
				jQuery('.fusion-portfolio-post:eq('+i+') .fusion-image-wrapper a,.fusion-portfolio-post:eq('+i+') h2 a').attr({
					'href': '#solo-contacto',
					'class': 'fusion-modal-text-link',
					'data-toggle': 'modal',
					'data-target': '.fusion-modal.contacto-rapido'
				});
			}
		});
	}


	// SIDEBAR - Si existe link a datasheet: asignar URL
	var url = window.location.pathname;
	url = url.substring(0,url.length-1);
	var slug = url.substring(url.lastIndexOf('/')+1,url.length);
	if ( jQuery('#sidebar .datasheet-link').length ) {
		jQuery('#sidebar .datasheet-link').attr({
			'href': '/datasheet-'+slug+'/'
		});
	}
	if ( jQuery('#sidebar .oferta-link').length ) {
		jQuery('#sidebar .oferta-link').attr({
			'class': 'oferta-link fusion-modal-text-link',
			'data-toggle': 'modal',
			'data-target': '.fusion-modal.oferta-librestream',
			'href': '#'+slug+'/'
		});
	}


	// SIDEBAR - Si existe un CTA diferente:
	if ( jQuery('#content>article.portfolio_tags-demo-form').length ) {
		jQuery('.sidebar h4').text('Quiero solicitar una demo');
		jQuery('.fusion-modal.contacto-rapido .modal-title').text('Quiero solicitar una demo para '+jQuery('span.entry-title').text());
		jQuery('input[name="SUBJ"]').attr('value','demo');
	}
	if ( jQuery('#content>article.portfolio_tags-reunion-form').length ) {
		jQuery('.sidebar h4').text('Quiero agendar una reunión');
		jQuery('.fusion-modal.contacto-rapido .modal-title').text('Quiero agendar una reunión para conocer '+jQuery('span.entry-title').text());
		jQuery('input[name="SUBJ"]').attr('value','reunión');
	}


	// SIDEBAR - Si existe un CTA, fijar lateral
	if ( jQuery('#sidebar h3.cta').length ) {
		jQuery('body').addClass('sidebar-cta');
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
	jQuery('.button-right.fusion-modal-text-link,.entry-title .fusion-modal-text-link,.fusion-image-wrapper .fusion-modal-text-link').on('click',function(e) {
		if ( jQuery(this).hasClass('button-right') ) {
			var title_post = jQuery(this).parent().parent().parent().find('h2 a').text();
		}
		else {
			var title_post = jQuery(this).text();
		}
		if ( jQuery(this).parent().hasClass('fusion-image-wrapper') ) {
			var title_post = jQuery(this).attr('aria-label');
		}
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
		jQuery('input[name="TITLE"]').val(title_post);
		jQuery('.fusion-modal .modal-title').html(modal_title_lang+' <span>'+title_post+'</span>');
		var mail_href = jQuery('#boxed-wrapper~.modal .wpcf7 .fusion-one-full>a:not(.CF7-phone)').attr('href');
		jQuery('#boxed-wrapper~.modal .wpcf7 .fusion-one-full>a:not(.CF7-phone)').attr('href',mail_href+'?subject=Contacto desde '+window.location);
		e.preventDefault();
	});


	// PORTFOLIO - Cambiar orden de meta en grilla
	jQuery('.fusion-portfolio-content').each(function(i) {
		jQuery('.fusion-portfolio-content:eq('+i+') .fusion-portfolio-meta').insertBefore('.fusion-portfolio-content:eq('+i+') .fusion-post-title');
	});


	// PESTAÑAS - Si tiene #tab en la URL, scrollear hasta las pestañas
	if ( window.location.href.indexOf('#tab') > -1 ) {
		if ( jQuery(window).width() < 920 ) {
			jQuery('html,body').animate({
				scrollTop: jQuery('.fusion-tabs-1').offset().top-200
			},1000);
			var tab_hash = window.location.href;
			tab_hash = tab_hash.substring(tab_hash.indexOf('#'),tab_hash.length);
			if ( tab_hash.indexOf('?') > -1 ) {
				tab_hash = tab_hash.substring(0,tab_hash.indexOf('?'));
			}
			jQuery('.fusion-mobile-tab-nav').removeClass('hide-tab-pane');
			jQuery(tab_hash).trigger('click');
		}
		else {
			jQuery('html,body').animate({
				scrollTop: jQuery('.fusion-tabs-1').offset().top-350
			},1000);
		}
	}


	// FOOTER - Mover bloque de partners
	if ( jQuery('#partners_footer').length && !jQuery('body').hasClass('page-id-45066') ) {
		jQuery('#partners_footer').insertBefore('.fusion-footer-widget-area');
	}


	// FOOTER - Asignar año y ID
	jQuery('.fusion-footer').attr('id','fusion-footer');
	jQuery('.fusion-copyright-notice span.cur_year').text((new Date).getFullYear());


	// PRECIOS - Al clickear botón de tabla de precios abrir ventana modal de contacto y copiar título
	if ( jQuery('.fusion-pricing-table').length ) {
		jQuery('.fusion-pricing-table .fusion-button').click(function(e) {
			var title_pricing = jQuery(this).parents('.fusion-panel').find('.panel-heading .title-row').text();
			// Velocom
			if ( jQuery('body').hasClass('postid-24725') || jQuery('body').hasClass('postid-23640') ) {
				jQuery('.fusion-modal.contacto-rapido-internet .modal-title').text(title_pricing);
				var lugar_name = decodeURIComponent(jQuery.getPrm('lugar'));
				var lugar_class = normalize(lugar_name.toLowerCase());if(lugar_class.slice(-1)=='-'){lugar_class=lugar_class.slice(0,-1);}
				var title_pricing = jQuery(this).find('.fusion-button-text').text();
				if ( lugar_class != 'null' ) {
					jQuery('.fusion-modal.contacto-rapido-internet .modal-title').text(title_pricing+' en '+lugar_name);
				}
			}
			if ( jQuery('select[name="TITLE"]').length ) {
				jQuery('select[name="TITLE"]').val(title_pricing);
			}
			if ( jQuery('select[name="SPEED"]').length ) {
				// Velocom
				if ( jQuery('body').hasClass('postid-24725') || jQuery('body').hasClass('postid-23640') ) {
					var speed_pricing = jQuery(this).parents('.fusion-panel').find('.panel-heading .title-row').text();
					speed_pricing = speed_pricing.substring(6,speed_pricing.length);
					jQuery('select[name="SPEED"]').val(speed_pricing);
				}
				else { 
					jQuery('select[name="SPEED"]').val(title_pricing);
				}
			}
			if ( jQuery('body').hasClass('postid-23901') ) {
				jQuery('.fusion-modal.contacto-rapido .modal-title').text('Solicitar '+title_pricing);
			}
			if ( jQuery('select[name="SERVICE"]').length ) {
				if ( jQuery('body').hasClass('page-id-78') ) {
					title_pricing = jQuery('.fusion-tabs:first .nav.fusion-mobile-tab-nav .active .fusion-tab-heading').text();
				}
				jQuery('.fusion-modal.in .modal-title').text('Solicitar '+title_pricing);
				jQuery('select[name="SERVICE"]').val(title_pricing);
			}
		});
		jQuery('.integer-part').each(function() {
			var text = jQuery(this).text();
			jQuery(this).text(text.replace(',','.')); 
		});
		// Silica
		if ( jQuery('body').hasClass('site-id-5') ) {
			jQuery('.fusion-pricingtable-column .panel-container').click(function(e) {
				var speed_pricing = jQuery(this).find('.panel-heading .title-row').text();
				if ( jQuery('body').hasClass('page-id-78') ) {
					var title_pricing = jQuery('.fusion-tabs:first .nav.fusion-mobile-tab-nav .active .fusion-tab-heading').text();
				}
				jQuery('select[name="SPEED"]').val(speed_pricing);
				jQuery('select[name="SERVICE"]').val(title_pricing);
				jQuery('#open-consultar-internet').trigger('click');
			});
		}

	}


	// PRECIOS - Si tiene "--" tachar fila y bajar opacidad
	jQuery('.list-group-item').each(function(i){
		if ( jQuery(this).text().indexOf('–') > -1 ) {
			jQuery(this).text(jQuery(this).text().substring(1,jQuery(this).text().length));
			jQuery(this).css({
				'text-decoration':'line-through',
				'opacity':0.6
			});
		}
	});


});