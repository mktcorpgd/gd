// Precarga
!function(){function t(){document.body.classList.add("loaded")}var e=document.getElementById("loftloader-wrapper");if(e){if(window.addEventListener("load",function(e){t()}),e.dataset&&e.dataset.showCloseTime){var a=parseInt(e.dataset.showCloseTime,10),n=!1,o=e.getElementsByClassName("loader-close-button");a&&o.length&&(setTimeout(function(){o[0].style.display=""},a),o[0].addEventListener("click",function(e){t()}))}e.dataset.maxLoadTime&&(n=e.dataset.maxLoadTime,(n=parseInt(n,10))&&setTimeout(function(){t()},n))}}();


// Eliminar caracteres especiales
function RemoveAccents(str) {
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
	var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
	str = str.split('');
	var strLen = str.length;
	var i,x;
	for (i = 0; i<strLen; i++) {
		if ((x = accents.indexOf(str[i])) != -1) {
			str[i] = accentsOut[x];
		}
	}
	return str.join('');
}


// Convertir texto a letras capitales
jQuery.fn.capitalize = function(e) {
	jQuery.each(this,function(){
		var split = this.value.split(' ');
		for (var i = 0,len = split.length; i < len; i++) {
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

    function nl2br (str, is_xhtml) {     
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br/>' : '<br>';      
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');  
    }  

	// HOME - Si tiene más de 1700 px de altura, colapsar contenido de pestañas
	if ( jQuery('body').hasClass('page-id-41477') ) {
		jQuery('.post-loop:not(.tag-tutorial-sub) h2 a').each(function(i) {
			var new_title = jQuery(this).text();
			new_title = new_title.substring(new_title.indexOf('.')+2,new_title.length);
			jQuery(this).text(new_title);
			var icon = new_title.substring(new_title.indexOf('|')-1,1);
			new_title = new_title.substring(new_title.indexOf('|')+1,new_title.length)
			jQuery(this).html('<span class="icon">'+icon+'</span><br />'+new_title);
		});

		jQuery('.post-loop.tag-tutorial-sub5').addClass('hidden');
		jQuery('.post-loop.tag-tutorial-main').hover(
			function() {
				var real_index = jQuery(this).index()+1;
				jQuery(this).siblings('.tag-tutorial-sub'+real_index).removeClass('hidden');
			}, function() {
				var real_index = jQuery(this).index()+1;
				jQuery(this).siblings('.tag-tutorial-sub'+real_index).addClass('hidden');
			}
		  );
		  
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


	// BUSCADOR - Si es mobile: buscador dentro del header
	if ( jQuery(window).width() < 960 ) {
		jQuery('.is-search-form.is-form-id-26276').insertAfter('#logo').show();
		jQuery('.is-search-form.is-form-id-26276 input[name=s]').focus();
	}
	jQuery(window).resize(function() {
		if ( jQuery(window).width() < 960 ) {
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
			jQuery('.yotu-playlist').prepend('<div class="info-material"><i class="fas fa-info-circle"></i><strong style="font-weight:600"><a href="https://www.youtube.com/grupodatco" target="_blank">Nuestro canal de YouTube</a> funciona como único repositorio para videos públicos e internos. Todo material de video interno o no autorizado a difundir públicamente son visibles sólo en nuestro portal.</strong><br />Tip: la descarga de un video de YouTube puede hacerse desde <a href="https://www.y2mate.com/es1/youtube" target="_blank">y2mate.com</a>.</div>');
	}


	// CONTENIDOS - Agregar clase "dropcap" si el primer párrafo es mayor a 150 caracteres
	if ( !jQuery('body').hasClass('page') ) {
		if ( jQuery('#post-content p:first').text().length > 180 ) {
			jQuery('#post-content p:first').addClass('dropcap');
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


	// FORMULARIOS - Al clickear submit mostrar sending
	jQuery(document).on('submit','.wpcf7-form',function() {
		jQuery(this).addClass('sending');
		jQuery('.wpcf7-form.sending .wpcf7-submit').attr('name',jQuery('.wpcf7-form.sending .wpcf7-submit').val());
		jQuery('.wpcf7-form.sending .wpcf7-submit').val('Enviando...');
	});


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
			if ( input_value != '—' ) {
				var input_name = jQuery(this).parent().attr('name').replace(/[[]]/g,'');
				var id_cat = input_value.substring(input_value.indexOf(';')+1,input_value.length);
				input_value = input_value.substring(0,input_value.indexOf(';'));
				jQuery(this).attr('data-cat-id',id_cat);
				if ( jQuery('.wpcf7').attr('id') == 'wpcf7-f29440-p29106-o1' ) {
					jQuery(this).val(id_cat);
				}
				jQuery(this).text(input_value);
			}
		}
		if ( jQuery(this).text().indexOf('—') > -1 && jQuery(this).parent().attr('name') != 'CC_UNIT' ) {
			var input_value = jQuery(this).text();
			if ( input_value != '—' ) {
				input_value = input_value.substring(input_value.indexOf('—')+2,input_value.length);
				jQuery(this).text(input_value).val(input_value);
			}
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
	jQuery('input[name*=EMAIL],input[name=RESPBOSS]').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toLowerCase());
	});


	// FORMULARIOS - Convertir a letras capitales
	jQuery('input[name*=FNAME],input[name*=LNAME],input[name*=ADDRESS]').on('input',function (e) {
		jQuery(this).capitalize();
	});


	// FORMULARIOS - Deshabilitar si tiene |
	jQuery('option:contains(|)').attr('disabled','disabled');
	

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
	jQuery(document).on('blur','.wpcf7 input',function(){
		jQuery('input').each(function(){
			this.value = jQuery(this).val().trim();
		});
	});


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
	jQuery('#eo_calendar_widget-7_content').after('<div class="widget_ref"><a class="propios" href="/eventos/categoria/propios/">Propios</a><a class="patrocinamos" href="/eventos/categoria/patrocinamos/">Patrocinamos</a><a class="asistimos" href="/eventos/categoria/asistimos/">Asistimos</a><a class="no-participamos" href="/eventos/categoria/no-participamos/">No participamos</a></div>');


	// EVENTOS - Convertir textos http en link:
	if ( jQuery('article.event').length ) {
		var linkable_content = jQuery('.entry-content').html().replace(/(https?:\/\/[^ ;|\\*'"!,()<>]+\/?)/g,'<a href="$1" target="_blank">$1</a>');
		jQuery('.entry-content').html(linkable_content);
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


	// TARJETAS DIGITALES - Si tiene más de una...
	if ( jQuery('.bcard').length > 1 ) {
		jQuery('#text-4 .widgettitle').text('Mis tarjetas digitales');
	}


	// TARJETAS DIGITALES - Si no tiene una asignada...
	if ( jQuery('.bcard').length == -1 ) {
		jQuery('.menu .bcard-link a').text('Solicitar tarjeta digital').attr('href','/marketing/recursos/tarjeta-digital/');
	}
	jQuery('#nav .bcard-link a').click(function(e) {
		jQuery('#custom_html-23 > h3 > a').click();
		e.preventDefault();
	});


	// VIDEOS - Cambiar texto "load more"
	jQuery('.yotu-pagination-more').text('Ver más');


	// BUSQUEDAS LABORALES - Cambio de título en página de archivo
	if ( jQuery('body').hasClass('archive') && jQuery('body').hasClass('category-2797') ) {
		jQuery('.page-title').text('Búsquedas laborales activas');
	}
	else if ( jQuery('body').hasClass('archive') && jQuery('body').hasClass('category-2798') ) {
		jQuery('.page-title').text('Búsquedas laborales finalizadas');
	}


	// BÚSQUEDAS LABORALES - Agregar título, UN y botón CTA
	if ( jQuery('article').hasClass('category-busquedas-laborales') ) {
		var post_title = jQuery('.page-title').text();
		var mails_rrhh = jQuery('#post-content table tr:last td:last').text();
		var arr_mails_rrhh = mails_rrhh.split(';');
		jQuery('#post-content table tr:last td:last').empty();
		jQuery.each(arr_mails_rrhh, function(i) {
			var mail_rrhh = arr_mails_rrhh[i];
			var nom_rrhh = arr_mails_rrhh[i].substring(0,arr_mails_rrhh[i].indexOf('.'));
			var ape_rrhh = arr_mails_rrhh[i].substring(arr_mails_rrhh[i].indexOf('.')+1,arr_mails_rrhh[i].indexOf('@'));
			jQuery('#post-content table tr:last td:last').append('<a class="lider_rrhh" href="mailto:'+mail_rrhh+'" target="_blank">'+nom_rrhh+' '+ape_rrhh+'</a>');
		});
		if ( jQuery('article').hasClass('category-activa') ) {
			jQuery('<div class="buttons"><div class="info"><em>Podés postularte directamente enviándonos tu CV o referir a un amigo/a.<br />En caso de que el perfil aplique para la búsqueda, nos pondremos en contacto.</em></div><a href="mailto:'+mails_rrhh+'?subject='+post_title+'" target="_blank" class="sc-button">Enviar CV</a><br /><a href="/categoria/busquedas-laborales/activa/">Ver otras búsquedas activas</a></div>').insertAfter('#post-content table');
		}
		else {
			jQuery('<div class="buttons"><a href="/categoria/busquedas-laborales/activa/" class="sc-button">Ver búsquedas activas</a></div>').insertAfter('#post-content table');
		}
	}

	
});