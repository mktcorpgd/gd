jQuery(document).ready(function() {


	// Cambiar tarjetas según empresa elegida
	jQuery('select[name=MODCONT]').change(function() {
		var modcont = jQuery(this,'option:selected').val();
		if ( modcont == 'Freelance' || modcont == 'Consultor externo' ) {
			jQuery('select[name^=ACCESS] option[value="Red"],select[name^=ACCESS] option[value="Email"],select[name^=ACCESS] option[value="Screentime"]').prop('selected',true)
		}
		else {
			jQuery('select[name^=ACCESS] option[value="Red"],select[name^=ACCESS] option[value="Email"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Screentime"]').prop('selected',false);
		}
	});


	// Checkbox - Bajas: Adicionales
	jQuery('.check_add input[type=checkbox]').change(function() {
		if ( this.checked ) {
			var checkbox_checked = jQuery(this).siblings('.wpcf7-list-item-label').text();
			jQuery(this).val('*'+checkbox_checked);
		}
		else {
			jQuery(this).val('');
		}
	});
	

	// Checkbox: deshabilitar si no tiene LinkedIn
	jQuery('.LKDNOT input').change(function() {
		if ( this.checked ) {
			jQuery('.LKDURL input').val('No tiene').attr('disabled','disabled');
		}
		else {
			jQuery('.LKDURL input').val('').removeAttr('disabled');
		}
	});


	// Cambiar automáticamente por comas
	jQuery(document).on('keyup','input[name=RESPBOSS]',function() {
		jQuery(this).val(jQuery(this).val().replace(/;/g,','));
		jQuery(this).val(jQuery(this).val().replace(/ /g,','));
	});

	
});