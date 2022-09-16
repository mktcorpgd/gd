jQuery(document).ready(function(){


	// GENERAL - Cambiar idioma del botón en barra de administración
	jQuery('#wp-admin-bar-maintenance_options>a[title*=Off]').text('Mantenimiento desactivado').attr('title','Mantenimiento desactivado');
	jQuery('#wp-admin-bar-maintenance_options>a[title*=On]').text('Mantenimiento activado').attr('title','Mantenimiento activado');


	// PRIMEROS PASOS - Mostrar y ocultar preguntas frecuentes al clickear
	jQuery('.toggle-title').on('click',function(){
		jQuery(this).next().slideToggle(300).siblings('.toggle-inner').slideUp();
	});


	// USUARIOS - Mostrar aviso si no tienen cumpleaños/aniversario guardado
	if ( jQuery('#gdBIRTH_mc').val() == '1970-01-01' ) {
		var now = new Date();
		jQuery('#gdBIRTH_mc').val('');
		if ( jQuery('body').hasClass('profile-php') || jQuery('body').hasClass('user-edit-php') ) {
			jQuery('#gdBIRTH_mc').after('<span class="description">Sin fecha asignada.</span>');
		}
	}
	if ( jQuery('#gdANNIV_mc').val() == '1970-01-01' ) {
		var now = new Date();
		jQuery('#gdANNIV_mc').val('');
		if ( jQuery('body').hasClass('profile-php') || jQuery('body').hasClass('user-edit-php') ) {
			jQuery('#gdANNIV_mc').after('<span class="description">Sin fecha asignada.</span>');
		}
	}


	// USUARIOS - Perfil: deshabilitar ciertos campos y mover otros
	jQuery('body.profile-php.no-customize-support input[name=gdCUIL_mc],body.profile-php.no-customize-support input[name=gdPHONE_mc], body.profile-php.no-customize-support input[name=gdUNIT_mc], body.profile-php.no-customize-support input[name=gdANNIV_mc], body.profile-php.no-customize-support input[name=ocp_job_title], body.profile-php.no-customize-support select[name=gdGroupfe587259d3], body.profile-php.no-customize-support select[name=gdGroupa08454c0b0]').addClass('disabled');
	jQuery('.user-job-title-wrap').insertBefore('.user-unit-wrap');
	jQuery('#your-profile tr#password').appendTo(jQuery('#your-profile .form-table.profile-info'));
	

	// USUARIOS - Mostrar campos para organigrama si está el checkbox marcado
	jQuery('#team_member').change(function() {
		if(this.checked) {
			jQuery('.user-job-url-bcard-wrap,.fh-profile-upload-options').show();
		}
		else {
			jQuery('.user-job-url-bcard-wrap,.fh-profile-upload-options').hide();
		}
	});

	
});