jQuery(document).ready(function() {


	// Cambiar tarjetas según empresa elegida
	jQuery('select[name=MODCONT]').change(function() {
		var modcont = jQuery(this,'option:selected').val();
		if ( modcont == 'Freelance' || modcont == 'Consultor externo' ) {
			jQuery('select[name^=ACCESS] option[value="Usuario de red"],select[name^=ACCESS] option[value="Email"],select[name^=ACCESS] option[value="Screentime"]').prop('selected', true)
		}
		else {
			jQuery('select[name^=ACCESS] option[value="Usuario de red"],select[name^=ACCESS] option[value="Email"]').prop('selected', true)
			jQuery('select[name^=ACCESSinput[name=OPC]] option[value="Screentime"]').prop('selected', false)
		}
	});


	// Si se marca checkbox: agregar valor a [OPC]
	jQuery('#check_freelance').change(function() {
		if ( this.checked ) {
			jQuery('input[name=SCRCHECK]').val(' + '+this.value);
		}
		else {
			jQuery('input[name=SCRCHECK]').empty();
		}
		console.log(jQuery('input[name=SCRCHECK]').val());
	});

	
});