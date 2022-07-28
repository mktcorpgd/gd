jQuery(document).ready(function() {


	// Cambiar tarjetas según empresa elegida
	jQuery('select[name=MODCONT]').change(function() {
		var modcont = jQuery(this,'option:selected').val();
		if ( modcont == 'Freelance' || modcont == 'Consultor externo' ) {
			jQuery('select[name^=ACCESS] option[value="Red"],select[name^=ACCESS] option[value="Email"],select[name^=ACCESS] option[value="Screentime"]').prop('selected',true)
			jQuery('select[name^=ACCESS] option[value="Office 365"]').prop('selected',false);
			jQuery('select[name^=ACCESS] option[value="Salesforce"]').prop('selected',false);
		}
		else {
			jQuery('select[name^=ACCESS] option[value="Red"],select[name^=ACCESS] option[value="Email"],select[name^=ACCESS] option[value="Salesforce"]').prop('selected',true);
			jQuery('select[name^=ACCESS] option[value="Screentime"]').prop('selected',false);
		}
	});


	// Checkbox - Bajas: Adicionales
	jQuery('.check_add input[type=checkbox]').change(function() {
		var name_checkbox = jQuery(this).attr('name');
		console.log(name_checkbox);
		if ( name_checkbox == 'LKDNOT[]' ) {
			if ( this.checked ) {
				jQuery('.LKDURL input').attr({
					'value':'No tiene',
					'disabled':true
				});
			}
			else {
				jQuery('.LKDURL input').attr('value','').removeAttr('readonly');
			}	
		}
		else if ( name_checkbox == 'NOW[]' ) {
			if ( this.checked ) {
				jQuery('.OUTDAYHR input').val('Inmediata').attr({
					'value':'Inmediata',
					'disabled':true
				});
			}
			else {
				jQuery('.OUTDAYHR input').attr('value','').removeAttr('readonly');
			}	
		}
		else {
			if ( this.checked ) {
				var checkbox_checked = jQuery(this).siblings('.wpcf7-list-item-label').text();
				jQuery(this).val('*'+checkbox_checked);
			}
			else {
				jQuery(this).val('');
			}	
		}
	});
	

	// Cambiar automáticamente por comas
	jQuery(document).on('keyup','input[name=RESPBOSS]',function() {
		jQuery(this).val(jQuery(this).val().replace(/;/g,','));
		jQuery(this).val(jQuery(this).val().replace(/ /g,','));
	});

	
});