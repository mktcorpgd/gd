jQuery(document).ready(function($){


	// GENERAL - Cambiar idioma del botón en barra de administración
	$('#wp-admin-bar-maintenance_options>a[title*=Off]').text('Mantenimiento desactivado').attr('title','Mantenimiento desactivado');
	$('#wp-admin-bar-maintenance_options>a[title*=On]').text('Mantenimiento activado').attr('title','Mantenimiento activado');


	// PRIMEROS PASOS - Mostrar y ocultar preguntas frecuentes al clickear
	$('.toggle-title').on('click',function(){
		$(this).next().slideToggle(300).siblings('.toggle-inner').slideUp();
	});


	// USUARIOS - Mostrar aviso si no tienen cumpleaños/aniversario guardado
	if ( $('#gdBIRTH_mc').val() == '1970-01-01' ) {
		var now = new Date();
		$('#gdBIRTH_mc').val('');
		if ( $('body').hasClass('profile-php') || $('body').hasClass('user-edit-php') ) {
			$('#gdBIRTH_mc').after('<span class="description">Sin fecha asignada.</span>');
		}
	}
	if ( $('#gdANNIV_mc').val() == '1970-01-01' ) {
		var now = new Date();
		$('#gdANNIV_mc').val('');
		if ( $('body').hasClass('profile-php') || $('body').hasClass('user-edit-php') ) {
			$('#gdANNIV_mc').after('<span class="description">Sin fecha asignada.</span>');
		}
	}


	// USUARIOS - Perfil: deshabilitar ciertos campos y mover otros
	$('body.profile-php.no-customize-support input[name=gdANNIV_mc],body.profile-php.no-customize-support input[name=ocp_job_title],body.profile-php.no-customize-support input[name=gdUNIT_mc]').addClass('disabled');
	$('select[name=gdORGPROF] option[value="Datxer"],select[name=gdORGPROF] option[value="Datco Soluciones"],select[name=gdORGPROF] option[value="IT4W"]').hide();


	// USUARIOS - Mostrar campos para organigrama si está el checkbox marcado
	$('#team_member').change(function() {
		if(this.checked) {
			$('.user-job-url-bcard-wrap,.fh-profile-upload-options').show();
		}
		else {
			$('.user-job-url-bcard-wrap,.fh-profile-upload-options').hide();
		}
	});

	
});