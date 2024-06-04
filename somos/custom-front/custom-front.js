// Precarga
!function(){function t(){document.body.classList.add("loaded")}var e=document.getElementById("loftloader-wrapper");if(e){if(window.addEventListener("load",function(e){t()}),e.dataset&&e.dataset.showCloseTime){var a=parseInt(e.dataset.showCloseTime,10),n=!1,o=e.getElementsByClassName("loader-close-button");a&&o.length&&(setTimeout(function(){o[0].style.display=""},a),o[0].addEventListener("click",function(e){t()}))}e.dataset.maxLoadTime&&(n=e.dataset.maxLoadTime,(n=parseInt(n,10))&&setTimeout(function(){t()},n))}}();

// Eliminar caracteres especiales
var normalize=(function(){var from="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",to="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",mapping={};for(var i=0,j=from.length;i<j;i++)mapping[from.charAt(i)]=to.charAt(i);return function(str){var ret=[];for(var i=0,j=str.length;i<j;i++){var c=str.charAt(i);if(mapping.hasOwnProperty(str.charAt(i))){ret.push( mapping[c]);}else{ret.push(c);}}return ret.join('').replace(/[^-A-Za-z0-9]+/g,'-').toLowerCase();}})();

// Obtener variables GET
jQuery.getPrm = function(name){var results=new RegExp('[?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}else{return results[1]||0;}}

// Convertir texto a letras capitales
jQuery.fn.capitalize=function(t){return jQuery.each(this,(function(){for(var t=this.value.split(" "),e=0,i=t.length;e<i;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substr(1).toLowerCase();this.value=t.join(" ")})),this};

// FORMULARIOS - Al enviar un form
$(document).on('click','.wpcf7-submit:not(.confirm)',function(e) {
	$(this).addClass('sending');
	$(this).closest('.wpcf7-form').addClass('sending');
	$(this).attr('name',$(this).val());
	$(this).val('Enviando...');
});

// FORMULARIOS - Respuesta afirmativa/negativa luego de enviar un form
document.addEventListener('wpcf7submit', function(event) {
	$('.wpcf7-submit.sending').val($('.wpcf7-submit.sending').attr('name'));
	$('.sending').removeClass('sending');
}, false);

// FORMULARIOS - Respuesta afirmativa luego de enviar un form
document.addEventListener('wpcf7mailsent', function(event) {
	if ( event.detail.contactFormId == 42593 ) {
		$('input[name=PHONE]').val($('input[name=gdPHONE_mc]').val());
		$('.filledwithmap+a').hide();
	}
}, false);

// FORMULARIOS - Evitar que se envíe presionando tecla Enter
document.addEventListener('DOMContentLoaded', function() {
	var form = document.querySelector('.wpcf7-form');
	if (form) {
		form.addEventListener('keypress', function(e) {
			var key = e.which || e.keyCode;
			if (key === 13) {
				e.preventDefault();
				return false;
			}
		});
	}
});


jQuery(document).ready(function($) {


	// KIT
	if ( $('.kit').length ) {
		$('.wp-classic-menu-block.kit .menu li.plus>a').click(function(e) {
			$(this).parent().toggleClass('open');
			e.preventDefault();
		});
		$('.wp-classic-menu-block.kit .menu-item a:not([href*="#"])').attr('target','_blank');
		var org = $('input[name=gdORGPROF]').val();
		var org_class = normalize(org.toLowerCase());
		var office = $('input[name=gdOFFICE_mc]').val();
		var unit = $('input[name=gdUNIT_mc]').val();
		if ( office.indexOf('AR') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.ar)').hide();
		}
		if ( office.indexOf('BR') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.br)').hide();
		}
		if ( office.indexOf('CL') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.cl)').hide();
		}
		if ( office.indexOf('MX') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.mx)').hide();
		}
		if ( office.indexOf('PE') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.pe)').hide();
		}
		if ( office.indexOf('PR') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.pr)').hide();
		}
		if ( office.indexOf('UY') > -1 ) {
			$('.kit .menu-item ul .menu-item:not(.uy)').hide();
		}
		if ( unit.indexOf('UAS') > -1 ) {
			$('.kit .menu-item.propuestas-comerciales,.kit .folletos-digitales>ul>.menu-item:not(:contains("Grupo Datco")),.kit .presentaciones-institucionales>ul>.menu-item:not(:contains("Grupo Datco")),.kit .ppts>ul>.menu-item:not(:contains("Grupo Datco"))').hide();
			$('.kit .menu-item.uas>.sub-menu>li').show();
		}
		if ( unit.indexOf('UAC') > -1 || unit.indexOf('UMAC') > -1 || unit.indexOf('UN') > -1 || unit.indexOf('PM') > -1 ) {
			$('.kit .menu-item.propuestas-comerciales,.kit .menu-item.pt').show();
		}
		if ( unit.indexOf('UMAC') > -1 || unit.indexOf('UN') > -1 || unit.indexOf('PM') > -1 ) {
			$('.kit .menu-item:not(:contains("'+org+'")):not("Grupo Datco")').hide();
			$('.kit .menu-item a[href="#grupo-datco"]+.sub-menu>li,.kit .menu-item:contains("'+org+'"),.kit .menu-item a[href*="'+org_class+'"]+.sub-menu>li').show();
		}
		if ( unit.indexOf('SCAI') > -1 ) {
			$('.kit .menu-item:contains("IoP")').show();
		}	
		$('h4.unit').text(unit);
		$('.kit .menu-item.visible').show();
	}


	// MOBILE
	$('#mobile-nav-button').click(function(e) {
		$(this).toggleClass('gp-active');
		$('#mobile-nav').toggle();
	});
	$('#mobile-nav .menu li').each( function() {
		if ( $(this).find('ul').length > 0 ) {
			$('<i class="mobile-dropdown-icon" />').insertAfter($(this).children(':first'));		
		}		
	});
	function gpHeaderMobileTopNav() {
		$('#mobile-nav ul > li').each(function() {
			var navItem = $(this);
			if ( $(navItem).find('ul').length > 0 ) {	
				$(navItem).children('.mobile-dropdown-icon').click(function() {
					$(navItem).toggleClass('gp-active');
					$(navItem).children('.sub-menu').toggle();
					$('#mobile-nav').toggleClass('auto-height');
				});
			}	
		});
	}
	gpHeaderMobileTopNav();


	// ADMIN - Etiquetas
	$('#wp-admin-bar-site-name>.ab-item').text('Escritorio');


	// MENÚ - preventDefault en links con #
	$('.menu>li>a[href*="#"]').on('click',function(e) {
		e.preventDefault()
	});

	// GENERAL - Buscador
	$('.asl_w_container').insertBefore('#left-content-wrapper');


	// GENERAL - Si hay cumpleaños:
	if ( $('.bdays_today').length ) {
		$('.bdays_today img').attr('src','/wp-content/uploads/cumple-1.png');
	}
	else {
		$('#custom_html-27').addClass('nobday');
	}
	$('.bdays_upcom').click(function(e){
		$(this).removeClass('collapse');
	});


	// GENERAL - Ir hacia parte de la página
	$('a[href^=#goto]').on('click',function(e) {
		var goto_selector = $(this).attr('href').substring(5,$(this).attr('href').length);
		$('html,body').animate({
			scrollTop: $('#'+goto_selector).offset().top-100},
			'slow',
			'easeInBounce'
		);
		e.preventDefault();
	});

		
	// CASOS - Marcar filas vacías
	if ( $('body.post-template-default').length ) {
		if ( $('article').attr('class').indexOf('category-casos-') > -1 ) {
			$('table td span').each(function(i) {
				if ( $(this).is(':empty') || $(this).text() == '.' ) {
					$(this).parent().parent().addClass('empty');
				}
			});
		}
	}


	// CONTENIDOS - Ocultar párrafos con espacios en blanco
	$('p').filter(function(){return jQuery.trim(this.innerHTML)===''}).remove();
	$('p').filter(function(){return jQuery.trim(this.innerHTML)==='&nbsp;'}).remove();


	// CONTENIDOS - Referencia de Internet Explorer para módulos de Dropbox
	if ( $('.yotu-playlist').length && !$('body').hasClass('fullwidth')) {
		if ( !$('body.post-template-default article').hasClass('category-salesforce') ) {
			$('.yotu-playlist').prepend('<div class="info-material"><a href="https://www.youtube.com/grupodatco" target="_blank">Nuestro canal de YouTube</a> funciona como único repositorio para videos públicos e internos. Todo material de video interno o no autorizado a difundir públicamente son visibles sólo en nuestro portal.</div>');
		}
	}


	// CONTENIDOS - Convertir a popup
	$('.wp-block-gallery').magnificPopup({
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
	$('body:not(.page-id-31537) .wp-block-image:not(.custom-link):not(.no-lightbox)').magnificPopup({
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
	$('div:not([data-title*="GD40 - Salón"]) .grid-gallery-caption').magnificPopup({
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
	$('.blocks-gallery-item figcaption').on('click',function(e) {
		e.preventDefault();
		$(this).prev('a').trigger('click');
	});
	
		
	// FORMULARIOS - Atributos
	$('#commentform textarea').attr('placeholder','Escribir un comentario...');
	$('body.page-id-26272 .is-search-input,article[class*=category-casos-] .is-search-input').attr('placeholder','Buscar por cliente, solución, UN o UAC');
	$('body.page-id-41477 .is-search-input').attr('placeholder','Buscar por tema');
	$('img[title],.read-more[title]').each(function(){$(this).removeAttr('title');});
	$('#post-content .post-text h2 a,#post-content>div>ul>li a').removeAttr('tmp_title').removeAttr('title');
	
		
	// FORMULARIOS - [Mailchimp] Agregar textos para la opción free_text en checkbox
	$('.wpcf7-free-text').blur(function(e) {
		if ( $(this).attr('data-usage') != 'true') {
			$(this).attr('data-text',$(this).parent().find('input[type=checkbox]').val());
			$(this).attr('data-usage','true');
		}
		$(this).parent().find('input[type=checkbox]').val($(this).attr('data-text')+': '+$(this).val());
	});


	// FORMULARIOS - Agregar clase en .wpcf7-form-control-wrap si es un select
	$('.wpcf7-form-control-wrap').each(function(i) {
		if ( $('.wpcf7-form-control-wrap:eq('+i+') .wpcf7-select').length > 0 ) {
			$('.wpcf7-form-control-wrap:eq('+i+')').addClass('wpcf7-form-control-select');
		}
		if ( $('.wpcf7-form-control-wrap:eq('+i+') .wpcf7-date').length > 0 ) {
			$('.wpcf7-form-control-wrap:eq('+i+')').addClass('wpcf7-form-control-date');
		}
	});


	// FORMULARIOS - Agregar clase "last" en el último bloque de 1 columna
	$('.columns.one:last').addClass('last');


	// FORMULARIOS - Convertir a mayúsculas
	$('input[name*=ORG],.uppercase').on('input',function(e) {
		$(this).val($(this).val().toUpperCase());
	});


	// FORMULARIOS - Convertir a minúsculas
	$('input[name*=EMAIL],input[name=RESPBOSSEMAIL],.lowercase').on('input',function(e) {
		$(this).val($(this).val().toLowerCase());
	});


	// FORMULARIOS - Convertir a letras capitales
	$('input[name*=FNAME],input[name*=LNAME],.capitalize').on('input',function (e) {
		$(this).capitalize();
	});
	

	// FORMULARIOS - Ir hacia el primer error
	$(document).on('click','.wpcf7-response-output',function(e) {
		$('html, body').animate({
			scrollTop: $('.wpcf7-not-valid:first').offset().top-150}, 500, function(){
				$('.wpcf7-not-valid:first').focus();
			}
		);
	});


	// FORMULARIOS - Ir al :input al clickear en aviso de error
	$(document).on('click','label.error',function(e) {
		$(this).parent().find(':input').focus();
	});


	// FORMULARIOS - Limpiar espacios al salir del campo
	$(document).on('blur','.wpcf7 input[type=text]',function(){
		$('.wpcf7 input[type=text]').each(function(){
			this.value = $(this).val().trim();
		});
	});


	// FORMULARIOS - Limpiar validación al escribir al completar
	$(document).on('blur','.wpcf7-not-valid',function(){
		if ( $(this).val().length > 0 ) {
			$(this).removeClass('wpcf7-not-valid');
			$(this).siblings('.wpcf7-not-valid-tip').hide();
		}
		else {
			$(this).addClass('wpcf7-not-valid');
			$(this).siblings('.wpcf7-not-valid-tip').show();
		}
	});


	// FORMULARIOS - Ir a página en cambio de select para .nav-posts
	$('.nav-posts select').val(window.location.href);
	$(document).on('change','.nav-posts select', function() {
			var url = $(this).val();
		if (url) {
			window.location = url;
		}
		return false;
	});


	// FORMULARIOS - Deshabilitar autocompletado
	$('.autocompleteoff').attr('autocomplete','off');


	// FORMULARIOS - Deshabilitar scroll wheel
	$('form').on('focus','input[type=number]',function(e) {
		$(this).on('wheel.disableScroll',function(e) {
			e.preventDefault();
		});
	});
	$('form').on('blur','input[type=number]',function(e) {
		$(this).off('wheel.disableScroll');
	});
	  

	// FORMULARIOS - Si existe un checkbox para información adicional
	if ( $('.check_add').length ) {
		$('.check_add input[type=checkbox]').change(function() {
			var checkbox_name = $(this).attr('name');
			var inputtext_name = $(this).closest('.columns').find('input[type=text]').attr('name');
			var init_inputtext_name = inputtext_name.substr(0,5);
			if ( this.checked ) {
				if ( checkbox_name == 'NOW[]' ) {
					$('input[name='+inputtext_name+']').val('Inmediata');
				}
				else if ( checkbox_name.indexOf('NOT') > -1 ) {
					$('input[name^='+inputtext_name+']+.wpcf7-not-valid-tip').hide();
					$('input[name^='+inputtext_name+']').val('—').attr('disabled',true);
				}
				else {
					var checkbox_checked = $(this).siblings('.wpcf7-list-item-label').text();
					$(this).val('*'+checkbox_checked);
				}
			}
			else {
				$('input[name^='+inputtext_name+']').val('').removeAttr('disabled');
			}
		});	
	}

		
	// FORMULARIOS - Si existe un select
	if ( $('.wpcf7-select').length ) {
		var id_form = $('.wpcf7:first').attr('id');
		id_form = parseInt(id_form.substring(id_form.indexOf('wpcf7-f')+7,id_form.indexOf('-p')));
		$('.wpcf7-select option').each(function(i) {
			// General - Marcar como deshabilitado si tiene — delante (<optgroup> no disponible en CF7)
			if ( $(this).text().indexOf('—') > -1 && $(this).text() != '—') {
				$(this).attr('disabled','disabled');
			}
			// Casos de referencia - Si es formulario para enviar nuevo caso
			if ( id_form == 29440 ) {
				// Si hay un ; -> Asignar ID
				var text_opc = $(this).text();
				if ( text_opc.indexOf(';') > -1 ) {
					var id_opc = text_opc.substring(text_opc.indexOf(';')+1,text_opc.length);
					text_opc = text_opc.substring(0,text_opc.indexOf(';'));
					$(this).text(text_opc).attr({
						'data-cat-id':id_opc,
						'value':id_opc});
				}
			}
		});
		$(document).on('change','.wpcf7-select',function() {
			var input_name = $(this).attr('name');
			// Si es un select multiple
			if ( input_name.indexOf('[]') > -1 ) {
				var selMulti = jQuery.map($('option:selected',this), function(el,i) {
					return $(el).text();
				});
				var val_comma = selMulti.join('; ');
				input_name= input_name.substring(0,input_name.length-2);
				// Copiar valores en su hidden TXT
				if ( $('input[name='+input_name+'TXT]').length ) {
					$('input[name='+input_name+'TXT]').val(val_comma);
				}
			}
			else {
				// Copiar valores en su hidden TXT
				var val_single = $('option:selected',this).text();
				if ( $('input[name='+input_name+'TXT]').length ) {
					if ( input_name == 'CC_UNIT') {
						val_single = val_single.substring(0,val_single.indexOf('(')-1);
					}
					$('input[name='+input_name+'TXT]').val(val_single);
				}
			}
		});
	}


	// FORMULARIOS - Comportamiento según se agreguen/quiten grupos
	$('.wpcf7 .control_group').click(function(e){
		var what_todo = $(this).attr('id');
		var counter = parseInt($('#num_groups').val());
		if ( what_todo == 'add' ) {
			var num_groups_limit = parseInt($('#num_groups_limit').text());
			if ( (counter >= 1) && (counter <= num_groups_limit) ) {
				counter++;
				$('.control_group').removeClass('disabled');
				$('#num_groups').val(counter);
			}
			if ( counter == num_groups_limit ) {
				$('#add').addClass('disabled');
			}
		}
		else if ( what_todo == 'remove' ) {
			var num_groups_limit = parseInt($('#num_groups_limit').text());
			if ( counter > 1 ) {
				counter--;
				$('.control_group').removeClass('disabled');
				$('#num_groups').val(counter);
			}
			if ( counter == 1 ) {
				$('#remove').addClass('disabled');
			}
		}
	});
	$('#num_groups').bind('keyup change click', function (e) {
		var counter = parseInt($('#num_groups').val());
		var num_groups_limit = parseInt($('#num_groups_limit').text());
		if ( counter > 1 ) {
			$('.control_group').removeClass('disabled');
		}
		if ( counter == 1 ) {
			$('#remove').addClass('disabled');
		}
		if ( counter == num_groups_limit ) {
			$('#add').addClass('disabled');
		}
	});


	// FORMULARIOS [Merchandising] - Cambiar opción por ítem con costo según cantidad
	if ( $('.MERCH1').length ) {
		var obj_scosto = 0;
		$('.MERCH1 option').each(function(i) {
			if ( $(this).val() != '—Con costo') {
				obj_scosto++;
			}
			else {
				obj_scosto = obj_scosto-1;
				return false;
			}
		});
		var limit_obj_scosto = obj_scosto*2+1;
		$('input[name^=CANT]').keyup(function(e) {
			var inp_index = $(this).attr('name');
			inp_index = inp_index.substring(inp_index.indexOf('CANT')+4,inp_index.length);
			if ( $('.MERCH'+inp_index+' select').prop('selectedIndex') != 0 && $('.MERCH'+inp_index+' .wpcf7-response-info').length == 0 ) {
				var opt_index = $('.MERCH'+inp_index+' select').prop('selectedIndex');
				// Si la cantidad es mayor a 10, se convierte con costo
				if ( $(this).val() > 10 && opt_index <= obj_scosto ) {
					opt_index = opt_index+obj_scosto;
					$('.MERCH'+inp_index+' select').prop('selectedIndex',opt_index)
				}
				// Si la cantidad es menor o igual a 10 y es un objeto elegido que no tiene costo, se convierte sin costo
				else if ( $(this).val() <= 10 && (opt_index > obj_scosto && opt_index < limit_obj_scosto) ) {
					opt_index = opt_index-obj_scosto;
					$('.MERCH'+inp_index+' select').prop('selectedIndex',opt_index)	
				}
			}
		});
		$('select[name^=MERCH]').change(function(e) {
			var inp_index = $(this).attr('name');
			inp_index = inp_index.substring(inp_index.indexOf('MERCH')+5,inp_index.length);
			var opt_index = $('.MERCH'+inp_index+' select').prop('selectedIndex');
			if ( $('.CANT'+inp_index+' input').val() > 10 ) {
				if ( opt_index <= obj_scosto ) {
					$('.CANT'+inp_index+' input').val(10);
				}
			}
		});
	}


	// FORMULARIOS - Reemplazar nombres de usuarios con espacio
	if ( $('input[name=USRURL]').length ) {
		var usrurl = $('input[name=USRURL]').val().replace(' ','-');
		$('input[name=USRURL]').val(usrurl);
	}
	

	// PREGUNTAS FRECUENTES - Desplegables abiertos
	$('body.postid-49885 #content .toggle-box').show();
	$('body.postid-49885 #content .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');


	// Desplegables
	$('#custom_html-11 .toggle-box').show();
	$('#custom_html-11 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	$('#custom_html-24 .toggle-box').show();
	$('#custom_html-24 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	$('#custom_html-28 .toggle-box').show();
	$('#custom_html-28 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	$('#custom_html-29 .toggle-box').show();
	$('#custom_html-29 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	$(document).on('click','.toggle',function(e) {
		$(this).next('.toggle-box').slideToggle();
		if ( $(this).find('i').hasClass('fa-plus-square') ) {
			$(this).find('i').removeClass('fa-plus-square').addClass('fa-minus-square');
		}
		else if ( $(this).find('i').hasClass('fa-minus-square') ) {
			$(this).find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
		}
		e.preventDefault();
	});

	/*
	// LATERAL - Expandir widget
	$('.widget .widgettitle').append('<a class="topopup" href="#topopup"><i class="far fa-expand-arrows"></i></a>');
	$(document).on('click','.widget .widgettitle .topopup',function(e) {
		e.preventDefault();
		var get_widget = $(this).parent().parent().attr('id');
		var cloned_widget = $('#'+get_widget).clone();
		jQuery.magnificPopup.open({
			items: {
				src: cloned_widget,
			},
			type: 'inline'
		});
	});

	// LATERAL - Convertir a galería las referencias
	$('.widget_ref').magnificPopup({
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
	*/

	// EVENTOS - Agregar referencias para calendario de eventos y capacitaciones
	$('#sidebar-left .eo-widget-cal-wrap').after('<div class="widget_ref"><a class="propios" href="/eventos/categoria/propios/">Propios</a><a class="patrocinamos" href="/eventos/categoria/patrocinamos/">Patrocinamos</a><a class="asistimos" href="/eventos/categoria/asistimos/">Asistimos</a><a class="otros" href="/eventos/categoria/otros/">Otro</a></div>');


	// EVENTOS - Agregar enlace a eventos del mes en menú y calendario
	var yy = new Date().getFullYear();
	var mm = ('0'+(new Date().getMonth()+1)).slice(-2);
	$('.eo_widget_calendar .widget_ref').attr({
		'data-ny': yy,
		'data-nm': mm
	});
	$('#menu-item-18425>a').attr('href','/eventos/fecha/'+yy+'/'+mm+'/');
	$('.eo_widget_calendar .widget_ref').after('<a href="/eventos/fecha/'+yy+'/'+mm+'/" class="sc-button blue small">Ver eventos del mes</a>');


	// EVENTOS - Convertir textos en descripción con "http" en link:
	if ( $('article.event').length ) {
		!function(t){"use strict";var n=/\b(?:\b[a-z\d.-]+:\/\/[^<>\s]+|\b(?:(?:(?:[^\s!@#$%^&*()_=+[\]{}\|;:'",.<>\/?]+)\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]))(?:[;\/][^#?<>\s]*)?(?:\?[^#<>\s]*)?(?:#[^<>\s]*)?(?!\w))/gi;t.fn.urlToLink=function(e){return e=t.extend({},t.fn.urlToLink.defaults,e),this.each(function(){t(this).html(t(this).html().replace(n,function(t){var n=t,s="",a="",m=0;if(e.removeHttp&&(n=n.replace("http://","").replace("https://","")),s=n,e.compressTo&&n.length>e.compressTo&&(m=(e.compressTo-e.compressWith.length)/2,s=n.substring(0,m)+e.compressWith+n.slice(-m)),e.domainOnly){var i=-1;if(s.indexOf("http")>-1){var r=s.indexOf("/"),l=r+2+s.substring(r+2).indexOf("/");l>r+2&&(i=l)}else i=s.indexOf("/");i>3&&(s=s.substring(0,i))}return e.nofollow&&(a="nofollow"),' <a href="'+t+'" title="'+t+'" target="'+e.target+'" rel="'+a+'">'+s+"</a>"}))})},t.fn.urlToLink.defaults={domainOnly:!0,nofollow:!0,target:"_self",compressWith:"&hellip;"}}(jQuery);
		$('.entry-content p').urlToLink();
	}


	// EVENTOS - Quitar link de venue
	if ( $('body').hasClass('archive') ) {
		$('.eo-event-meta li:first-child strong+a:not([rel=tag])').contents().unwrap();
	}


	// EVENTOS - Sumar/Restar año y mes al clickear en links de cambio de mes
	$(document).on('click','#wp-calendar tfoot a',function(e) {
		var this_href = $(this).attr('href');
		var yy = this_href.substring(this_href.indexOf('=')+1,this_href.indexOf('-'));
		var mm = this_href.substr(this_href.indexOf('-')+1,2);
		$('#eo_calendar_widget-7 .widget_ref+a').attr('href','/eventos/fecha/'+yy+'/'+mm+'/');
	});


	// VIDEOS - Cambiar texto "load more"
	$('.yotu-pagination-more').text('Ver más');


	// BÚSQUEDAS LABORALES - Agregar título, UN y botón CTA
	if ( $('article').hasClass('category-busquedas-laborales') ) {
		var post_title = $('.page-title').text();
		var mails_rrhh = $('#post-content table tr:last td:last').text();
		var arr_mails_rrhh = mails_rrhh.split(';');
		$('#post-content table tr:last td:last').empty();
		jQuery.each(arr_mails_rrhh, function(i) {
			var mail_rrhh = arr_mails_rrhh[i];
				$('#post-content table tr:last td:last').append('<a class="lider_rrhh" href="mailto:'+mail_rrhh+'" target="_blank">'+mails_rrhh+'</a>');
		});
		if ( $('article').hasClass('category-busquedas-laborales-activas') ) {
			$('<div class="buttons"><div class="info"><em>Podés postularte directamente enviándonos tu CV o referir a un amigo/a.<br />En caso de que el perfil aplique para la búsqueda, nos pondremos en contacto.</em></div><a href="mailto:'+mails_rrhh+'?subject='+post_title+'" target="_blank" class="sc-button">Enviar CV</a><br /><a href="/categoria/busquedas-laborales-activas/">Ver otras búsquedas activas</a></div>').insertAfter('#post-content table');
		}
		else {
			$('<div class="buttons"><a href="/categoria/busquedas-laborales-activas/" class="sc-button">Ver búsquedas activas</a></div>').insertAfter('#post-content table');
		}
	}

	
});