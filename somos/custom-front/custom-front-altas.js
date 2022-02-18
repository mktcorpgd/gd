jQuery(document).ready(function() {


	// Cambiar tarjetas según empresa elegida
	jQuery('select[name=MODCONT]').change(function() {
		var modcont = jQuery(this,'option:selected').val();
		if ( modcont == 'Freelance' || modcont == 'Consultor externo' ) {
			jQuery('select[name^=ACCESS] option[value="Usuario de red"],select[name^=ACCESS] option[value="Email"],select[name^=ACCESS] option[value="Screentime"]').prop('selected', true)
		}
		else {
			jQuery('select[name^=ACCESS] option[value="Usuario de red"],select[name^=ACCESS] option[value="Email"]').prop('selected', true)
			jQuery('select[name^=ACCESS] option[value="Screentime"]').prop('selected', false)
		}
	});


	// Si se marca checkbox: agregar valor a [OPC]
	jQuery('#check_freelance').change(function() {
		var opc_checked = jQuery('input[name=OPC]:checked').val();
		console.log(opc_checked);
		if ( this.checked ) {
			jQuery('input[name=OPC]').val(opc_checked+' - '+jQuery(this).val());
		}
		else {
			jQuery('input[name=OPC]').val(opc_checked);
		}
	});

	
});