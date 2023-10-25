// Precarga
!function(){function t(){document.body.classList.add("loaded")}var e=document.getElementById("loftloader-wrapper");if(e){if(window.addEventListener("load",function(e){t()}),e.dataset&&e.dataset.showCloseTime){var a=parseInt(e.dataset.showCloseTime,10),n=!1,o=e.getElementsByClassName("loader-close-button");a&&o.length&&(setTimeout(function(){o[0].style.display=""},a),o[0].addEventListener("click",function(e){t()}))}e.dataset.maxLoadTime&&(n=e.dataset.maxLoadTime,(n=parseInt(n,10))&&setTimeout(function(){t()},n))}}();

// Eliminar caracteres especiales
var normalize=(function(){var from="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",to="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",mapping={};for(var i=0,j=from.length;i<j;i++)mapping[from.charAt(i)]=to.charAt(i);return function(str){var ret=[];for(var i=0,j=str.length;i<j;i++){var c=str.charAt(i);if(mapping.hasOwnProperty(str.charAt(i))){ret.push( mapping[c]);}else{ret.push(c);}}return ret.join('').replace(/[^-A-Za-z0-9]+/g,'-').toLowerCase();}})();

// Obtener variables GET
jQuery.getPrm = function(name){var results=new RegExp('[?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}else{return results[1]||0;}}

// Convertir texto a letras capitales
jQuery.fn.capitalize=function(t){return jQuery.each(this,(function(){for(var t=this.value.split(" "),e=0,i=t.length;e<i;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substr(1).toLowerCase();this.value=t.join(" ")})),this};

// FORMULARIOS - Al enviar un form
jQuery(document).on('click','.wpcf7-submit',function(e) {
	jQuery(this).addClass('sending');
	jQuery(this).closest('.wpcf7-form').addClass('sending');
	jQuery(this).attr('name',jQuery(this).val());
	jQuery(this).val('Enviando...');
});

// FORMULARIOS - Respuesta afirmativa/negativa luego de enviar un form
document.addEventListener('wpcf7submit', function(event) {
	jQuery('.wpcf7-submit.sending').val(jQuery('.wpcf7-submit.sending').attr('name'));
	jQuery('.sending').removeClass('sending');
}, false);

// FORMULARIOS - Respuesta afirmativa luego de enviar un form
document.addEventListener('wpcf7mailsent', function(event) {
	if ( event.detail.contactFormId == 42593 ) {
		jQuery('input[name=PHONE]').val(jQuery('input[name=gdPHONE_mc]').val());
		jQuery('.filledwithmap+a').hide();
	}
}, false);


//  GENERAL - Redireccionar según oficina
/*if ( jQuery('body').attr('class').indexOf('home') > -1 ) {
	if ( jQuery('body').attr('class').indexOf('office-ar') > -1 ) {
		jQuery('.ui-tabs-anchor[href="#tab-Argentina"]').trigger('click');
	}
	else if ( jQuery('body').attr('class').indexOf('office-br') > -1 ) {
		jQuery('.ui-tabs-anchor[href="#tab-Brasil"]').trigger('click');
	}
	else if ( jQuery('body').attr('class').indexOf('office-cl') > -1 ) {
		jQuery('.ui-tabs-anchor[href="#tab-Chile"]').trigger('click');
	}
	else if ( jQuery('body').attr('class').indexOf('office-mx') > -1 ) {
		jQuery('.ui-tabs-anchor[href="#tab-Mxico"]').trigger('click');
	}
	else if ( jQuery('body').attr('class').indexOf('office-pe') > -1 ) {
		jQuery('.ui-tabs-anchor[href="#tab-Per"]').trigger('click');
	}
	else if ( jQuery('body').attr('class').indexOf('office-pr') > -1 ) {
		jQuery('.ui-tabs-anchor[href="#tab-PuertoRico"]').trigger('click');
	}	
}*/


jQuery(document).ready(function() {

	// GOOGLE FORMS
	if ( jQuery('iframe[src*="docs.google.com/forms"]').length ) {

		// Traer nombre, apelliedo y mail
		var fname = jQuery('#usrfname').val();
		var lname = jQuery('#usrlname').val();
		var email = jQuery('#usremail').val();

		// Generación de URL <iframe>
		var formid = jQuery('#gform').text();

		/* Encuesta GD40
		if ( jQuery('body').hasClass('page-id-25343') ) {
			jQuery('iframe').attr('src','https://docs.google.com/forms/d/e/'+formid+'/viewform?embedded=true&entry.908291152='+fname+'&entry.696987736='+lname+'&entry.774317379='+email);
		}*/

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

	// Kit
	if ( jQuery('.kit').length ) {
		jQuery('.wp-classic-menu-block.kit>.menu li:not(.file):not(.pwrp):not(.word):not(.pdf):not(.visible)').click(function(e) {
			jQuery(this).toggleClass('open');
			e.stopPropagation();
		});
		jQuery('.wp-classic-menu-block.kit>.menu li a[href^="#"]').click(function(e) {
			e.preventDefault();
		});
		var org = jQuery('input[name=gdORG_mc]').val();
		var org_class = normalize(org.toLowerCase());
		var office = jQuery('input[name=gdOFFICE_mc]').val();
		var office_class = normalize(office.toLowerCase());
		var unit = jQuery('input[name=gdUNIT_mc]').val();
		var unit_class = normalize(unit.toLowerCase());
		unit_class = unit_class.substring(0,unit_class.indexOf('-'));
		jQuery('h4.unit').text(unit);
		jQuery('.wp-classic-menu-block.kit .menu-item a:not([href*="#"])').attr('target','_blank');
		jQuery('.wp-classic-menu-block.kit>.menu li:not(.file):not(.pwrp):not(.word):not(.pdf):not(.visible)').addClass('open');
		if ( unit_class.indexOf('uas') > -1 ) {
			jQuery('.kit .menu-item:not(.uas):not(.visible)').hide();
		}
		if ( unit_class.indexOf('un') > -1 ) {
			jQuery('.kit .menu-item:not(:contains("'+org+'")):not(.visible)').hide();
			jQuery('.kit .menu-item:contains("'+org+'")>.sub-menu>li').show();
		}
	}


	// ATRIBUTOS - Personalizar
	jQuery('#commentform textarea').attr('placeholder','Escribir un comentario...');
	jQuery('body.page-id-26272 .is-search-input,article[class*=category-casos-] .is-search-input').attr('placeholder','Buscar por cliente, solución, UN o UAC');
	jQuery('body.page-id-41477 .is-search-input').attr('placeholder','Buscar por tema');
	jQuery('img[title],.read-more[title]').each(function(){jQuery(this).removeAttr('title');});
	jQuery('#post-content .post-text h2 a,#post-content>div>ul>li a').removeAttr('tmp_title').removeAttr('title');


	// MOBILE
	function headerMobile() {
		if ( jQuery(window).width() < 960 ) {
			jQuery('.is-form-id-26276:first').insertAfter('#logo');
		}
		else {
			jQuery('.is-form-id-26276:first').insertBefore('#page-wrapper');
		}
	}
	headerMobile();
	jQuery(window).resize(function() {
		headerMobile();
	});
	jQuery('#mobile-nav-button').click(function(e) {
		jQuery(this).toggleClass('gp-active');
		jQuery('#mobile-nav').toggle();
	});
	jQuery('#mobile-nav .menu li').each( function() {
		if ( jQuery(this).find('ul').length > 0 ) {
			jQuery('<i class="mobile-dropdown-icon" />').insertAfter(jQuery(this).children(':first'));		
		}		
	});
	function gpHeaderMobileTopNav() {
		jQuery('#mobile-nav ul > li').each(function() {
			var navItem = jQuery(this);
			if ( jQuery(navItem).find('ul').length > 0 ) {	
				jQuery(navItem).children('.mobile-dropdown-icon').click(function() {
					jQuery(navItem).toggleClass('gp-active');
					jQuery(navItem).children('.sub-menu').toggle();
					jQuery('#mobile-nav').toggleClass('auto-height');
				});
			}	
		});
	}
	gpHeaderMobileTopNav();


	// GENERAL - Si hay cumpleaños:
	if ( jQuery('.bdays_today').length ) {
		jQuery('.bdays_today img').attr('src','/wp-content/uploads/birthday-gd1.gif');
	}
	jQuery('.bdays_upcom').click(function(e){
		jQuery(this).removeClass('collapse');
	});


	// CASOS - Marcar filas vacías
	if ( jQuery('body.post-template-default').length ) {
		if ( jQuery('article').attr('class').indexOf('category-casos-') > -1 ) {
			jQuery('table td span').each(function(i) {
				if ( jQuery(this).is(':empty') || jQuery(this).text() == '.' ) {
					jQuery(this).parent().parent().addClass('empty');
				}
			});
		}
	}


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
		if ( jQuery(this).attr('data-usage') != 'true') {
			jQuery(this).attr('data-text',jQuery(this).parent().find('input[type=checkbox]').val());
			jQuery(this).attr('data-usage','true');
		}
		jQuery(this).parent().find('input[type=checkbox]').val(jQuery(this).attr('data-text')+': '+jQuery(this).val());
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


	// FORMULARIOS - Agregar clase "last" en el último bloque de 1 columna
	jQuery('.columns.one:last').addClass('last');


	// FORMULARIOS - Convertir a mayúsculas
	jQuery('input[name*=ORG],.uppercase').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toUpperCase());
	});


	// FORMULARIOS - Convertir a minúsculas
	jQuery('input[name*=EMAIL],input[name=RESPBOSSEMAIL],.lowercase').on('input',function(e) {
		jQuery(this).val(jQuery(this).val().toLowerCase());
	});


	// FORMULARIOS - Convertir a letras capitales
	jQuery('input[name*=FNAME],input[name*=LNAME],.capitalize').on('input',function (e) {
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


	// FORMULARIOS - Deshabilitar autocompletado
	jQuery('.autocompleteoff').attr('autocomplete','off');


	// FORMULARIOS - Deshabilitar scroll wheel
	jQuery('form').on('focus','input[type=number]',function(e) {
		jQuery(this).on('wheel.disableScroll',function(e) {
			e.preventDefault();
		});
	});
	jQuery('form').on('blur','input[type=number]',function(e) {
		jQuery(this).off('wheel.disableScroll');
	});
	  

	// FORMULARIOS - Si existe un checkbox para información adicional
	if ( jQuery('.check_add').length ) {
		jQuery('.check_add input[type=checkbox]').change(function() {
			var checkbox_name = jQuery(this).attr('name');
			var inputtext_name = jQuery(this).closest('.columns').find('input[type=text]').attr('name');
			var init_inputtext_name = inputtext_name.substr(0,5);
			if ( this.checked ) {
				if ( checkbox_name == 'NOW[]' ) {
					jQuery('input[name='+inputtext_name+']').val('Inmediata');
				}
				else if ( checkbox_name.indexOf('NOT') > -1 ) {
					jQuery('input[name^='+inputtext_name+']+.wpcf7-not-valid-tip').hide();
					jQuery('input[name^='+inputtext_name+']').val('—').attr('disabled',true);
				}
				else {
					var checkbox_checked = jQuery(this).siblings('.wpcf7-list-item-label').text();
					jQuery(this).val('*'+checkbox_checked);
				}
			}
			else {
				jQuery('input[name^='+inputtext_name+']').val('').removeAttr('disabled');
			}
		});	
	}

		
	// FORMULARIOS - Si existe un select
	if ( jQuery('.wpcf7-select').length ) {
		var id_form = jQuery('.wpcf7:first').attr('id');
		id_form = parseInt(id_form.substring(id_form.indexOf('wpcf7-f')+7,id_form.indexOf('-p')));
		jQuery('.wpcf7-select option').each(function(i) {
			// General - Marcar como deshabilitado si tiene — delante (<optgroup> no disponible en CF7)
			if ( jQuery(this).text().indexOf('—') > -1 && jQuery(this).text() != '—') {
				jQuery(this).attr('disabled','disabled');
			}
			// Casos de referencia - Si es formulario para enviar nuevo caso
			if ( id_form == 29440 ) {
				// Si hay un ; -> Asignar ID
				var text_opc = jQuery(this).text();
				if ( text_opc.indexOf(';') > -1 ) {
					var id_opc = text_opc.substring(text_opc.indexOf(';')+1,text_opc.length);
					text_opc = text_opc.substring(0,text_opc.indexOf(';'));
					jQuery(this).text(text_opc).attr({
						'data-cat-id':id_opc,
						'value':id_opc});
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
				// Copiar valores en su hidden TXT
				if ( jQuery('input[name='+input_name+'TXT]').length ) {
					jQuery('input[name='+input_name+'TXT]').val(val_comma);
				}
			}
			else {
				// Copiar valores en su hidden TXT
				var val_single = jQuery('option:selected',this).text();
				if ( jQuery('input[name='+input_name+'TXT]').length ) {
					if ( input_name == 'CC_UNIT') {
						val_single = val_single.substring(0,val_single.indexOf('(')-1);
					}
					jQuery('input[name='+input_name+'TXT]').val(val_single);
				}
			}
		});
	}


	// FORMULARIOS - Comportamiento según se agreguen/quiten grupos
	jQuery('.wpcf7 .control_group').click(function(e){
		var what_todo = jQuery(this).attr('id');
		var counter = parseInt(jQuery('#num_groups').val());
		if ( what_todo == 'add' ) {
			var num_groups_limit = parseInt(jQuery('#num_groups_limit').text());
			if ( (counter >= 1) && (counter <= num_groups_limit) ) {
				counter++;
				jQuery('.control_group').removeClass('disabled');
				jQuery('#num_groups').val(counter);
			}
			if ( counter == num_groups_limit ) {
				jQuery('#add').addClass('disabled');
			}
		}
		else if ( what_todo == 'remove' ) {
			var num_groups_limit = parseInt(jQuery('#num_groups_limit').text());
			if ( counter > 1 ) {
				counter--;
				jQuery('.control_group').removeClass('disabled');
				jQuery('#num_groups').val(counter);
			}
			if ( counter == 1 ) {
				jQuery('#remove').addClass('disabled');
			}
		}
	});
	jQuery('#num_groups').bind('keyup change click', function (e) {
		var counter = parseInt(jQuery('#num_groups').val());
		var num_groups_limit = parseInt(jQuery('#num_groups_limit').text());
		if ( counter > 1 ) {
			jQuery('.control_group').removeClass('disabled');
		}
		if ( counter == 1 ) {
			jQuery('#remove').addClass('disabled');
		}
		if ( counter == num_groups_limit ) {
			jQuery('#add').addClass('disabled');
		}
	});


	// [Merchandising] FORMULARIOS - Cambiar opción por ítem con costo según cantidad
	if ( jQuery('.MERCH1').length ) {
		var obj_scosto = 0;
		jQuery('.MERCH1 option').each(function(i) {
			if ( jQuery(this).val() != '—Con costo') {
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
	}


	// FORMULARIOS - Reemplazar nombres de usuarios con espacio
	if ( jQuery('input[name=USRURL]').length ) {
		var usrurl = jQuery('input[name=USRURL]').val().replace(' ','-');
		jQuery('input[name=USRURL]').val(usrurl);
	}
	

	// PREGUNTAS FRECUENTES - Desplegables abiertos
	jQuery('body.postid-49885 #content .toggle-box').show();
	jQuery('body.postid-49885 #content .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');


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
		e.preventDefault();
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
	jQuery('#sidebar-left .eo-widget-cal-wrap').after('<div class="widget_ref"><a class="propios" href="/eventos/categoria/propios/">Propios</a><a class="patrocinamos" href="/eventos/categoria/patrocinamos/">Patrocinamos</a><a class="asistimos" href="/eventos/categoria/asistimos/">Asistimos</a><a class="otros" href="/eventos/categoria/otros/">Otro</a></div>');


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