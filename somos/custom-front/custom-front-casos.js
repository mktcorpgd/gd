// Convertir texto para formato URL
function convertToSlug(Text) {
	return Text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
}


// Copiar contenido para entrada
function copyPostContent() {
	jQuery('.wpcf7 input[name=TITCASO]').val(jQuery('.wpcf7 h2').text());
	jQuery('.wpcf7 input[name=SLUGCASO]').val(convertToSlug(jQuery('.wpcf7 input[name=TITCASO]').val()));
	var cats_uns = '';
	jQuery('.wpcf7-select[name*=UN] option:selected').each(function() {
		if ( jQuery(this).attr('data-cat-id') !== undefined ) {
			cats_uns += jQuery(this).attr('data-cat-id')+',';
		}
	});
	cats_uns = cats_uns.substring(0,cats_uns.length-1);
	var cats_uacs = '';
	jQuery('.wpcf7-select[name*=UAC] option:selected').each(function() {
		if ( jQuery(this).attr('data-cat-id') !== undefined ) {
			cats_uacs += jQuery(this).attr('data-cat-id')+',';
		}
	});
	cats_uacs = cats_uacs.substring(0,cats_uacs.length-1);
	jQuery('.wpcf7 input[name=CATSCASO]').val('2370,'+cats_uns+','+cats_uacs);
	jQuery('.wpcf7 input[name=CONTCASO]').val(jQuery('.wpcf7 .wpcf7-CONTCASO').html());
}


jQuery(document).ready(function() {


	// Agregar clase para simular formato de caso en tabla
	jQuery('#content .padder').addClass('category-casos-de-referencia');


	// Al escribir o seleccionar reemplazar valores en la celda correspondiente de la tabla
	jQuery('.preview').hide();
	jQuery(document).on('input','.wpcf7-text,.wpcf7-number,.wpcf7-textarea,.wpcf7-date',function() {
		var input_name = jQuery(this).attr('name');
		var input_value = jQuery(this).val();
		if ( input_name == 'NOMCASO' ) {
			if ( input_value.length > 0 ) {
				jQuery('.preview').show();
			}
			else {
				jQuery('.preview').hide();
			}
		}
		jQuery('.wpcf7-'+input_name).text(input_value);
		copyPostContent();
	});
	jQuery(document).on('change','.wpcf7-select',function() {
		var input_name = jQuery(this).attr('name').replace(/[[]]/g,'');
		if ( jQuery('input[name='+input_name+'TXT]').length ) {
			input_name = input_name+'TXT';
		}
		input_value = jQuery('input[name='+input_name+']').val();
		jQuery('.wpcf7-'+input_name).text(input_value);
		copyPostContent();
	});

	
});