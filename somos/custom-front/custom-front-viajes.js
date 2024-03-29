jQuery(document).ready(function() {

	
	// Copiar datos del solicitante
	jQuery('select[name=ORG] option[value="Datco Soluciones"],select[name=ORG] option[value="IT4W"]').hide();
	jQuery('input[name=PHONE]').val(jQuery('input[name=gdPHONE_mc]').val());
	function samedataPaxChecked() {
		jQuery('input[name="SAMEDATAPAX[]"]').trigger('click');
		jQuery('select[name=ORG] option:contains('+jQuery('input[name=gdORG_mc]').val()+')').prop('selected','selected');
		jQuery('select[name=CC_UNIT] option:contains('+jQuery('input[name=gdUNIT_mc]').val()+')').prop('selected','selected');
		jQuery('input[name=FNAMEPAXA]').val(jQuery('input[name=FNAME]').val());
		jQuery('input[name=LNAMEPAXA]').val(jQuery('input[name=LNAME]').val());
		jQuery('input[name=EMAILPAXA]').val(jQuery('input[name=EMAIL]').val());
		jQuery('input[name=PHONEPAXA]').val(jQuery('input[name=gdPHONE_mc]').val());
		jQuery('input[name=DNIPAX]').val(jQuery('input[name=gdDNI_mc]').val());
		jQuery('input[name=NACPAX]').val(jQuery('input[name=gdBIRTH_mc]').val());
	}
	samedataPaxChecked();
	jQuery('input[name="SAMEDATAPAX[]"]').change(function() {
		if ( this.checked ) {
			samedataPaxChecked();
		}
		else {
			jQuery('input[name$=PAXA]').val('');
			jQuery('select[name=ORG],select[name=CC_UNIT]').prop('selectedIndex',0);
		}
	});
	var samedata_is_checked = jQuery('input[name="SAMEDATAPAX[]"]').is(':checked');
	jQuery('input[name="PAXWHAT"]').change(function() {
		jQuery('.wpcf7-submit').removeClass('disabled');
		if ( this.value == 'Envío' ) {
			jQuery('input[name=FNAMEPAXA]').val('');
			jQuery('input[name=LNAMEPAXA]').val('');
		}
		else {
			if ( samedata_is_checked == true ) {
				jQuery('input[name=FNAMEPAXA]').val(jQuery('input[name=FNAME]').val());
				jQuery('input[name=LNAMEPAXA]').val(jQuery('input[name=LNAME]').val());	
			}
		}
	});


	// Autocompletado por Google Maps API
	ApplyAutoComplete(jQuery('.address_maps'));
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
			if ( jQuery('input[name='+input_name+'].static_gmap').length ) {
				var address = this.getPlace().formatted_address;
				var img_src = 'https://maps.googleapis.com/maps/api/staticmap?size=600x150&maptype=roadmap&markers=size:mid%7Ccolor:red%7C'+address+'&zoom=14&key=AIzaSyBgKiaX5D3Pp4Jx16S_JBH4_vUJngmX3PM';
				var html_map = '<a href="https://www.google.com/maps/search/'+address+'" target="_blank"><img src="'+img_src+'" /></a>';
				jQuery('input[name='+input_name+'].static_gmap').addClass('filled');
				if ( jQuery('input[name='+input_name+'].static_gmap+a').length ) {
					jQuery('input[name='+input_name+'].static_gmap+a').replaceWith(html_map);	
				}
				else { 
					jQuery('input[name='+input_name+'].static_gmap').after(html_map);	
				}
			}
		}
	};
	jQuery('.address_maps').on('focus',function() {
		selected = false;
		var cur_value = jQuery(this).val();
		jQuery(this).data('cur_value',cur_value);
	}).on('blur', function() {
		if ( !selected && jQuery(this).data('cur_value') != jQuery(this).val() ) {
			jQuery(this).val('').removeClass('filled').siblings('a').remove();
		}
	});


	// Asignar responsable según oficina
	var gdOFFICE_mc = jQuery('input[name=gdOFFICE_mc]').val();
	gdOFFICE_mc = gdOFFICE_mc.substring(0,2);
	function assignResp() {
		if ( gdOFFICE_mc == 'AR' ) {
			jQuery('input[name=RESP]').val(jQuery('input[name=RESPAR]').val());
			jQuery('input[name=MSGADD]').val(jQuery('input[name=MSGADDAR]').val());
		}
		else if ( gdOFFICE_mc == 'CL' ) {
			jQuery('input[name=RESP]').val(jQuery('input[name=RESPCL]').val());
			jQuery('input[name=MSGADD]').val(jQuery('input[name=MSGADDCL]').val());
		}
		else {
			jQuery('input[name=RESP]').val(jQuery('input[name=RESPAR]').val());
			jQuery('input[name=MSGADD]').val(jQuery('input[name=MSGADDAR]').val());
		}	
	}
	assignResp();
	jQuery('select[name=RESPBOSS]').change(function() {
		assignResp();
	});

});