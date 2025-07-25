jQuery(document).ready(function() {


	// Asignación de nombre, apellido, email, usuario y QR
	var fname = jQuery('#usrfname').val();
	var lname = jQuery('#usrlname').val();
	var email = jQuery('#usremail').val();
	jQuery('span.fname').text(fname);
	jQuery('span.lname').text(lname);
	jQuery('span.email').text(email);
	var username = jQuery('#wp-admin-bar-user-info span.username').text().replace(' ','-');
	jQuery('input[name=USERNAME]').val(username);

	// Datos de tarjetas
	var tp_data = new Array();
	var tp_phone = new Array();
	var tp_address = new Array();
	var tp_web = new Array();
	jQuery('.tpdata').each(function(i) {
		var span_value = jQuery('.tpdata:eq('+i+')').text();
		var span_class = jQuery('.tpdata:eq('+i+')').attr('class');
		tp_data[span_class] = span_value;
	});
	tp_web['grupo_datco'] = 'grupodatco.com';
	tp_web['baitcon'] = 'baitcon.com';
	tp_web['datco'] = 'datco.grupodatco.com';
	tp_web['gd_xerox'] = 'grupodatco.com';
	tp_web['focus'] = 'focus.grupodatco.com';
	tp_web['interservices'] = 'interservices.grupodatco.com';
	tp_web['sersat'] = 'sersat.grupodatco.com';
	tp_web['silica_networks'] = 'silicanetworks.com';
	tp_web['velocom'] = 'velocom.com.ar';
	tp_address['ar_caba---san-martin'] = 'San Martín 640 (C1004AAN)<br />Microcentro, CABA<br />Argentina';
	tp_phone['ar_caba---san-martin'] = '+54 (11) 4103-1300';
	tp_address['ar_caba---catulo'] = 'Cátulo Castillo 3251 (C1261ACB)<br />Distrito Tecnológico, CABA<br />Argentina';
	tp_phone['ar_caba---catulo'] = '+54 (11) 4103-1300';
	tp_address['ar_caba---chiclana'] = 'Av. Chiclana 3345 (C1260ACA)<br />Distrito Tecnológico, CABA<br />Argentina';
	tp_phone['ar_caba---chiclana'] = '+54 (11) 4103-1300';
	tp_address['ar_caba---jujuy'] = 'Av. Jujuy 1956 (C1247ABA)<br />Parque Patricios, CABA<br />Argentina';
	tp_phone['ar_caba---jujuy'] = '+54 (11) 4103-1300';
	tp_address['ar_la-plata'] = 'Av. 51 511 (B1904AVK)<br />Of. 301<br />La Plata, Buenos Aires<br />Argentina'
	tp_phone['ar_la-plata'] = '';
	tp_address['ar_bahia-blanca'] = 'España 41 (B8000JFA)<br />Bahía Blanca, Buenos Aires<br />Argentina';
	tp_phone['ar_bahia-blanca'] = '+54 (291) 451-8376';
	tp_address['ar_mar-del-plata'] = 'Av. Constitución 5075 (B7605EYA)<br />PB, Oficina 106<br />Mar del Plata, Buenos Aires<br />Argentina';
	tp_phone['ar_mar-del-plata'] = '+54 (223) 471-5073';
	tp_address['ar_pilar'] = 'Av. Sgto. Cayetano Beliera 3025 (B1629WWA) - M3, PB Of. 01<br />Pilar Centro, Buenos Aires<br />Argentina'
	tp_phone['ar_pilar'] = '+54 (351) 522-0808';
	tp_address['ar_cordoba'] = 'Jacobo Joule 5353 (X5021)<br />Piso 1, Of. 111<br />Complejo Quadra 54, Córdoba, Argentina';
	tp_phone['ar_cordoba'] = '+54 (351) 464-4495';
	tp_address['ar_cordoba-pop-'] = 'Pedro Claveria 1769 (X5014XAA)<br />Córdoba<br />Argentina';
	tp_phone['ar_cordoba-pop-'] = '+54 (351) 464-4495';
	tp_address['ar_mendoza'] = 'Gral. Paz 586 (M5502BKW)<br />Piso PB, Local 1<br />Mendoza<br />Argentina';
	tp_phone['ar_mendoza'] = '+54 (261) 429-5886';
	tp_address['ar_rosario'] = 'Cochabamba 1019 (S2000DWE)<br />Rosario, Santa Fe<br />Argentina';
	tp_phone['ar_rosario'] = '+54 (341) 485-3803';
	tp_address['ar_posadas'] = 'Acevedo 3241 (N3300HKQ)<br />Piso 3, Depto. F<br />Posadas, Misiones<br />Argentina';
	tp_phone['ar_posadas'] = '';
	tp_address['ar_munro'] = 'Cazadores de Coquimbo 2860 (B1605AZE) - Edificio 2, Planta Baja <br />Munro, Buenos Aires<br />Argentina'
	tp_phone['ar_munro'] = '';
	tp_address['ar_neuquen'] = 'Fotheringham 656 (Q8300JVD)<br />Neuquén<br />Argentina';
	tp_phone['ar_neuquen'] = '';
	tp_address['ar_otra'] = 'Localidad, Provincia<br />Argentina';
	tp_phone['ar_otra'] = '+54';
	tp_address['br_sao-paulo'] = 'Rua Maria Monteiro 786 (13025151)<br />Sala 14<br />Cambuí, Campinas, São Paulo<br />Brasil';
	tp_phone['br_sao-paulo'] = '+55 (19) 3037-1623';
	tp_address['cl_santiago'] = 'Av. El Bosque Norte 500 (7550092)<br />Piso 15<br />Las Condes, Santiago<br />Chile';
	tp_phone['cl_santiago'] = '+56 (2) 2253-5200';
	tp_address['cl_santa-clara'] = 'Av. Santa Clara 684 (8580667)<br />Huechuraba, Santiago<br />Chile';
	tp_phone['cl_santa-clara'] = '';
	tp_address['mx_ciudad-de-mexico'] = 'Montes Urales 424 (11000)<br />Piso 1B, Oficina 143<br />Lomas – Virreyes, CDMX<br />México';
	tp_phone['mx_ciudad-de-mexico'] = '+52 (55) 5279-9930';
	tp_address['pe_lima'] = 'Av. Camino Real 355 (15073)<br />Piso 2<br />San Isidro, Lima<br />Perú';
	tp_phone['pe_lima'] = '+51 (1) 616-0770';
	tp_address['pr_san-juan'] = '1055 Marginal Kennedy (00907)<br />Edificio ILA, Suite 905<br />San Juan<br />Puerto Rico';
	tp_phone['pr_san-juan'] = '';
	tp_address['uy_montevideo'] = 'Juncal 1305 (11000)<br />1er EP<br />Montevideo<br />Uruguay';
	tp_phone['uy_montevideo'] = '';


	// Habilitar oficina después de seleccionar empresa
	jQuery('#tp_frente').attr('src','/wp-content/uploads/tp-grupo_datco-frente.png');
	jQuery('#tp_dorso').attr('src','/wp-content/uploads/tp-grupo_datco-dorso.png');
	jQuery('select[name=ORG] option[value="Datco Soluciones"],select[name=ORG] option[value="IT4W"]').hide();
	jQuery('.wpcf7 select[name=ORG]').change(function() {
		var id_form = jQuery(this).closest('.wpcf7').attr('id');
		if ( jQuery(this).val() != '—' ) {
			var tp_org = jQuery('#'+id_form+' select[name=ORG] option:selected').val();
			tp_org = tp_org.replace(/ /,'_').toLowerCase();
			tp_org = tp_org.replace(/\(|\)/g,'');
			if ( tp_org.indexOf('0g') != -1 ) {
				tp_org = tp_org = tp_org.replace(/0g/g,'zerog');
			}
			jQuery('#'+id_form+' .tp').removeClass().addClass('tp '+tp_org);
			if ( id_form == 'wpcf7-f24224-p18546-o2' ) {
				jQuery('#'+id_form+' .tp').addClass('digital');
				jQuery('#mobile-logo').fadeOut('fast', function() {
				jQuery('#mobile-logo').attr('src','/wp-content/uploads/'+tp_org+'-ima_h-blanco.png');
				}).fadeIn('fast');
			}
			if ( id_form == 'wpcf7-f16691-p18546-o1' ) {
				jQuery('#tp_frente').fadeOut('fast', function() {
					jQuery('#tp_frente').attr('src','/wp-content/uploads/tp-'+tp_org+'-frente.png');
				}).fadeIn('fast');
				jQuery('#tp_dorso').fadeOut('fast', function() {
					jQuery('#tp_dorso').attr('src','/wp-content/uploads/tp-'+tp_org+'-dorso.png');
				}).fadeIn('fast');
			}
			jQuery('#'+id_form+' .step2').css('opacity','1');
			jQuery('#'+id_form+' .step2 :input').prop('disabled',false);
			jQuery('#'+id_form+' .step2').removeClass('step2');
			if ( jQuery(window).width() < 960 ) {
				jQuery('html,body').animate({scrollTop:jQuery('#'+id_form+' select[name=OFFICE]').offset().top-150},'fast','linear',function(){
					jQuery('#'+id_form+' select[name=OFFICE]').focus();
				});
			}
			jQuery('#'+id_form+' .tpdata.web').text(tp_web[tp_org]);
		}
	});


	// 2. Habilitar el resto después de seleccionar oficina
	jQuery('select[name=OFFICE] option:contains(AR - Externo / Freelance)').hide();
	jQuery('.wpcf7 select[name=OFFICE]').change(function(){
		var id_form = jQuery(this).closest('.wpcf7').attr('id');
		if ( jQuery(window).width() < 960 ) {
			jQuery('html,body').animate({scrollTop:jQuery('#'+id_form+' .step3:first').offset().top-100},'fast','linear',function(){
				jQuery('#'+id_form+' .step3:first').focus();
			});
		}
		var this_value = jQuery(this).val();
		var ctry = this_value.substring(0,2).toLowerCase();
		var office = normalize(this_value.substring(this_value.indexOf('-')+2,this_value.length).toLowerCase());
		var ctry_office = ctry+'_'+office;
		if ( ctry_office == 'cl_santiago' ) {
			jQuery('input[name=CTRYMAIL]').val('libreria_cl@datco.net')
		}
		else {
			jQuery('input[name=CTRYMAIL]').val('libreria@datco.net')
		}
		jQuery('#'+id_form+' input[name=PHONE]').val(tp_phone[ctry_office]);
		jQuery('#'+id_form+' textarea[name=ADDRESS]').val(tp_address[ctry_office].replace(/<br\s*\/?>/gi,'\n'));
		jQuery('#'+id_form+' .tpdata.phone').text(tp_phone[ctry_office]);
		jQuery('#'+id_form+' .tpdata.address').html(tp_address[ctry_office]);
		var mobile_phone_cod_ctry = tp_phone[ctry_office].substr(0,3);
		if ( mobile_phone_cod_ctry.length > 0 ) {
			var mobile_phone_cod_loc = tp_phone[ctry_office].substring(tp_phone[ctry_office].lastIndexOf('(')+1,tp_phone[ctry_office].lastIndexOf(')'));
			if ( ctry_office.indexOf('ar') != -1 || ctry_office.indexOf('cl') != -1 ) {
				var mobile_phone_cod = mobile_phone_cod_ctry+' 9 '+mobile_phone_cod_loc+' ';
			}
			else if ( ctry_office.indexOf('mx') != -1 ) {
				var mobile_phone_cod = mobile_phone_cod_ctry+' 1 ';
			}
			else {
				var mobile_phone_cod = mobile_phone_cod_ctry+' ';
			}
			jQuery('#'+id_form+' input[name=MOBILE_PHONE]').val(mobile_phone_cod);
			jQuery('#'+id_form+' .tpdata.mobile_phone').html(mobile_phone_cod);
		}
		jQuery('#'+id_form+' .step3,#'+id_form+' .disabled').removeClass('step3').removeClass('disabled');
	});


	// Copiar valores en previsualización según ingreso en campos
	jQuery(document).on('input','.wpcf7 :input',function(){
		var span_class = jQuery(this).attr('name').toLowerCase();
		if ( span_class == 'phone' ) {
			if ( jQuery(this).val().length > 0 ) {
				jQuery('.tp ul li:nth-child(3),span.phone').show();
				jQuery('#mobile-content > ul > li:nth-child(1)').show();
			}
			else {
				jQuery('.tp ul li:nth-child(3),span.phone').hide();
				jQuery('#mobile-content > ul > li:nth-child(1)').hide();
			}
		}
		if ( span_class == 'mobile_phone' ) {
			if ( jQuery(this).val().length > 0 ) {
				jQuery('.tp ul li:nth-child(2),#mobile-content > ul > li:nth-child(2),span.phone_mobile').show();
			}
			else {
				jQuery('.tp ul li:nth-child(2),#mobile-content > ul > li:nth-child(2),span.phone_mobile').hide();
			}
			var ctry_office = jQuery('.wpcf7 select[name=OFFICE] option:selected').val();
			var ctry = jQuery('.wpcf7 select[name=OFFICE] option:selected').val().substr(0,2).toLowerCase();
			var office = normalize(ctry_office.substr(5,3).toLowerCase());
			ctry_office = ctry+'_'+office;
			jQuery(this).val(jQuery(this).val());
			jQuery('.tpdata.'+span_class).text(jQuery(this).val());
		}
		else {
			if ( span_class == 'address' ) {
				this_value = jQuery(this).val().replace(/\r\n|\r|\n/g,'<br />');
			}
			else {
				this_value = jQuery(this).val();
			}
			jQuery('.tpdata.'+span_class).html(this_value);
		}
	});

	
});