jQuery(document).ready(function($) {

	// Copiar datos del solicitante
	$('select[name=ORG] option[value="Datco Soluciones"],select[name=ORG] option[value="IT4W"]').hide();
	$('input[name=PHONE]').val($('input[name=gdPHONE_mc]').val());
	function samedataPaxChecked() {
		$('input[name="SAMEDATAPAX[]"]').trigger('click');
		$('select[name=ORG] option:contains('+$('input[name=gdORG_mc]').val()+')').prop('selected','selected');
		$('select[name=CC_UNIT] option:contains('+$('input[name=gdUNIT_mc]').val()+')').prop('selected','selected');
		$('input[name=FNAMEPAXA]').val($('input[name=FNAME]').val());
		$('input[name=LNAMEPAXA]').val($('input[name=LNAME]').val());
		$('input[name=EMAILPAXA]').val($('input[name=EMAIL]').val());
		$('input[name=PHONEPAXA]').val($('input[name=gdPHONE_mc]').val());
		$('input[name=DNIPAX]').val($('input[name=gdDNI_mc]').val());
		$('input[name=NACPAX]').val($('input[name=gdBIRTH_mc]').val());
	}
	samedataPaxChecked();
	$('input[name="SAMEDATAPAX[]"]').change(function() {
		if ( this.checked ) {
			samedataPaxChecked();
		}
		else {
			$('input[name$=PAXA]').val('');
			$('select[name=ORG],select[name=CC_UNIT]').prop('selectedIndex',0);
		}
	});
	var samedata_is_checked = $('input[name="SAMEDATAPAX[]"]').is(':checked');
	$('input[name="PAXWHAT"]').change(function() {
		$('.wpcf7-submit').removeClass('disabled');
		if ( this.value == 'Envío' ) {
			$('input[name=FNAMEPAXA]').val('');
			$('input[name=LNAMEPAXA]').val('');
		}
		else {
			if ( samedata_is_checked == true ) {
				$('input[name=FNAMEPAXA]').val($('input[name=FNAME]').val());
				$('input[name=LNAMEPAXA]').val($('input[name=LNAME]').val());	
			}
		}
	});

	// Autocompletado por Google Maps API
	ApplyAutoComplete($('.address_maps'));
	var selected = false;
	function ApplyAutoComplete(input) {
		var places = [];
		var place;
		var options_world = {};
		var options_cities = {
			types: ['(cities)'],
		};
		var options_arg = {
			componentRestrictions:{country:['ar']}
		};
		for (var i = 0; i<input.length; i++) {
			if ( input[i].className.indexOf('cities') > -1 ) {
				place = new google.maps.places.Autocomplete(input[i],options_cities);
			}
			else if ( input[i].className.indexOf('arg') > -1 ) {
				place = new google.maps.places.Autocomplete(input[i],options_arg);
			}
			else {
				place = new google.maps.places.Autocomplete(input[i],options_world);
			}
			place.attrName = input[i].name;
			place.addListener('place_changed',fillInStaticGMap);
			places.push(place);
		}
		function fillInStaticGMap() {
			var input_name = this.attrName;
			selected = true;
			if ( $('input[name='+input_name+'].static_gmap').length ) {
				var address_text =  $('input[name='+input_name+'].static_gmap').val();
				var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=600x150&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address_text+'&zoom=14&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
				var html_map = '<a href="https://www.google.com/maps/search/'+address_text+'" target="_blank"><img src="'+img_src+'" /></a>';
				$('input[name='+input_name+'].static_gmap').addClass('filled');
				if ( $('input[name='+input_name+'].static_gmap+a').length ) {
					$('input[name='+input_name+'].static_gmap+a').replaceWith(html_map);	
				}
				else { 
					$('input[name='+input_name+'].static_gmap').after(html_map);	
				}
			}
		}
	};
	$('.address_maps').on('focus',function() {
		selected = false;
		var cur_value = $(this).val();
		$(this).data('cur_value',cur_value);
	}).on('blur', function() {
		if ( !selected && $(this).data('cur_value') != $(this).val() ) {
			$(this).val('').removeClass('filled').siblings('a').remove();
		}
	});

	// Asignar responsable de cotización de viaje
	var gdOFFICE_mc = $('input[name=gdOFFICE_mc]').val();
	gdOFFICE_mc = gdOFFICE_mc.substring(0,2);
	function assignResp() {
		if (gdOFFICE_mc == 'AR') {
			$('select[name=RESP]').val('Argentina');
			$('input[name=MSGADD]').val($('input[name=MSGADDAR]').val());
		}
		else if (gdOFFICE_mc == 'CL') {
			$('select[name=RESP]').val('Chile');
			$('input[name=MSGADD]').val($('input[name=MSGADDCL]').val());
		}
		else {
			$('select[name=RESP]').val('Argentina');
			$('input[name=MSGADD]').val($('input[name=MSGADDAR]').val());
		}
	}
	assignResp();

	// Asignar asistente si es UAC
	var gdUNIT_mc = $('input[name=gdUNIT_mc]').val();
	var usremail = $('input[name=usremail]').val();
	if ( gdUNIT_mc.indexOf('UAC') > -1 || usremail == 'pablo.perez@datco.net' || usremail == 'veronica.martinez@datco.net' ) {
		$('input[name=CCASIST]').val('mariel.loreto@datco.net');
	}

	// Completar Subcentro como 096 si es un Evento
	jQuery('select[name="OBJ"]').change(function() {
		if (this.value === 'Evento') {
			jQuery('input[name="SUBCTA"]').val('96');
		} else {
			jQuery('input[name="SUBCTA"]').val('');
		}
	});

	// Confirmación de envío según día y horario
	if ( gdOFFICE_mc == 'AR' ) {
		const feriados = ["01-01","03-03","03-04","03-24","04-02","04-18","05-01","05-25","06-20","07-09","12-08","12-25"];
		const ahora = new Date();
		const diaSemana = ahora.getDay();
		const hora = ahora.getHours();
		const minutos = ahora.getMinutes();
		const mes = String(ahora.getMonth() + 1).padStart(2, '0');
		const dia = String(ahora.getDate()).padStart(2, '0');
		const fechaActual = `${mes}-${dia}`;
		const esFeriado = feriados.includes(fechaActual);
		function estaEnRangoHorario(hora, minutos) {
			if (hora >= 18 || hora < 9 ) {
				return true;
			}
			return false;
		}
		const enRangoHorario = estaEnRangoHorario(hora, minutos);
		const esFinDeSemana = (diaSemana === 0 || diaSemana === 6);
		if ( esFinDeSemana || esFeriado || (diaSemana >= 1 && diaSemana <= 5 && enRangoHorario) ) {
			$('.wpcf7-response-msg.offhours').show();
			$('.wpcf7-submit,.wpcf7-form').addClass('confirm');
			function confirmarEnvio(event) {
				const confirmacion = confirm("[IMPORTANTE]\nEsta es una solicitud fuera de horario laboral (lunes a viernes de 18:00 a 9:00 h, sábados, domingos o feriados). Por favor, llamar al 4103-1300 int. 1148 para recibir confirmación. ¿Deseas enviar la solicitud?\n[IMPORTANTE]");
				if (!confirmacion) {
					$('.wpcf7-submit.sending').val($('.wpcf7-submit.sending').attr('name'));
					$('.sending').removeClass('sending');
					event.preventDefault();
				}
			}
			$(document).on('click','.wpcf7-submit.confirm', function(event) {
				$(this).addClass('sending');
				$(this).closest('.wpcf7-form').addClass('sending');
				$(this).attr('name',$(this).val());
				$(this).val('Enviando...');
				confirmarEnvio(event);
			});
		}
		else {
			$('.wpcf7-response-msg.offhours').hide();
		}
	}

});