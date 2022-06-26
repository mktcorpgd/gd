// Precarga
!function(){function t(){document.body.classList.add("loaded")}var e=document.getElementById("loftloader-wrapper");if(e){if(window.addEventListener("load",function(e){t()}),e.dataset&&e.dataset.showCloseTime){var a=parseInt(e.dataset.showCloseTime,10),n=!1,o=e.getElementsByClassName("loader-close-button");a&&o.length&&(setTimeout(function(){o[0].style.display=""},a),o[0].addEventListener("click",function(e){t()}))}e.dataset.maxLoadTime&&(n=e.dataset.maxLoadTime,(n=parseInt(n,10))&&setTimeout(function(){t()},n))}}();

// Eliminar caracteres especiales
function RemoveAccents(str) {
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
	var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
	str = str.split('');
	var strLen = str.length;
	var i,x;
	for (var i=0; i<strLen; i++) {
		if ( (x=accents.indexOf(str[i])) != -1 ) {
			str[i] = accentsOut[x];
		}
	}
	return str.join('');
}


// Convertir texto a letras capitales
jQuery.fn.capitalize = function(e) {
	jQuery.each(this,function(){
		var split = this.value.split(' ');
		for (var i=0,len=split.length; i<len; i++) {
			split[i] = split[i].charAt(0).toUpperCase()+split[i].substr(1).toLowerCase();
		}
		this.value = split.join(' ');
	});
	return this;
};


// Código personalizado una vez enviado el formulario
jQuery(document).on('wpcf7submit',function(e) {
	jQuery('.wpcf7-form.sending .wpcf7-submit').val(jQuery('.wpcf7-form.sending .wpcf7-submit').attr('name')).removeClass('sending').removeAttr('readonly');
	jQuery('.wpcf7-form.sending input,.wpcf7-form.sending select,.wpcf7-form.sending textarea').removeClass('sending');
	jQuery('.wpcf7-form').removeClass('sending');
});


