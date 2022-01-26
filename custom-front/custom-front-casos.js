// Convertir texto para formato URL
function convertToSlug(Text) {
	return Text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
}

// Copiar contenido para entrada
function copyPostContent() {
	jQuery('.wpcf7 input[name=TITCASO]').val(jQuery('.wpcf7 h2').text());
	jQuery('.wpcf7 input[name=SLUGCASO]').val(convertToSlug(jQuery('.wpcf7 input[name=TITCASO]').val()));
	jQuery('.wpcf7 input[name=CATSCASO]').val('2370,'+jQuery('.wpcf7-select[name*=UN]').val()+','+jQuery('.wpcf7-select[name*=UAC]').val());
	jQuery('.wpcf7 input[name=CONTCASO]').val(jQuery('.wpcf7 .wpcf7-CONTCASO').html());
}

jQuery(document).ready(function() {

	// Agregar clase para simular formato de caso en tabla
	jQuery('#content .padder').addClass('category-casos-de-referencia');

	// Al escribir o seleccionar reemplazar valores en la celda correspondiente de la tabla
	jQuery(document).on('input','.wpcf7-text,.wpcf7-number,.wpcf7-textarea,.wpcf7-date',function() {
		var input_name = jQuery(this).attr('name').replace(/[[]]/g,'');
		var input_value = jQuery(this).val();
		if ( input_name == 'NOMCASO' ) {
			input_value = jQuery(this).val()+' - ';
		}
		jQuery('.wpcf7-'+input_name).text(input_value);
		copyPostContent();
	});
	jQuery(document).on('change','.wpcf7-select',function() {
		var input_name = jQuery(this).attr('name').replace(/[[]]/g,'');
		if ( input_name == 'UN' || input_name == 'UAC' ) {
			jQuery('#content .padder').addClass('category-casos-'+jQuery(this).val());
			var selMulti = jQuery.map(jQuery('option:selected',this), function(el,i) {
				return jQuery(el).text();
			});
			txt_comma = selMulti.join(', ');
			jQuery('.wpcf7-'+input_name).text(txt_comma);
			jQuery('input[name='+input_name+'TXT]').val(txt_comma);
		}
		else {
			jQuery('.wpcf7-'+input_name).text(jQuery('option:selected',this).text());
		}
		copyPostContent();
	});

	// Convertir a letras capitales
	jQuery('input[name*=NOMCASO]').on('input',function (e) {
		jQuery(this).capitalize();
	});

});