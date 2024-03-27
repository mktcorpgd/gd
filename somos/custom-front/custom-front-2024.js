jQuery(document).ready(function() {

	// GENERAL - Si hay cumpleaños:
	if ( jQuery('.bdays_today').length ) {
		jQuery('.bdays_today img').attr('src','/wp-content/uploads/gd2024-birth.jpg');
	}

	// Desplegables
	jQuery('#custom_html-11 .toggle-box').show();
	jQuery('#custom_html-11 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	jQuery('#custom_html-24 .toggle-box').show();
	jQuery('#custom_html-24 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');
	jQuery('#custom_html-28 .toggle-box').show();
	jQuery('#custom_html-28 .toggle .fa-plus-square').removeClass('fa-plus-square').addClass('fa-minus-square');

});