jQuery(document).ready(function() {


	// HOME - Si tiene más de 1700 px de altura, colapsar contenido de pestañas
	if ( jQuery('body').hasClass('home') ) {
		jQuery(document).on('click','.ui-tabs-tab',function(e) {
			jQuery('.sc-tab-panel[aria-hidden=true] .gp-blog-wrapper').removeClass('more-content');
			if ( jQuery('.sc-tab-panel[aria-hidden=false] .gp-blog-wrapper').height() > 1700 ) {
				jQuery('.sc-tab-panel[aria-hidden=false] .gp-blog-wrapper').addClass('more-content');
				jQuery('.sc-tab-panel[aria-hidden=false] .gp-blog-wrapper+.sc-button.large').addClass('expand');
			}
		});
		jQuery(document).on('click','.sc-button.large.expand',function(e) {
			e.preventDefault();
			jQuery('.sc-tab-panel[aria-hidden=false] .gp-blog-wrapper').removeClass('more-content');
			jQuery(this).removeClass('expand');
		});
	}

	
	// MENÚ - Agregar clase si figura #wpadminbar
	if ( jQuery('#wpadminbar').length > 0 ) {
		jQuery('#header').addClass('plus-adminbar');
	}


	// MENÚ - Ajustar para mobile
	if ( jQuery('body').hasClass('gp-mobile') ) {
		jQuery('#header').css('top','46px');
		jQuery('#menu40gd').css('top','110px');
	}
	else {
		jQuery('#header').css('top','32px');
		jQuery('#menu40gd').css('top','84px');
	}
	var prevScrollpos = jQuery(window).scrollTop();
	jQuery(window).scroll(function() {
		var currentScrollPos = jQuery(window).scrollTop();
		if ( prevScrollpos > currentScrollPos || currentScrollPos < 60 ) {
			if ( jQuery('#wpadminbar').length > 0 ) {
				if ( jQuery('body').hasClass('gp-mobile') ) {
					jQuery('#header').css('top','46px');
					jQuery('#menu40gd').css('top','110px');
				}
				else {
					jQuery('#header').css('top','32px');
					jQuery('#menu40gd').css('top','84px');
				}
			}
			else {
				jQuery('#header').css('top','0');
			}
		}
		else {
			if ( jQuery('body').hasClass('gp-mobile') ) {
				if ( jQuery('#header').height() > 64 ) {
					jQuery('#header').css('top','-550px');
					jQuery('#menu40gd').css('top','46px');
				}
				else {
					jQuery('#header').css('top','-64px');
					jQuery('#menu40gd').css('top','46px');
				}
			}
			else {
				if ( jQuery(window).scrollTop() != 0 ) {
					jQuery('#header').css('top','-64px');
					jQuery('#menu40gd').css('top','32px');
				}
			}
		}
		prevScrollpos = currentScrollPos;
	});
	

	// FIX WP 5.5 - Prevenir scrollup con toggles
	jQuery('h3.toggle a').click(function(e) {
		e.preventDefault();
	});


	// FIX WP 5.5 - Mobile: arreglar visualización menú y botón
	jQuery('#mobile-nav-button').click(function(e) {
		e.preventDefault();
		jQuery('#mobile-nav').slideToggle('fast');
	});
	jQuery('#mobile-nav .menu li>.mobile-dropdown-icon').click(function(e) {
		e.preventDefault();
		jQuery(this).siblings('ul').slideToggle('fast');
	});


	// GOOGLE FORMS
	if ( jQuery('iframe[src*="docs.google.com/forms"]').length ) {

		// Traer nombre, apelliedo y mail
		var fname = jQuery('#usrfname').text();
		var lname = jQuery('#usrlname').text();
		var email = jQuery('#usremail').text();

		// Generación de URL <iframe>
		var formid = jQuery('#gform').text();

		// Encuesta GD40
		if ( jQuery('body').hasClass('page-id-25343') ) {
			jQuery('iframe').attr('src','https://docs.google.com/forms/d/e/'+formid+'/viewform?embedded=true&entry.908291152='+fname+'&entry.696987736='+lname+'&entry.774317379='+email);
		}

		// Autoajustar altura de iframe después de enviar:
		var loadCounter = 0;
		var loaded = function() {
			loadCounter += 1;
			if (loadCounter === 2) {
				jQuery('article.category-encuestas iframe').attr('height','300px');
				jQuery(window).scrollTo(0,0)
			}
		}
		
	}


	// ATRIBUTOS - Personalizar
	jQuery('#commentform textarea').attr({
		'placeholder':'Escribir un comentario...'
	});
	jQuery('.wpdev-form-control-wrap input.subject').attr('placeholder','Asunto');
	jQuery('.wpdev-form-control-wrap textarea.participants').attr('placeholder','Participantes');
	jQuery('body.page-id-26272 .gp-search-bar,article[class*=category-casos-] .gp-search-bar').attr('placeholder','Buscar por cliente, solución, UN o UAC');
	jQuery('img[title],.read-more[title]').each(function(){jQuery(this).removeAttr('title');});
	jQuery('#post-content .post-text h2 a,#post-content>div>ul>li a').hover(function(){
		var title = jQuery(this).attr('title');
		jQuery(this).attr('tmp_title',title);
		jQuery(this).attr('title','');
	});


	// MOBILE - Ubicar buscador dentro del header
	jQuery(window).resize(function() {
		if ( jQuery(window).width() < 960 ) {
			jQuery('.is-search-form.is-form-id-26276').insertAfter('#logo').show();
			jQuery('.is-search-form.is-form-id-26276 input[name=s]').focus();
			jQuery('#header').css('top','46px');
			jQuery('#menu40gd').css('top','110px');
		}
		else {
			jQuery('#header').css('top','32px');
			jQuery('#menu40gd').css('top','84px');
			jQuery('#logo+.is-search-form.is-form-id-26276').insertBefore('.is-link-container').show();
		}
	});


	// GENERAL - Si hay cumpleaños:
	if ( jQuery('.bdays_today').length ) {
		var bday_img = Math.floor(Math.random()*1)+1;
		jQuery('.bdays_today img').attr('src','/wp-content/uploads/birthday-gd'+bday_img+'.gif');
	}
	jQuery('.bdays_upcom').click(function(e){
		jQuery(this).removeClass('collapse');
	});


	// CASOS - Si es miércoles: avisar para carga de casos
	/*var today = new Date();
	var day = today.getDay() || 7;
	if ( day == 3 && (jQuery('body').hasClass('role-comercial_ar') || jQuery('body').hasClass('role-administrator')) ) {
		if ( jQuery.cookie('hide_modal-casos') !== 'hidden' ) {
			jQuery.magnificPopup.open({
				items: {
					src: '<div id="modal-casos" class="white-popup"><h2>Compartí tu experiencia de ventas</h2><p><i class="far fa-trophy"></i>Contanos qué proyecto cerraste y de qué se trata para que tus compañeros/as se enteren. Lo dejaremos registrado y esperamos que sea un disparador de nuevas ventas.</p><div class="buttons"><a class="sc-button large" href="/marketing/nuevos-casos/">Enviar nuevo caso de cliente</a><br /><a id="hide_modal-casos" class="sc-button small inline" href="#hide_modal-casos">Recordarme en 1 semana</a></div></div>',
					type: 'inline'
				}
			});
		}
	}
	else {
		jQuery.cookie('hide_modal-casos',null);
	}
	jQuery(document).on('click','#hide_modal-casos',function(e) {
		jQuery.cookie('hide_modal-casos','hidden',{expires:7});
		jQuery.magnificPopup.close();
		e.preventDefault();
	});*/


	// CONTENIDOS - Ocultar párrafos con espacios en blanco
	jQuery('p').filter(function(){return jQuery.trim(this.innerHTML)===''}).remove();
	jQuery('p').filter(function(){return jQuery.trim(this.innerHTML)==='&nbsp;'}).remove();


	// CONTENIDOS - Referencia de Internet Explorer para módulos de Dropbox
	if ( jQuery('.UseyourDrive').length && !jQuery('body').hasClass('fullwidth')) {
		jQuery('.UseyourDrive').append('<div class="info-material"><i class="fas fa-info-circle"></i><strong style="font-weight:600">Por nuevos contenidos o material desactualizado, por favor <a href="mailto:somos@datco.net" style="text-decoration:underline">contactanos</a></strong>.<br />La descarga de archivos funciona con <a href="http://www.google.com/chrome/" target="_blank">Google Chrome</a>, <a href="http://www.microsoft.com/es-ar/windows/microsoft-edge" target="_blank">Microsoft Edge</a>, <a href="http://www.mozilla.org/es-AR/" target="_blank">Mozilla Firefox</a> u <a href="https://www.opera.com/es" target="_blank">Opera</a>.</div>');
	}
	if ( jQuery('.yotu-playlist').length && !jQuery('body').hasClass('fullwidth')) {
		if ( !jQuery('body.post-template-default article').hasClass('category-salesforce') ) {
			jQuery('.yotu-playlist').prepend('<div class="info-material"><i class="fas fa-info-circle"></i><strong style="font-weight:600"><a href="https://www.youtube.com/grupodatco" target="_blank">Nuestro canal de YouTube</a> funciona como único repositorio para videos públicos e internos. Todo material de video interno o no autorizado a difundir públicamente son visibles sólo en nuestro portal.</strong><br />Tip: la descarga de un video de YouTube puede hacerse desde <a href="https://www.y2mate.com/es1/youtube" target="_blank">y2mate.com</a>.</div>');
		}
	}


	// CONTENIDOS - Convertir a popup
	jQuery('.wp-block-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		tClose: 'Cerrar (Esc)',
		tLoading: 'Cargando...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
			tPrev: 'Anterior (tecla ←)',
			tNext: 'Siguiente (tecla →)',
			tCounter: '<span class="mfp-counter">%curr% de %total%</span>'
		},
		image: {
			tError: 'La imagen no pudo ser cargada.',
			titleSrc: function(item) {
				return item.el.siblings('figcaption').html();
			},
		},
		ajax: {
			tError: 'La solicitud falló.'
		}
	});
	jQuery('.wp-block-image:not(.custom-link):not(.no-lightbox)').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		tClose: 'Cerrar (Esc)',
		tLoading: 'Cargando...',
		image: {
			tError: 'La imagen no pudo ser cargada.',
			titleSrc: function(item) {
				return item.el.siblings('figcaption').html();
			},
		},
		ajax: {
			tError: 'La solicitud falló.'
		}
	});
	jQuery('div:not([data-title*="GD40 - Salón"]) .grid-gallery-caption').magnificPopup({
		type: 'image',
		callbacks: {
			elementParse: function(item) {
				item.src = item.el.parent().attr('href');
			}
		},
		mainClass: 'mfp-img-mobile',
		tClose: 'Cerrar (Esc)',
		tLoading: 'Cargando...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
			tPrev: 'Anterior (tecla ←)',
			tNext: 'Siguiente (tecla →)',
			tCounter: '<span class="mfp-counter">%curr% de %total%</span>'
		},
		image: {
			tError: 'La imagen no pudo ser cargada.',
			titleSrc: function(item) {
				return item.el.text();
			},
		},
		ajax: {
			tError: 'La solicitud falló.'
		}
	});


	// CONTENIDOS - Ver foto al clickear en figcaption
	jQuery('.blocks-gallery-item figcaption').on('click',function(e) {
		e.preventDefault();
		jQuery(this).prev('a').trigger('click');
	});


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

	// MANTENIMIENTO - Cambiar idioma del botón en barra de administración
	jQuery('#wp-admin-bar-maintenance_options>a[title*=Off]').text('Mantenimiento desactivado');
	jQuery('#wp-admin-bar-maintenance_options>a[title*=On]').text('Mantenimiento activado');


	// FORMULARIOS - [IMPORTANTE PARA MAILCHIMP] Agregar textos para la opción free_text en checkbox
	jQuery('.wpcf7-free-text').blur(function(e) {
		if ( jQuery(this).attr('data-usage') != 'true' ) {
			jQuery(this).attr('data-text',jQuery(this).parent().find('input[type=checkbox]').val());
			jQuery(this).attr('data-usage','true');
		}
		jQuery(this).parent().find('input[type=checkbox]').val(jQuery(this).attr('data-text')+': '+jQuery(this).val());
	});


	// FORMULARIOS - Al enviar un form
	document.addEventListener('wpcf7submit', function(event) {
		jQuery(this).addClass('sending');
		jQuery('.wpcf7-form.sending .wpcf7-submit').attr('name',jQuery('.wpcf7-form.sending .wpcf7-submit').val());
		jQuery('.wpcf7-form.sending .wpcf7-submit').val('Enviando...');
	}, false );


	// FORMULARIOS - Al enviar un form con éxito
	document.addEventListener('wpcf7mailsent', function(event) {
		if ( event.detail.contactFormId == 42593 ) {
			jQuery('.filledwithmap+a').hide();
		}
	}, false );


	// FORMULARIOS - Agregar clase en .wpcf7-form-control-wrap si es un select
	jQuery('.wpcf7-form-control-wrap').each(function(i) {
		if ( jQuery('.wpcf7-form-control-wrap:eq('+i+') .wpcf7-select').length > 0 ) {
			jQuery('.wpcf7-form-control-wrap:eq('+i+')').addClass('wpcf7-form-control-select');
		}
		if ( jQuery('.wpcf7-form-control-wrap:eq('+i+') .wpcf7-date').length > 0 ) {
			jQuery('.wpcf7-form-control-wrap:eq('+i+')').addClass('wpcf7-form-control-date');
		}
	});


	// FORMULARIOS - Repartir valores (ID) y textos (nombre) de categorías en opciones
	jQuery('.wpcf7-select option').each(function(i) {
		if ( jQuery(this).text().indexOf(';') > -1 ) {
			var input_value = jQuery(this).text();
			var id_cat = input_value.substring(input_value.indexOf(';')+1,input_value.length);
			input_value = input_value.substring(0,input_value.indexOf(';'));
			jQuery(this).attr('data-cat-id',id_cat);
			if ( jQuery('.wpcf7').attr('id') == 'wpcf7-f29440-p29106-o1' ) {
				jQuery(this).val(id_cat);
			}
			jQuery(this).text(input_value);
		}
		if ( jQuery(this).text().indexOf('-') > -1 ) {
			var input_value = jQuery(this).text();
			if ( jQuery(this).parent().attr('name').indexOf('CC_UNIT') > -1 && jQuery('body').hasClass('page-id-26272') ) {
				input_value = input_value.substring(input_value.indexOf('-')+2,input_value.length);
			}
			jQuery(this).text(input_value).val(input_value);
		}
		if ( jQuery(this).text().indexOf('—') > -1 && jQuery(this).text() != '—' ) {
			jQuery(this).attr('disabled','disabled');
		}
	});
	jQuery(document).on('change','.wpcf7-select',function() {
		var input_name = jQuery(this).attr('name');
		// Si es un select multiple
		if ( input_name.indexOf('[]') > -1 ) {
			var selMulti = jQuery.map(jQuery('option:selected',this), function(el,i) {
				return jQuery(el).text();
			});
			var val_comma = selMulti.join('; ');
			input_name= input_name.substring(0,input_name.length-2);
			if ( jQuery('.wpcf7-'+input_name).length ) {
				jQuery('.wpcf7-'+input_name).text(val_comma);
			}
			if ( jQuery('input[name='+input_name+'TXT]').length ) {
				jQuery('input[name='+input_name+'TXT]').val(val_comma);
			}
		}
		else {
			var val_single = jQuery('option:selected',this).text();
			if ( jQuery('.wpcf7-'+input_name).length ) {
				jQuery('.wpcf7-'+input_name).text(val_single);
			}
			if ( jQuery('input[name='+input_name+'TXT]').length ) {
				if ( input_name == 'CC_UNIT' ) {
					val_single = val_single.substring(val_single.indexOf('-')+2,val_single.length)
				}
				jQuery('input[name='+input_name+'TXT]').val(val_single);
			}
		}
	});


	// FORMULARIOS - Agregar clase "last" en el último bloque de 1 columna
	jQuery('.columns.one:last').addClass('last');


	// FORMULARIOS - Convertir a mayúsculas
	jQuery('input[name*=ORG]').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toUpperCase());
	});


	// FORMULARIOS - Convertir a minúsculas
	jQuery('input[name*=EMAIL],input[name=RESPBOSSEMAIL]').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toLowerCase());
	});


	// FORMULARIOS - Convertir a letras capitales
	jQuery('input[name*=FNAME],input[name*=LNAME]').on('input',function (e) {
		jQuery(this).capitalize();
	});
	

	// FORMULARIOS - Ir hacia el primer error
	jQuery(document).on('click','.wpcf7-response-output',function(e) {
		jQuery('html, body').animate({
			scrollTop: jQuery('.wpcf7-not-valid:first').offset().top-150}, 500, function(){
				jQuery('.wpcf7-not-valid:first').focus();
			}
		);
	});


	// FORMULARIOS - Ir al :input al clickear en aviso de error
	jQuery(document).on('click','label.error',function(e) {
		jQuery(this).parent().find(':input').focus();
	});


	// FORMULARIOS - Limpiar espacios al salir del campo
	jQuery(document).on('blur','.wpcf7 input[type=text]',function(){
		jQuery('.wpcf7 input[type=text]').each(function(){
			this.value = jQuery(this).val().trim();
		});
	});


	// FORMULARIOS - Limpiar validación al escribir al completar
	jQuery(document).on('blur','.wpcf7-not-valid',function(){
		if ( jQuery(this).val().length > 0 ) {
			jQuery(this).removeClass('wpcf7-not-valid');
			jQuery(this).siblings('.wpcf7-not-valid-tip').hide();
		}
		else {
			jQuery(this).addClass('wpcf7-not-valid');
			jQuery(this).siblings('.wpcf7-not-valid-tip').show();
		}
	});


	// FORMULARIOS - Ir a página en cambio de select para .nav-posts
	jQuery('.nav-posts select').val(window.location.href);
	jQuery(document).on('change','.nav-posts select', function() {
			var url = jQuery(this).val();
		if (url) {
			window.location = url;
		}
		return false;
	});


	// FORMULARIOS - Focus en input al clickear un label
	var labelID;
	jQuery('.wpcf7 label').click(function() {
		labelID = jQuery(this).attr('for');
		jQuery(':input[name='+labelID+']').focus();
	});


	// FORMULARIOS - Cambiar opción por ítem con costo según cantidad
	var obj_scosto = 0;
	jQuery('.MERCH1 option').each(function(i) {
		if ( jQuery(this).val() != '—Con costo' ) {
			obj_scosto++;
		}
		else {
			obj_scosto = obj_scosto-1;
			return false;
		}
	});
	var limit_obj_scosto = obj_scosto*2+1;
	jQuery('input[name^=CANT]').keyup(function(e) {
		var inp_index = jQuery(this).attr('name');
		inp_index = inp_index.substring(inp_index.indexOf('CANT')+4,inp_index.length);
		if ( jQuery('.MERCH'+inp_index+' select').prop('selectedIndex') != 0 && jQuery('.MERCH'+inp_index+' .wpcf7-response-info').length == 0 ) {
			var opt_index = jQuery('.MERCH'+inp_index+' select').prop('selectedIndex');
			// Si la cantidad es mayor a 10, se convierte con costo
			if ( jQuery(this).val() > 10 && opt_index <= obj_scosto ) {
				opt_index = opt_index+obj_scosto;
				jQuery('.MERCH'+inp_index+' select').prop('selectedIndex',opt_index)
			}
			// Si la cantidad es menor o igual a 10 y es un objeto elegido que no tiene costo, se convierte sin costo
			else if ( jQuery(this).val() <= 10 && (opt_index > obj_scosto && opt_index < limit_obj_scosto) ) {
				opt_index = opt_index-obj_scosto;
				jQuery('.MERCH'+inp_index+' select').prop('selectedIndex',opt_index)	
			}
		}
	});
	jQuery('select[name^=MERCH]').change(function(e) {
		var inp_index = jQuery(this).attr('name');
		inp_index = inp_index.substring(inp_index.indexOf('MERCH')+5,inp_index.length);
		var opt_index = jQuery('.MERCH'+inp_index+' select').prop('selectedIndex');
		if ( jQuery('.CANT'+inp_index+' input').val() > 10 ) {
			if ( opt_index <= obj_scosto ) {
				jQuery('.CANT'+inp_index+' input').val(10);
			}
		}
	});


	// FORMULARIOS - Deshabilitar autocompletado
	jQuery('.autocompleteoff').attr('autocomplete','off');


	// FORMULARIO - Domicilio a través de Google Maps
	if ( jQuery('.address_maps').length ) {
		
		// Datos de usuario
		jQuery('input[name=PHONE]').val(jQuery('input[name=gdPHONE_mc]').val());
		jQuery('input[name="SAMEDATAPAX[]"]').change(function() {
			if ( this.checked ) {
				jQuery('select[name=ORG] option:contains('+jQuery('input[name=gdGroupa08454c0b0]').val()+')').prop('selected','selected');
				jQuery('select[name=CC_UNIT] option:contains('+jQuery('input[name=gdUNIT_mc]').val()+')').prop('selected','selected');
				jQuery('input[name=FNAMEPAX]').val(jQuery('input[name=FNAME]').val());
				jQuery('input[name=LNAMEPAX]').val(jQuery('input[name=LNAME]').val());
				jQuery('input[name=EMAILPAX]').val(jQuery('input[name=EMAIL]').val());
				jQuery('input[name=PHONEPAX]').val(jQuery('input[name=PHONE]').val());
			}
			else {
				jQuery('input[name$=PAX]').val('');
				jQuery('select[name=ORG],select[name=CC_UNIT]').prop('selectedIndex',0);
			}
		});
		jQuery('input[name="PAXWHAT"]').change(function() {
			if ( this.value == 'Envío' ) {
				jQuery('input[name=FNAMEPAX]').val('');
				jQuery('input[name=LNAMEPAX]').val('');;
			}
			else {
				jQuery('input[name=FNAMEPAX]').val(jQuery('input[name=FNAME]').val());
				jQuery('input[name=LNAMEPAX]').val(jQuery('input[name=LNAME]').val());
			}
		});

		// Autocompletado por Google Maps API
		var $addressAutoCompleteInput = jQuery('.address_maps');
		addressAutocomplete1 = new google.maps.places.Autocomplete($addressAutoCompleteInput[0], {
			componentRestrictions: {
				country:['ar','br','cl','mx','pe','pr','uy']
			}
		});
		addressAutocomplete2 = new google.maps.places.Autocomplete($addressAutoCompleteInput[1], {
			componentRestrictions: {
				country:['ar','br','cl','mx','pe','pr','uy']
			}
		});
		addressAutocomplete3 = new google.maps.places.Autocomplete($addressAutoCompleteInput[2], {
			componentRestrictions: {
				country:['ar','br','cl','mx','pe','pr','uy']
			}
		});
		addressAutocomplete4 = new google.maps.places.Autocomplete($addressAutoCompleteInput[3], {
			componentRestrictions: {
				country:['ar','br','cl','mx','pe','pr','uy']
			}
		});
		addressAutocomplete1.addListener('place_changed', function() {
			var address = addressAutocomplete1.getPlace().formatted_address;
			var input_name = 'IDAFROM';
			var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=250x250&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address+'&zoom=16&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
			jQuery('.'+input_name).removeClass('filledwithmap').addClass('filledwithmap');
			jQuery('.'+input_name+'+a').css('display','block').attr('href','https://www.google.com/maps/search/'+address);
			jQuery('.'+input_name+'+a img').attr('src',img_src);
		});
		addressAutocomplete2.addListener('place_changed', function() {
			var address = addressAutocomplete2.getPlace().formatted_address;
			var input_name = 'IDATO';
			var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=250x250&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address+'&zoom=16&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
			jQuery('.'+input_name).removeClass('filledwithmap').addClass('filledwithmap');
			jQuery('.'+input_name+'+a').css('display','block').attr('href','https://www.google.com/maps/search/'+address);
			jQuery('.'+input_name+'+a img').attr('src',img_src);
		});
		addressAutocomplete3.addListener('place_changed', function() {
			var address = addressAutocomplete3.getPlace().formatted_address;
			var input_name = 'VUELTAFROM';
			var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=250x250&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address+'&zoom=16&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
			jQuery('.'+input_name).removeClass('filledwithmap').addClass('filledwithmap');
			jQuery('.'+input_name+'+a').css('display','block').attr('href','https://www.google.com/maps/search/'+address);
			jQuery('.'+input_name+'+a img').attr('src',img_src);
		});
		addressAutocomplete4.addListener('place_changed', function() {
			var address = addressAutocomplete4.getPlace().formatted_address;
			var input_name = 'VUELTATO';
			var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=250x250&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address+'&zoom=16&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
			jQuery('.'+input_name).removeClass('filledwithmap').addClass('filledwithmap');
			jQuery('.'+input_name+'+a').css('display','block').attr('href','https://www.google.com/maps/search/'+address);
			jQuery('.'+input_name+'+a img').attr('src',img_src);
		});

	}


	// BOTONES - Agregar botones de archivo
	jQuery('<a href="/wp-admin/profile.php#gdBIRTH_mc" class="sc-button blue small">Editar mi cumpleaños</a>').insertAfter('.sidebar .bdays_today~.toggle-box');


	// LATERAL - Desplegables
	jQuery('#custom_html-11 .toggle-box').show();
	jQuery('#custom_html-11 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	jQuery('#custom_html-24 .toggle-box').show();
	jQuery('#custom_html-24 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	jQuery(document).on('click','.toggle',function(e) {
		jQuery(this).next('.toggle-box').slideToggle();
		if ( jQuery(this).find('i').hasClass('fa-plus-square') ) {
			jQuery(this).find('i').removeClass('fa-plus-square').addClass('fa-minus-square');
		}
		else if ( jQuery(this).find('i').hasClass('fa-minus-square') ) {
			jQuery(this).find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
		}
	});


	// LATERAL - Expandir widget
	jQuery('.widget .widgettitle').append('<a class="topopup" href="#topopup"><i class="far fa-expand-arrows"></i></a>');
	jQuery(document).on('click','.widget .widgettitle .topopup',function(e) {
		e.preventDefault();
		var get_widget = jQuery(this).parent().parent().attr('id');
		var cloned_widget = jQuery('#'+get_widget).clone();
		jQuery.magnificPopup.open({
			items: {
				src: cloned_widget,
			},
			type: 'inline'
		});
	});
	

	// LATERAL - Convertir a galería las referencias
	jQuery('.widget_ref').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		tClose: 'Cerrar (Esc)',
		tLoading: 'Cargando...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
			tPrev: 'Anterior (tecla ←)',
			tNext: 'Siguiente (tecla →)',
			tCounter: '<span class="mfp-counter">%curr% de %total%</span>'
		},
		image: {
			tError: 'La imagen no pudo ser cargada.',
			titleSrc: function(item) {
				return item.el.siblings('figcaption').html();
			},
		},
		ajax: {
			tError: 'La solicitud falló.'
		}
	});


	// FOOTER - Copyright
	var yy = new Date().getFullYear();
	jQuery('<div class="bottom_logos"><a href="https://somos.grupodatco.com"><img src="/wp-content/uploads/gd-ima_h-one_color.svg" width="191" height="64" alt="40 años de Grupo Datco" /></a><br />© '+yy+' &bull; Somos Grupo Datco<br /><a href="https://www.linkedin.com/company/grupodatco" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i> Grupo Datco</a> &middot; <a href="https://www.linkedin.com/showcase/baitcon-gd" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i> Baitcon</a> &middot; <a href="https://www.linkedin.com/showcase/silicanetworks" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i> Silica Networks</a> &middot; <a href="https://twitter.com/grupodatco" target="_blank" rel="noopener"><i class="fab fa-twitter"></i> Grupo Datco</a> &middot; <a href="https://twitter.com/baitcon_gd" target="_blank" rel="noopener"><i class="fab fa-twitter"></i> Baitcon</a> &middot; <a href="https://www.youtube.com/grupodatco" target="_blank" rel="noopener"><i class="fab fa-youtube"></i> Grupo Datco</a></div>').appendTo('#copyright');


	// EVENTOS - Agregar enlace a eventos del mes en menú y calendario
	var yy = new Date().getFullYear();
	var mm = ('0'+(new Date().getMonth()+1)).slice(-2);
	jQuery('#eo_calendar_widget-7 .widget_ref').attr({
		'data-ny': yy,
		'data-nm': mm
	});
	jQuery('#menu-item-18425>a').attr('href','/eventos/fecha/'+yy+'/'+mm+'/');
	jQuery('#eo_calendar_widget-7 .widget_ref').after('<a href="/eventos/fecha/'+yy+'/'+mm+'/" class="sc-button blue small">Ver eventos del mes</a>');


	// EVENTOS - Agregar referencias para calendario de eventos y capacitaciones
	jQuery('#eo_calendar_widget-7_content').after('<div class="widget_ref"><a class="propios" href="/eventos/categoria/propios/">Propios</a><a class="patrocinamos" href="/eventos/categoria/patrocinamos/">Patrocinamos</a><a class="asistimos" href="/eventos/categoria/asistimos/">Asistimos</a><a class="otros-eventos" href="/eventos/categoria/otros-eventos/">Otros eventos</a></div>');


	// EVENTOS - Convertir textos en descripción con "http" en link:
	if ( jQuery('article.event').length ) {
		!function(t){"use strict";var n=/\b(?:\b[a-z\d.-]+:\/\/[^<>\s]+|\b(?:(?:(?:[^\s!@#$%^&*()_=+[\]{}\|;:'",.<>\/?]+)\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]))(?:[;\/][^#?<>\s]*)?(?:\?[^#<>\s]*)?(?:#[^<>\s]*)?(?!\w))/gi;t.fn.urlToLink=function(e){return e=t.extend({},t.fn.urlToLink.defaults,e),this.each(function(){t(this).html(t(this).html().replace(n,function(t){var n=t,s="",a="",m=0;if(e.removeHttp&&(n=n.replace("http://","").replace("https://","")),s=n,e.compressTo&&n.length>e.compressTo&&(m=(e.compressTo-e.compressWith.length)/2,s=n.substring(0,m)+e.compressWith+n.slice(-m)),e.domainOnly){var i=-1;if(s.indexOf("http")>-1){var r=s.indexOf("/"),l=r+2+s.substring(r+2).indexOf("/");l>r+2&&(i=l)}else i=s.indexOf("/");i>3&&(s=s.substring(0,i))}return e.nofollow&&(a="nofollow"),' <a href="'+t+'" title="'+t+'" target="'+e.target+'" rel="'+a+'">'+s+"</a>"}))})},t.fn.urlToLink.defaults={domainOnly:!0,nofollow:!0,target:"_self",compressWith:"&hellip;"}}(jQuery);
		jQuery('.entry-content p').urlToLink();
	}


	// EVENTOS - Quitar link de venue
	if ( jQuery('body').hasClass('archive') ) {
		jQuery('.eo-event-meta li:first-child strong+a:not([rel=tag])').contents().unwrap();
	}


	// EVENTOS - Sumar/Restar año y mes al clickear en links de cambio de mes
	jQuery(document).on('click','#wp-calendar tfoot a',function(e) {
		var this_href = jQuery(this).attr('href');
		var yy = this_href.substring(this_href.indexOf('=')+1,this_href.indexOf('-'));
		var mm = this_href.substr(this_href.indexOf('-')+1,2);
		jQuery('#eo_calendar_widget-7 .widget_ref+a').attr('href','/eventos/fecha/'+yy+'/'+mm+'/');
	});


	// VIDEOS - Cambiar texto "load more"
	jQuery('.yotu-pagination-more').text('Ver más');


	// BÚSQUEDAS LABORALES - Agregar título, UN y botón CTA
	if ( jQuery('article').hasClass('category-busquedas-laborales') ) {
		var post_title = jQuery('.page-title').text();
		var mails_rrhh = jQuery('#post-content table tr:last td:last').text();
		var arr_mails_rrhh = mails_rrhh.split(';');
		jQuery('#post-content table tr:last td:last').empty();
		jQuery.each(arr_mails_rrhh, function(i) {
			var mail_rrhh = arr_mails_rrhh[i];
				jQuery('#post-content table tr:last td:last').append('<a class="lider_rrhh" href="mailto:'+mail_rrhh+'" target="_blank">'+mails_rrhh+'</a>');
		});
		if ( jQuery('article').hasClass('category-busquedas-laborales-activas') ) {
			jQuery('<div class="buttons"><div class="info"><em>Podés postularte directamente enviándonos tu CV o referir a un amigo/a.<br />En caso de que el perfil aplique para la búsqueda, nos pondremos en contacto.</em></div><a href="mailto:'+mails_rrhh+'?subject='+post_title+'" target="_blank" class="sc-button">Enviar CV</a><br /><a href="/categoria/busquedas-laborales-activas/">Ver otras búsquedas activas</a></div>').insertAfter('#post-content table');
		}
		else {
			jQuery('<div class="buttons"><a href="/categoria/busquedas-laborales-activas/" class="sc-button">Ver búsquedas activas</a></div>').insertAfter('#post-content table');
		}
	}

	
});