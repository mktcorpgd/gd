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
				var address = this.getPlace().formatted_address;
				var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=600x150&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address+'&zoom=14&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
				var html_map = '<a href="https://www.google.com/maps/search/'+address+'" target="_blank"><img src="'+img_src+'" /></a>';
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


	// Asignar responsable según oficina
	var gdOFFICE_mc = $('input[name=gdOFFICE_mc]').val();
	gdOFFICE_mc = gdOFFICE_mc.substring(0,2);
	function assignResp() {
		if ( gdOFFICE_mc == 'AR' ) {
			$('input[name=RESP]').val($('input[name=RESPAR]').val());
			$('input[name=MSGADD]').val($('input[name=MSGADDAR]').val());
		}
		else if ( gdOFFICE_mc == 'CL' ) {
			$('input[name=RESP]').val($('input[name=RESPCL]').val());
			$('input[name=MSGADD]').val($('input[name=MSGADDCL]').val());
		}
		else {
			$('input[name=RESP]').val($('input[name=RESPAR]').val());
			$('input[name=MSGADD]').val($('input[name=MSGADDAR]').val());
		}	
	}
	assignResp();
	$('select[name=RESPBOSS]').change(function() {
		assignResp();
	});


	// Confirmación de envío según día y horario
	if ( gdOFFICE_mc == 'AR' ) {
		const feriados = ["01-01","12-02","13-02","24-03","29-03","31-03","01-05","25-05","17-06","20-06","09-07","08-12","25-12"];
		const ahora = new Date();
		const diaSemana = ahora.getDay();
		const hora = ahora.getHours();
		const minutos = ahora.getMinutes();
		const mes = String(ahora.getMonth() + 1).padStart(2, '0');
		const dia = String(ahora.getDate()).padStart(2, '0');
		const fechaActual = `${mes}-${dia}`;
		const esFeriado = feriados.includes(fechaActual);
		function estaEnRangoHorario(hora, minutos) {
			if (hora >= 18 || hora <= 9 ) {
				return true;
			}
			return false;
		}
		const enRangoHorario = estaEnRangoHorario(hora, minutos);
		const esFinDeSemana = (diaSemana === 0 || diaSemana === 6);
		/*console.log(diaSemana);
		console.log(hora);
		console.log(minutos);
		console.log(mes);
		console.log(dia);
		console.log(fechaActual);
		console.log(esFeriado);
		console.log(esFinDeSemana || esFeriado || (diaSemana >= 1 && diaSemana <= 5 && enRangoHorario));*/
		if ( esFinDeSemana || esFeriado || (diaSemana >= 1 && diaSemana <= 5 && enRangoHorario) ) {
			$('.wpcf7-response-msg.important').show();
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
			$('.wpcf7-response-msg.outofoffice').hide();
		}
	}

});