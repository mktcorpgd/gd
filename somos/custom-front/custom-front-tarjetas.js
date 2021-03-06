jQuery(document).ready(function() {


	// Deshabilitar pasos 2 y 3 del formulario
	jQuery('.wpcf7-form>.step2 :input,.wpcf7-form>.step3 :input').prop('disabled',true);
	jQuery('.wpcf7-form>.step3 input[type=submit]').prop('disabled',true);


	// Asignación de nombre, apellido, email, usuario y QR
	var fname = jQuery('#usrfname').text();
	var lname = jQuery('#usrlname').text();
	var email = jQuery('#usremail').text();
	var username = jQuery('#wp-admin-bar-user-info .username').text().toLowerCase().replace(' ','-');
	jQuery('span.fname').text(fname);
	jQuery('span.lname').text(lname);
	jQuery('span.email').text(email);
	jQuery('input[name=USERNAME]').val(username);
	jQuery('img#qr').attr({
		src: 'https://qr.gdat.co/d/'+username+'/10/H/5',
		alt: 'QR '+fname+' '+lname
	});


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
	//tp_web['zerog_networks'] = '0gnetworks.com.ar';
	tp_web['grupo_datco'] = 'www.grupodatco.com';
	tp_web['baitcon'] = 'www.baitcon.com';
	tp_web['datco'] = 'datco.grupodatco.com';
	tp_web['focus'] = 'focus.grupodatco.com';
	tp_web['interservices'] = 'interservices.grupodatco.com';
	tp_web['sersat'] = 'sersat.grupodatco.com';
	tp_web['silica_networks'] = 'www.silicanetworks.com';
	tp_web['velocom'] = 'www.velocom.com.ar';
	tp_address['ar_caba - catulo castillo'] = 'Cátulo Castillo 3251 (C1261ACB)<br />Distrito Tecnológico, CABA<br />Argentina';
	tp_phone['ar_caba - catulo castillo'] = '+54 (11) 4103-1300';
	tp_address['ar_caba - san martin'] = 'San Martín 640 (C1004AAN)<br />Microcentro, CABA<br />Argentina';
	tp_phone['ar_caba - san martin'] = '+54 (11) 4103-1300';
	tp_address['ar_caba - jujuy'] = 'Av. Jujuy 1956 (C1247ABA)<br />Parque Patricios, CABA<br />Argentina';
	tp_phone['ar_caba - jujuy'] = '+54 (11) 4103-1300';
	tp_address['ar_amba - parque empresarial austral'] = 'Av. Sgto. Cayetano Beliera 3025 (B1629WWA)<br />M3, PB Of. 01<br />Pilar Centro, Buenos Aires<br />Argentina'
	tp_phone['ar_amba - parque empresarial austral'] = '+54';
	tp_address['ar_interior - bahia blanca'] = 'España 41 (B8000JFA)<br />Bahía Blanca, Buenos Aires<br />Argentina';
	tp_phone['ar_interior - bahia blanca'] = '+54 (291) 451-8376';
	tp_address['ar_interior - bariloche'] = 'Rolando 560 (R8400XAC)<br />Piso 2<br />Bariloche, Río Negro<br />Argentina';
	tp_phone['ar_interior - bariloche'] = '';
	tp_address['ar_interior - comodoro rivadavia'] = 'España 541 (U9000CUC)<br />Comodoro Rivadavia, Chubut<br />Argentina';
	tp_phone['ar_interior - comodoro rivadavia'] = '+54 (297) 424-4680';
	tp_address['ar_interior - cordoba'] = 'Pedro Claveria 1769 (X5014XAA)<br />Córdoba<br />Argentina';
	tp_phone['ar_interior - cordoba'] = '+54 (351) 464-4495';
	tp_address['ar_interior - mar del plata'] = 'Av. Constitución 5075 (B7605EYA)<br />PB, Oficina 106<br />Mar del Plata, Buenos Aires<br />Argentina';
	tp_phone['ar_interior - mar del plata'] = '+54 (223) 471-5073';
	tp_address['ar_interior - mendoza'] = 'Gral. Paz 586 (M5502BKW)<br />Piso PB, Local 1<br />Mendoza<br />Argentina';
	tp_phone['ar_interior - mendoza'] = '+54 (261) 429-5886';
	tp_address['ar_interior - misiones'] = 'Acevedo 3242 (N3300HKQ)<br />Posadas<br />Misiones<br />Argentina';
	tp_phone['ar_interior - misiones'] = '';
	tp_address['ar_interior - neuquen'] = 'Juan Larrea 595 (Q8300JVD)<br />Neuquén<br />Argentina';
	tp_phone['ar_interior - neuquen'] = '+54 (299) 525-9119';
	tp_address['ar_interior - rosario'] = 'Cochabamba 1019 (S2000DWE)<br />Rosario, Santa Fe<br />Argentina';
	tp_phone['ar_interior - rosario'] = '+54 (341) 485-3803';
	tp_address['ar_interior - san luis'] = '';
	tp_phone['ar_interior - san luis'] = '';
	tp_address['br_sao paulo'] = 'Rua Maria Monteiro 786 (13025151)<br />Sala 14<br />Cambuí, Campinas, São Paulo<br />Brasil';
	tp_phone['br_sao paulo'] = '+55 (19) 3037-1623';
	tp_address['cl_santiago'] = 'Av. El Bosque Norte (7550092)<br />Piso 15<br />Las Condes, Santiago<br />Chile';
	tp_phone['cl_santiago'] = '+56 (2) 2253-5200';
	tp_address['mx_ciudad de mexico'] = 'Montes Urales 424 (11000)<br />Piso 1B, Oficina 143<br />Lomas – Virreyes, CDMX<br />México';
	tp_phone['mx_ciudad de mexico'] = '+52 (55) 5279-9930';
	tp_address['pe_lima'] = 'Av. Camino Real 355 (15073)<br />Piso 2<br />San Isidro, Lima<br />Perú';
	tp_phone['pe_lima'] = '+51 (1) 616-0770';
	tp_address['pr_san juan'] = '1055 Marginal Kennedy (00907)<br />Edificio ILA, Suite 905<br />Hato Rey, San Juan<br />Puerto Rico';
	tp_phone['pr_san juan'] = '+1 (787) 302-2509';


	// 1. Habilitar oficina después de seleccionar empresa
	jQuery('.wpcf7 select[name=ORG]').change(function(){
		var tp_org = jQuery('select[name=ORG] option:selected').val();
		tp_org = tp_org.replace(/ /g,'_').toLowerCase();
		if ( tp_org.indexOf('(') != -1 ) {
			tp_org = tp_org.substring(0,tp_org.indexOf('(')-1);
		}
		if ( tp_org.indexOf('zero') != -1 ) {
			tp_org = tp_org.replace(/0/g,'zero').toLowerCase();
		}
		jQuery('.tp').removeClass().addClass('tp '+tp_org);
		if ( jQuery('body').hasClass('page-id-24225') ) {
			jQuery('.tp').addClass('digital');
		}
		jQuery('#mobile-logo').fadeOut('fast', function() {
		jQuery('#mobile-logo').attr('src','/wp-content/uploads/'+tp_org+'-ima_h-one_stroke-dark-es-96h.png');
		}).fadeIn('fast');
			jQuery('#tp_frente').fadeOut('fast', function() {
			jQuery('#tp_frente').attr('src','/wp-content/uploads/tp-'+tp_org+'-frente.png');
		}).fadeIn('fast');
		jQuery('#tp_dorso').fadeOut('fast', function() {
			jQuery('#tp_dorso').attr('src','/wp-content/uploads/tp-'+tp_org+'-dorso.png');
		}).fadeIn('fast');
		jQuery('.wpcf7-form>div.step2').css('opacity','1');
		jQuery('.wpcf7-form>div.step2 :input').prop('disabled',false);
		jQuery('.wpcf7-form>.step2').removeClass('step2');
		if ( jQuery(window).width() < 960 ) {
			jQuery('html,body').animate({scrollTop:jQuery('.wpcf7 select[name=OFFICE]').offset().top-150},'fast','linear',function(){
				jQuery('.wpcf7 select[name=OFFICE]').focus();
			});
		}
		var username = jQuery('#wpadminbar #wp-admin-bar-user-info .username').text().replace(' ','-');
		jQuery('input[name=USERNAME]').val(username);
		jQuery('.tpdata.web').text(tp_web[tp_org]);
	});


	// 2. Habilitar el resto después de seleccionar oficina
	jQuery('.wpcf7 select[name=OFFICE]').change(function(){
		if ( jQuery(window).width() < 960 ) {
			jQuery('html,body').animate({scrollTop:jQuery('.step3:first').offset().top-100},'fast','linear',function(){
				jQuery('.step3:first').focus();
			});
		}
		var this_value = jQuery(this).val();
		var ctry = this_value.substring(0,2).toLowerCase();
		var office = RemoveAccents(this_value.substring(this_value.indexOf('-')+2,this_value.length).toLowerCase());
		var ctry_office = ctry+'_'+office;
		if ( ctry_office == 'cl_santiago' ) {
			jQuery('input[name=CTRYMAIL]').val('cristian.silva@datco.cl')
		}
		else {
			jQuery('input[name=CTRYMAIL]').val('libreria@datco.net')
		}
		if ( ctry_office == 'ar_caba - catulo castillo' || ctry_office == 'ar_caba - san martin' || ctry_office == 'ar_interior - bariloche' ) {
			jQuery('.wpcf7>form>div:nth-child(6)').removeClass('hidden').addClass('visible');
			jQuery('.wpcf7>form>div:nth-child(5),.wpcf7>form>div:nth-child(6),.wpcf7>form>div:nth-child(7),.wpcf7>form>div:nth-child(8)').removeClass('three columns3').addClass('four columns4');
			if ( ctry_office == 'ar_interior - bariloche' ) {
				jQuery('input[name=FLOOR]').val(2);
			}
		}
		else {
			jQuery('.wpcf7>form>div:nth-child(6)').removeClass('visible').addClass('hidden');
			jQuery('.wpcf7>form>div:nth-child(5),.wpcf7>form>div:nth-child(6),.wpcf7>form>div:nth-child(7),.wpcf7>form>div:nth-child(8)').removeClass('four columns4').addClass('three columns3');
		}
		jQuery('input[name=PHONE]').val(tp_phone[ctry_office]);
		jQuery('.tpdata.phone').text(tp_phone[ctry_office]);
		jQuery('.wpcf7>form>div:nth-child(5)').addClass('three').removeClass('one');
		jQuery('.tp.digital h5,.tp.digital li:nth-child(1),.wpcf7>form>div:nth-child(5)+div+div,.wpcf7>form>div:nth-child(5)+div+div+div').removeClass('hidden').addClass('visible');
		jQuery('input[name=ADDRESS]').val(tp_address[ctry_office].replace(/<br\s*\/?>/gi, ';'));
		jQuery('.tpdata.address').html(tp_address[ctry_office]);
		var mobile_phone_cod_ctry = tp_phone[ctry_office].substr(0,3);
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
		jQuery('input[name=MOBILE_PHONE]').val(mobile_phone_cod);
		jQuery('.tpdata.mobile_phone').html(mobile_phone_cod);
		jQuery('.wpcf7-form>div.step3').show();
		jQuery('.wpcf7-form>div.step3 :input').prop('disabled',false);
		jQuery('.wpcf7-form>.step3,.wpcf7-submit').show().removeClass('disabled');
	});


	// Copiar valores en previsualización según ingreso en campos
	jQuery(document).on('input','.wpcf7 input',function(){
		var span_class = jQuery(this).attr('name').toLowerCase();
		if ( span_class == 'floor' ) {
			var floor = jQuery(this).val();
			var arr_address = jQuery('input[name=ADDRESS]').val().split(';');
			if ( floor.length > 0 ) {
				arr_address[1] = 'Piso '+floor;
			}
			else {
				arr_address[1] = '';
			}
			var address = arr_address.join(';');
			jQuery('input[name=ADDRESS]').val(address);
			jQuery('.tpdata.address').html(address.replace(/;/g, '<br />'));
		}
		if ( span_class == 'phone' || span_class == 'phone_ext' ) {
			if ( jQuery(this).val().length > 0 ) {
				jQuery('.tp ul li:nth-child(3),span.phone,span.phone_ext_block').show();
				if ( jQuery('.tp.digital').length > 0 ) {
					jQuery('.tp.digital h5,#mobile-content > ul > li:nth-child(1)').show();
				}
			}
			else {
				jQuery('.tp ul li:nth-child(3),span.phone,span.phone_ext_block').hide();
				if ( jQuery('.tp.digital').length > 0 ) {
					jQuery('.tp.digital h5,#mobile-content > ul > li:nth-child(1)').hide();
				}
			}
		}
		if ( span_class == 'mobile_phone' ) {
			if ( jQuery(this).val().length > 0 ) {
				jQuery('.tp ul li:nth-child(2),span.phone_mobile').show();
				if ( jQuery('.tp.digital').length > 0 ) {
					jQuery('#mobile-content > ul > li:nth-child(2)').show();
				}
			}
			else {
				jQuery('.tp ul li:nth-child(2),span.phone_mobile').hide();
				if ( jQuery('.tp.digital').length > 0 ) {
					jQuery('#mobile-content > ul > li:nth-child(2)').hide();
				}
			}
			var ctry_office = jQuery('.wpcf7 select[name=OFFICE] option:selected').val();
			var ctry = jQuery('.wpcf7 select[name=OFFICE] option:selected').val().substr(0,2).toLowerCase();
			var office = RemoveAccents(ctry_office.substr(5,3).toLowerCase());
			ctry_office = ctry+'_'+office;
			jQuery(this).val(jQuery(this).val());
			jQuery('.tpdata.'+span_class).text(jQuery(this).val());
		}
		else {
			jQuery('.tpdata.'+span_class).html(jQuery(this).val().replace(/;/g, '<br />'));
		}
	});

	
});