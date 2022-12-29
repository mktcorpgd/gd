jQuery(document).ready(function() {


	// Cambiar tarjetas según empresa elegida
	jQuery('select[name=MODCONT]').change(function() {
		var modcont = jQuery(this,'option:selected').val();
		if ( modcont == 'Freelance' || modcont == 'Consultor externo' ) {
			jQuery('select[name^=ACCESS] option[value="Red"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Email @datco.net"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Salesforce"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Screentime"]').prop('selected',true);
		}
		else {
			jQuery('select[name^=ACCESS] option[value="Red"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Email @datco.net"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Salesforce"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Screentime"]').prop('selected',false);
		}
	});

	
	// Cambiar automáticamente por comas
	jQuery(document).on('keyup','input[name=RESPBOSS]',function() {
		jQuery(this).val(jQuery(this).val().replace(/;/g,','));
		jQuery(this).val(jQuery(this).val().replace(/ /g,','));
	});

	
});