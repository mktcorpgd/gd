jQuery(document).ready(function($) {
 
	// Funciones para mostrar/ocultar campos
	function toggleAddressOrOffice() {
		let selectedOption = $('input[name="billing_envio_retiro"]:checked').val();
		if (selectedOption === 'Envío') {
			$('#billing_oficina_field,#billing_fecha_retiro_field,#billing_hora_retiro_field').slideUp(300).addClass('hidden');
			$('#billing_address_1_field,#billing_city_field,#billing_state_field,#billing_postcode_field,#billing_asistente_field').slideDown(300).removeClass('hidden');
		}
		else if (selectedOption === 'Retiro') {
			$('#billing_address_1_field,#billing_city_field,#billing_state_field,#billing_postcode_field,#billing_asistente_field').slideUp(300).addClass('hidden');
			$('#billing_oficina_field,#billing_fecha_retiro_field,#billing_hora_retiro_field').slideDown(300).removeClass('hidden');
		}
	}
	function toggleEventReason() {
		if ($('#billing_motivo').val() === 'Evento') {
			$('#billing_evento_salesforce_field').slideDown();
		} else {
			$('#billing_evento_salesforce_field').slideUp();
		}
	}
	function toggleOtherReason() {
		if ($('#billing_motivo').val() === 'Otro') {
			$('#billing_motivo_otro_field').slideDown();
		} else {
			$('#billing_motivo_otro_field').slideUp();
		}
	}
	function toggleMeetReason() {
		if ($('#billing_motivo').val() === 'Reunión' && ($('#billing_centro_costo').val().indexOf('UAC') > -1 || $('#billing_centro_costo').val().indexOf('UN') > -1) ) {
			$('#billing_cuenta_salesforce_field').slideDown();
		} else {
			$('#billing_cuenta_salesforce_field').slideUp();
		}
	}
	function toggleAssist() {
		if ( $('#billing_centro_costo').val().indexOf('UAC') > -1 || $('#billing_centro_costo').val().indexOf('UN') > -1 ) {
			$('#billing_asistente_field').slideDown();
		} else {
			$('#billing_asistente_field').slideUp();
		}
	}

	// Eventos de cambio
	$(document).on('change', 'input[name="billing_envio_retiro"]', toggleAddressOrOffice);
	$(document).on('change', '#billing_motivo', toggleOtherReason);
	$(document).on('change', '#billing_motivo', toggleEventReason);
	$(document).on('change', '#billing_motivo,#billing_centro_costo', toggleMeetReason);
	$(document).on('change', '#billing_centro_costo', toggleAssist);

	// Detectar cuando se actualiza el checkout
	$(document.body).on('updated_checkout', function() {
		setTimeout(function() {
			toggleAddressOrOffice();
			toggleOtherReason();
			toggleEventReason();
			toggleMeetReason();
		}, 300);
	});

	// Ejecutar en la carga inicial
	setTimeout(function() {
		toggleAddressOrOffice();
		toggleOtherReason();
		toggleEventReason();
		toggleMeetReason();
	}, 300);

	// Admin URL
	var adminUrl = "<?php echo esc_url(admin_url('admin-ajax.php')); ?>";

	// Autocompletado de cuentas de Salesforce
	// Ocultar contactos si no hay cuenta
	function ocultarCampoContactos() {
		$('#billing_contacto_salesforce_field').fadeOut();
		$('#billing_contacto_salesforce').html('').prop('disabled', true);
	}
	// Si el usuario borra la cuenta, ocultar contactos
	$(document).on('input', '#billing_cuenta_salesforce', function() {
		if (!$(this).val().trim()) {
			ocultarCampoContactos();
		}
	});
	$('#billing_cuenta_salesforce').autocomplete({
		source: function (request, response) {
			var inputField = $('#billing_cuenta_salesforce_field');
			inputField.addClass('loading');

			if (typeof adminUrl === 'undefined') {
				console.error('Error: adminUrl no está definido');
				return;
			}

			$.get(adminUrl, { action: 'buscar_cuentas_salesforce', term: request.term })
				.done(function (data) {
					response(data);
				})
				.fail(function () {
					console.error('Error al obtener cuentas de Salesforce');
				})
				.always(function () {
					inputField.removeClass('loading');
				});
		},
		minLength: 3,
		appendTo: '#billing_cuenta_salesforce_field',
		select: function (event, ui) {
			var inputField = $('#billing_cuenta_salesforce');
			if (ui.item.id) {
				inputField.val(ui.item.label).attr('data-id', ui.item.id);
				$('#billing_cuenta_salesforce_id').val(ui.item.id); // Guarda el ID en el campo oculto
				$('#billing_cuenta_salesforce').attr('data-cuenta-id', ui.item.id); // Opción alternativa
				cargarContactos(ui.item.id);
			}
			else {
				ocultarCampoContactos();
				inputField.removeAttr('data-id');
				$('#billing_cuenta_salesforce_id').val('');
			}
		}
	});
	$('#billing_cuenta_salesforce').trigger('input');

	// Carga de contactos de la cuenta en Salesforce
	function cargarContactos(accountId) {
		var select = $('#billing_contacto_salesforce');
		select.prop('disabled', true);
		select.html('<option value=""><?php _e("Cargando contactos...", "woocommerce"); ?></option>');
		$('#billing_contacto_salesforce_field').fadeIn();
		$.ajax({
			url: adminUrl,
			type: 'POST',
			data: { action: 'obtener_contactos_ajax', account_id: accountId },
			success: function(response) {
				var contactos = JSON.parse(response);
				select.empty();
				if ($.isEmptyObject(contactos)) {
					select.append('<option value=""><?php _e("No hay contactos disponibles", "woocommerce"); ?></option>');
				} else {
					select.append('<option value=""><?php _e("Selecciona un contacto de la cuenta", "woocommerce"); ?></option>');
					$.each(contactos, function(index, value) {
						select.append('<option value="' + value + '" data-id="' + index + '">' + value + '</option>');
					});
				}
				select.prop('disabled', false);
			},
			error: function() {
				select.html('<option value=""><?php _e("Error al cargar contactos", "woocommerce"); ?></option>');
				select.prop('disabled', false);
			}
		});
	}
	$(document).on('change', '#billing_contacto_salesforce', function() {
		let selectedOption = $(this).find('option:selected');
		let contactoId = selectedOption.data('id');
		$('#billing_contacto_salesforce_id').val(contactoId);
	});

	// Validar la fecha
	const feriados = [
		'2025-01-01', // Año Nuevo
		'2025-05-01', // Día del Trabajador
		'2025-07-09', // Día de la Independencia
		'2025-12-25'  // Navidad
	];
	$('#billing_fecha_retiro').on('change', function() {
		let fechaSeleccionada = new Date($(this).val());
		let hoy = new Date();
		hoy.setHours(0, 0, 0, 0); // Eliminar la hora para comparar solo fechas
		let diaSemana = fechaSeleccionada.getDay();
		let fechaFormato = fechaSeleccionada.toISOString().split('T')[0]; // Formato YYYY-MM-DD
		if (fechaSeleccionada <= hoy) {
			alert('No puedes seleccionar una fecha pasada.');
			$(this).val('');
			return;
		}
		if (diaSemana === 0 || diaSemana === 6 || feriados.includes(fechaFormato)) {
			alert('Debes elegir un día hábil (de lunes a viernes y que no sea feriado).');
			$(this).val('');
		}
	});

	// Crear un MutationObserver para monitorear cambios en las clases de .woocommerce-checkout
	const observer = new MutationObserver(function(mutationsList, observer) {
		mutationsList.forEach(function(mutation) {
			if (mutation.type === 'attributes' && mutation.target.classList) {
				if ($('.woocommerce-checkout').hasClass('processing')) {
					$('body').addClass('woocommerce-processing');
				} else {
					$('body').removeClass('woocommerce-processing');
				}
			}
		});
	});

	// Configurar el observador para monitorear cambios en las clases de .woocommerce-checkout
	observer.observe(document.querySelector('.woocommerce-checkout'), {
		attributes: true, // Monitorear cambios en los atributos (como clases)
		attributeFilter: ['class'] // Solo monitorear la clase
	});

	// Eliminar la validación del campo billing_country
	$('form.checkout').find('#billing_country').removeClass('validate-required');
	$('form.checkout').find('#billing_address_2').removeClass('validate-required');

});