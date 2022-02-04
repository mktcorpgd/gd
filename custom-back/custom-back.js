jQuery(document).ready(function(){

	// GENERAL - Cambiar idioma del botón en barra de administración
	jQuery('#wp-admin-bar-maintenance_options>a[title*=Off]').text('Mantenimiento desactivado').attr('title','Mantenimiento desactivado');
	jQuery('#wp-admin-bar-maintenance_options>a[title*=On]').text('Mantenimiento activado').attr('title','Mantenimiento activado');

	// PRIMEROS PASOS - Mostrar y ocultar preguntas frecuentes al clickear
	jQuery('.toggle-title').on('click',function(){
		jQuery(this).next().slideToggle(300).siblings('.toggle-inner').slideUp();
	});

	// USUARIOS - Mostrar aviso según tengan o no cumpleaños guardado
	if ( jQuery('#gdBIRTH_mc').val() == '1970-01-01' ) {
		var now = new Date();
		jQuery('#gdBIRTH_mc').val('');
		if ( jQuery('body').hasClass('profile-php') || jQuery('body').hasClass('user-edit-php') ) {
			jQuery('#gdBIRTH_mc').after('<p class="description"><strong>Sin fecha asignada.</strong></p>');
		}
	}
	if ( jQuery('#gdANNIV_mc').val() == '1970-01-01' ) {
		var now = new Date();
		jQuery('#gdANNIV_mc').val('');
		if ( jQuery('body').hasClass('profile-php') || jQuery('body').hasClass('user-edit-php') ) {
			jQuery('#gdANNIV_mc').after('<p class="description"><strong>Sin fecha asignada.</strong></p>');
		}
	}

	// USUARIOS - Convertir en campos obligatorios
	jQuery('#createuser .form-field.form-required+.form-field:not(.form-required),#createuser .form-field.form-required+.form-field:not(.form-required)+.form-field:not(.form-required),#createuser .user-job-title-wrap').addClass('form-required');
	
	// USUARIOS - Leyenda para contraseña
	jQuery('#password td').append('<p class="description"><strong>Esta contraseña no reemplaza la de red corporativa.</strong> <a href="https://somos.grupodatco.com/it/correo-electronico/cambiar-la-contrasena-corporativa/">Conocé cómo cambiarla</a>.</p>');

	// USUARIOS-Perfil - Deshabilitar ciertos campos y mover otros
	jQuery('body.profile-php.no-customize-support input[name=gdCUIL_mc],body.profile-php.no-customize-support input[name=gdPHONE_mc]').attr('disabled','disabled');
	jQuery('.user-job-title-wrap').insertBefore('.user-unit-wrap');
	
	// USUARIOS - Mostrar campos para organigrama si está el checkbox marcado
	jQuery('#team_member').val(this.checked);
	jQuery('#team_member').change(function() {
		if(this.checked) {
			jQuery('.user-job-url-bcard-wrap,.fh-profile-upload-options').show();
		}
		else {
			jQuery('.user-job-url-bcard-wrap,.fh-profile-upload-options').hide();
		}
		jQuery('#team_member').val(this.checked);        
	});

		/*
	// USUARIOS - Prevenir enviar formulario sin grupos seleccionados
	jQuery('#createusersub').click(function(e) {

	});
	*/
	
});