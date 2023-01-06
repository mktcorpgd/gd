// Función para normalizar textos
var normalize=(function(){var from="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",to="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",mapping={};for(var i=0,j=from.length;i<j;i++)mapping[from.charAt(i)]=to.charAt(i);return function(str){var ret=[];for(var i=0,j=str.length;i<j;i++){var c=str.charAt(i);if(mapping.hasOwnProperty(str.charAt(i))){ret.push( mapping[c]);}else{ret.push(c);}}return ret.join('').replace(/[^-A-Za-z0-9]+/g,'-').toLowerCase();}})();


// HEADER - Transformar teléfonos en link:
jQuery('.fusion-contact-info-phone-number').each(function(i) {
	var value = jQuery(this).text();
	jQuery(this).html('<a href="tel:'+value+'">'+value+'</a>');
});


// GENERAL - Función para obtener variables GET
jQuery.getPrm = function(name){var results=new RegExp('[?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}else{return results[1]||0;}}


// CONTENIDO - Página dinámica para servicio de internet
var lugar_name = decodeURIComponent(jQuery.getPrm('lugar'));
var lugar_class = normalize(lugar_name.toLowerCase());if(lugar_class.slice(-1)=='-'){lugar_class=lugar_class.slice(0,-1);}
var site_name = jQuery("meta[property='og:site_name']").attr("content");
if ( jQuery('body').hasClass('home') || jQuery('body').hasClass('single-avada_portfolio') ) {
	if ( lugar_class == 'null' ) {
		jQuery('.caption,.price span,#legales').hide();
	}
	else {
		jQuery('.not-selected').removeClass('not-selected');
		jQuery('div:not(.not-selected) .'+lugar_class+'+.not').hide();
		jQuery('select[name="LOC"] option.'+lugar_class+',select[name="LOC"] option:contains('+lugar_name+')').attr('selected','selected');
		jQuery('div:not(.not-selected) .'+lugar_class+',.tfs-slider span.'+lugar_class+',.caption span.'+lugar_class+',#legales span.'+lugar_class+',#legales .cur_month,#legales .cur_year,#legales .last_day,.step2').show();
		if ( jQuery('.map iframe').length ) {
			jQuery('.map iframe').attr('src','https://www.velocom.com.ar/_velocom/cobertura/'+lugar_class);
			jQuery('.map').show();	
		}
		if ( jQuery('body').hasClass('postid-24725') ) {
			jQuery('.tv').remove();
			jQuery('title').html('Internet Inalámbrico para Hogares en '+lugar_name+' &mdash; '+site_name);
		}
		else if ( jQuery('body').hasClass('postid-23640') ) {
			jQuery('.tv').remove();
			jQuery('title').html('Internet Inalámbrico Corporativo en '+lugar_name+' &mdash; '+site_name);
		}
		else if ( jQuery('body').hasClass('postid-25544') ) {
			jQuery('.not-tv').remove();
			jQuery('title').html('Internet por Fibra Óptica + TV en '+lugar_name+' &mdash; '+site_name);
		}
	}
}


// CONTENIDO - Si cambia la localidad recargar con información respectiva
var doc_href = window.location.href;
doc_href = doc_href.substring(0,doc_href.indexOf('?'));
if ( jQuery('body').hasClass('postid-25544') ) {
	jQuery('select[name=LOC] option:last').attr('disabled','disabled');
}
jQuery('select[name=LOC]').change(function() {
	var lugar_name = jQuery(this).val();
	var lugar_index = jQuery('option:selected',this).index();
	if ( (jQuery('body').hasClass('home') || jQuery('body').hasClass('single-avada_portfolio')) && (lugar_index != 0) && !jQuery('body').hasClass('modal-open') ) {
		jQuery('#cargando-btn').trigger('click');
		setTimeout(function(){
			if ( jQuery('body').hasClass('home') ) {
				document.location = doc_href+'/servicio/internet/?lugar='+lugar_name;
			}
			else {
				document.location = doc_href+'?lugar='+lugar_name;
			}
		},500);	
	}
});


// FORMULARIO - Domicilio a través de Google Maps
inputs_address = document.getElementsByClassName('address_maps');
for (var i = 0; i < inputs_address.length; i++) {
	var autocomplete = new google.maps.places.Autocomplete(inputs_address[i]);
	autocomplete.addListener('place_changed', function() {
		selected = true;
	});
}
var selected = false;
jQuery('.address_maps').on('focus', function() {
	if( selected != true ) {
		selected = false;
	}
}).on('blur', function() {
	if ( selected == false ) {
		jQuery(this).val('');
	}
	if ( jQuery(this).val().length == 0 ) {
		selected = false;
	}
});


// velocomfibra.com.ar
if ( jQuery('body').hasClass('postid-25656') ) {
	
	// GENERAL - WhatsApp
	jQuery('.fusion-secondary-header .fusion-contact-info-phone-number a,.fusion-copyright-notice a[href*="tel:"]').text('WhatsApp').attr('href','https://api.whatsapp.com/send?phone=5491131216219');

	// MAPA DE COBERTURA
	var map;
	var geocoder;
	var marker;
	var bounds;
	var center = new google.maps.LatLng(-34.601049,-58.376792);
	var polygon_almagro;
	var polygon_barracas;
	var polygon_boedo;
	var polygon_chacarita;
	var polygon_consti;
	var polygon_hospitales;
	var polygon_macrocentro;
	var polygon_microcentro;
	var polygon_pmaderoeste;
	var polygon_pmaderooeste;
	var polygon_ppatricios;
	var polygon_retiro;
	var polygon_stelmo;
	var area_almagro=[{lat:-34.6155427,lng:-58.414754},{lat:-34.6154898,lng:-58.4137991},{lat:-34.6141836,lng:-58.4139323},{lat:-34.6129032,lng:-58.4143723},{lat:-34.6118172,lng:-58.4149624},{lat:-34.6107752,lng:-58.4153808},{lat:-34.6106869,lng:-58.4144581},{lat:-34.6105986,lng:-58.4130634},{lat:-34.6105809,lng:-58.4126342},{lat:-34.6100423,lng:-58.4126557},{lat:-34.6101836,lng:-58.4145547},{lat:-34.6103779,lng:-58.4158207},{lat:-34.6104749,lng:-58.4173549},{lat:-34.6105721,lng:-58.4190393},{lat:-34.6110843,lng:-58.4188891},{lat:-34.6126383,lng:-58.4182668},{lat:-34.6132123,lng:-58.4179772},{lat:-34.6127531,lng:-58.4166039},{lat:-34.6124264,lng:-58.4156275},{lat:-34.6131152,lng:-58.4152628},{lat:-34.6142895,lng:-58.41478},{lat:-34.6155427,lng:-58.414754}];
	var area_barracas=[{lat:-34.6338571,lng:-58.3828738},{lat:-34.634883,lng:-58.3824621},{lat:-34.6391202,lng:-58.3811746},{lat:-34.6382727,lng:-58.3751665},{lat:-34.644275,lng:-58.3740507},{lat:-34.6440985,lng:-58.3729778},{lat:-34.6459697,lng:-58.3724628},{lat:-34.6478056,lng:-58.3803163},{lat:-34.6489353,lng:-58.3800588},{lat:-34.646923,lng:-58.3712183},{lat:-34.6429334,lng:-58.3719478},{lat:-34.6430378,lng:-58.3730415},{lat:-34.6377769,lng:-58.3739641},{lat:-34.6351287,lng:-58.374565},{lat:-34.6338222,lng:-58.374801},{lat:-34.6327805,lng:-58.3751658},{lat:-34.6315618,lng:-58.3754816},{lat:-34.6321356,lng:-58.3759939},{lat:-34.6324799,lng:-58.3777078},{lat:-34.632886,lng:-58.3792689},{lat:-34.6330272,lng:-58.3812537},{lat:-34.6338571,lng:-58.3828738}];
	var area_boedo=[{lat:-34.6345685,lng:-58.4116213},{lat:-34.6338494,lng:-58.4105697},{lat:-34.6315229,lng:-58.411074},{lat:-34.6264026,lng:-58.4115031},{lat:-34.6235244,lng:-58.4117285},{lat:-34.6237187,lng:-58.4132198},{lat:-34.6182005,lng:-58.4135738},{lat:-34.6154898,lng:-58.4137991},{lat:-34.6155427,lng:-58.414754},{lat:-34.6197101,lng:-58.4144751},{lat:-34.6221911,lng:-58.4143141},{lat:-34.6247074,lng:-58.4141425},{lat:-34.6245176,lng:-58.4125814},{lat:-34.6265968,lng:-58.4125976},{lat:-34.6292983,lng:-58.4124473},{lat:-34.6292276,lng:-58.4121362},{lat:-34.6304282,lng:-58.4120665},{lat:-34.6317259,lng:-58.4119645},{lat:-34.6345685,lng:-58.4116213}];
	var area_chacarita=[{lat:-34.5839531,lng:-58.466909},{lat:-34.58496,lng:-58.4678532},{lat:-34.5852692,lng:-58.4682072},{lat:-34.5855872,lng:-58.467703},{lat:-34.5868503,lng:-58.4660293},{lat:-34.589288,lng:-58.4686149},{lat:-34.5895619,lng:-58.468926},{lat:-34.59003,lng:-58.4683038},{lat:-34.5906306,lng:-58.4675527},{lat:-34.5908779,lng:-58.4672094},{lat:-34.589553,lng:-58.4658576},{lat:-34.5887934,lng:-58.4668661},{lat:-34.5867178,lng:-58.464656},{lat:-34.5851897,lng:-58.4668661},{lat:-34.5843241,lng:-58.4659649},{lat:-34.5839531,lng:-58.466909}];
	var area_consti=[{lat:-34.6210383,lng:-58.3822622},{lat:-34.6211089,lng:-58.3837213},{lat:-34.624817,lng:-58.3837213},{lat:-34.6317031,lng:-58.3834209},{lat:-34.6334333,lng:-58.3906307},{lat:-34.6349164,lng:-58.3905449},{lat:-34.6331155,lng:-58.3833351},{lat:-34.6338571,lng:-58.3828738},{lat:-34.6330272,lng:-58.3812537},{lat:-34.632886,lng:-58.3792689},{lat:-34.6324799,lng:-58.3777078},{lat:-34.6321356,lng:-58.3759939},{lat:-34.6315618,lng:-58.3754816},{lat:-34.6292577,lng:-58.3766618},{lat:-34.6282424,lng:-58.3773645},{lat:-34.6271124,lng:-58.3778741},{lat:-34.6256999,lng:-58.3783569},{lat:-34.6236163,lng:-58.3790436},{lat:-34.6224862,lng:-58.3787002},{lat:-34.6227604,lng:-58.3821369},{lat:-34.6210383,lng:-58.3822622}];
	var area_hospitales=[{lat:-34.5991541,lng:-58.3921615},{lat:-34.5992278,lng:-58.3929933},{lat:-34.5992102,lng:-58.3945489},{lat:-34.5991837,lng:-58.3958579},{lat:-34.5992366,lng:-58.3972848},{lat:-34.5986096,lng:-58.3973599},{lat:-34.5984242,lng:-58.3991194},{lat:-34.5980356,lng:-58.4006536},{lat:-34.5991307,lng:-58.400997},{lat:-34.599007,lng:-58.4017802},{lat:-34.5987156,lng:-58.4023864},{lat:-34.598274,lng:-58.4032768},{lat:-34.5976293,lng:-58.4030515},{lat:-34.5966932,lng:-58.4027404},{lat:-34.5960485,lng:-58.4025044},{lat:-34.5945824,lng:-58.4019036},{lat:-34.5935137,lng:-58.4014422},{lat:-34.5932753,lng:-58.4013027},{lat:-34.5930015,lng:-58.4021289},{lat:-34.5931781,lng:-58.4022576},{lat:-34.5943792,lng:-58.4027941},{lat:-34.5956908,lng:-58.4032232},{lat:-34.5964503,lng:-58.4035773},{lat:-34.5975807,lng:-58.4039528},{lat:-34.5982431,lng:-58.4042532},{lat:-34.5983756,lng:-58.403985},{lat:-34.5987907,lng:-58.4041352},{lat:-34.5989761,lng:-58.4038562},{lat:-34.5993205,lng:-58.4031374},{lat:-34.599453,lng:-58.4024507},{lat:-34.5997974,lng:-58.4024507},{lat:-34.5999476,lng:-58.4010774},{lat:-34.600186,lng:-58.4010345},{lat:-34.6002478,lng:-58.3998865},{lat:-34.6003538,lng:-58.3986634},{lat:-34.6003097,lng:-58.3979339},{lat:-34.6010515,lng:-58.3980412},{lat:-34.6010515,lng:-58.3970863},{lat:-34.600345,lng:-58.3971078},{lat:-34.6003089,lng:-58.3957193},{lat:-34.600919,lng:-58.3956701},{lat:-34.6008572,lng:-58.3942754},{lat:-34.6004156,lng:-58.394329},{lat:-34.6004245,lng:-58.3929235},{lat:-34.6004082,lng:-58.3925692},{lat:-34.6003769,lng:-58.3919423},{lat:-34.5991541,lng:-58.3921615}];
	var area_macrocentro=[{lat:-34.5987126,lng:-58.383278},{lat:-34.5991188,lng:-58.3916894},{lat:-34.5991541,lng:-58.3921615},{lat:-34.6003769,lng:-58.3919423},{lat:-34.6004082,lng:-58.3925692},{lat:-34.601044,lng:-58.3924619},{lat:-34.6010087,lng:-58.3916679},{lat:-34.6033489,lng:-58.3914748},{lat:-34.6033313,lng:-58.3911315},{lat:-34.6039847,lng:-58.3911529},{lat:-34.6041084,lng:-58.3923653},{lat:-34.6047884,lng:-58.392258},{lat:-34.6046559,lng:-58.390477},{lat:-34.6030663,lng:-58.3904931},{lat:-34.6026513,lng:-58.3905092},{lat:-34.6026601,lng:-58.3909491},{lat:-34.601883,lng:-58.3910027},{lat:-34.6018785,lng:-58.3908954},{lat:-34.6007084,lng:-58.3910027},{lat:-34.6004877,lng:-58.3910242},{lat:-34.6004943,lng:-58.3911181},{lat:-34.5999627,lng:-58.3911659},{lat:-34.5998832,lng:-58.3896451},{lat:-34.5997773,lng:-58.3881323},{lat:-34.5996889,lng:-58.3868449},{lat:-34.5996183,lng:-58.3854287},{lat:-34.599477,lng:-58.3831971},{lat:-34.5987126,lng:-58.383278}];
	var area_microcentro=[{lat:-34.5983591,lng:-58.3684098},{lat:-34.5945808,lng:-58.3699577},{lat:-34.5906259,lng:-58.3710334},{lat:-34.5918131,lng:-58.3719832},{lat:-34.5907974,lng:-58.3739358},{lat:-34.5900025,lng:-58.3733672},{lat:-34.5865666,lng:-58.3807272},{lat:-34.5885628,lng:-58.3823258},{lat:-34.5899495,lng:-58.3831466},{lat:-34.5906804,lng:-58.3835704},{lat:-34.5912258,lng:-58.3836777},{lat:-34.5916806,lng:-58.3836669},{lat:-34.5968502,lng:-58.3835551},{lat:-34.6002915,lng:-58.3830768},{lat:-34.6029763,lng:-58.3829374},{lat:-34.6049675,lng:-58.3827227},{lat:-34.6091488,lng:-58.3825297},{lat:-34.6131717,lng:-58.3823301},{lat:-34.612778,lng:-58.3761138},{lat:-34.612522,lng:-58.3719403},{lat:-34.6136565,lng:-58.3718652},{lat:-34.6135904,lng:-58.3704704},{lat:-34.612438,lng:-58.3703631},{lat:-34.6122831,lng:-58.3679016},{lat:-34.6111003,lng:-58.3680458},{lat:-34.6110296,lng:-58.367166},{lat:-34.606791,lng:-58.3675844},{lat:-34.6027819,lng:-58.3679814},{lat:-34.59985,lng:-58.3685393},{lat:-34.598331,lng:-58.3693976},{lat:-34.5983591,lng:-58.3684098}];
	var area_pmaderoeste=[{lat:-34.5991534,lng:-58.3659601},{lat:-34.5990651,lng:-58.3651877},{lat:-34.6177326,lng:-58.3631277},{lat:-34.6176973,lng:-58.3617544},{lat:-34.61911,lng:-58.3615399},{lat:-34.61911,lng:-58.3596516},{lat:-34.6179092,lng:-58.3598662},{lat:-34.6175207,lng:-58.3587075},{lat:-34.6194984,lng:-58.35845},{lat:-34.6233567,lng:-58.3622373},{lat:-34.6238776,lng:-58.3615399},{lat:-34.6199222,lng:-58.3576775},{lat:-34.611799,lng:-58.3587933},{lat:-34.5991181,lng:-58.3634711},{lat:-34.5972458,lng:-58.3636856},{lat:-34.5973871,lng:-58.3661747},{lat:-34.5991534,lng:-58.3659601}];
	var area_pmaderooeste=[{lat:-34.5975538,lng:-58.3687511},{lat:-34.5983591,lng:-58.3684098},{lat:-34.598331,lng:-58.3693976},{lat:-34.59985,lng:-58.3685393},{lat:-34.6027819,lng:-58.3679814},{lat:-34.6110296,lng:-58.367166},{lat:-34.6111003,lng:-58.3680458},{lat:-34.6227023,lng:-58.3666939},{lat:-34.6226316,lng:-58.3660073},{lat:-34.623903,lng:-58.3645482},{lat:-34.6247329,lng:-58.3624882},{lat:-34.6238776,lng:-58.3615399},{lat:-34.6233379,lng:-58.3625311},{lat:-34.6233732,lng:-58.3642048},{lat:-34.5992141,lng:-58.367166},{lat:-34.5991081,lng:-58.3662648},{lat:-34.5974478,lng:-58.3664364},{lat:-34.5975538,lng:-58.3687511}];
	var area_stelmo=[{lat:-34.6131356,lng:-58.3818323},{lat:-34.6131717,lng:-58.3823301},{lat:-34.6198468,lng:-58.3821155},{lat:-34.6227604,lng:-58.3821369},{lat:-34.6225662,lng:-58.3796049},{lat:-34.6221424,lng:-58.3667732},{lat:-34.6209063,lng:-58.3668805},{lat:-34.6215243,lng:-58.379562},{lat:-34.6196349,lng:-58.3796478},{lat:-34.6164474,lng:-58.3797015},{lat:-34.6130304,lng:-58.380077},{lat:-34.6131356,lng:-58.3818323}];
	var area_ppatricios=[{lat:-34.6349164,lng:-58.3905449},{lat:-34.6334333,lng:-58.3906307},{lat:-34.6351325,lng:-58.3974882},{lat:-34.6318486,lng:-58.3987328},{lat:-34.6334023,lng:-58.4037968},{lat:-34.6336905,lng:-58.4036818},{lat:-34.6343261,lng:-58.4059563},{lat:-34.6347587,lng:-58.407866},{lat:-34.6351383,lng:-58.4093251},{lat:-34.6352795,lng:-58.4099045},{lat:-34.6338494,lng:-58.4105697},{lat:-34.6362152,lng:-58.4141746},{lat:-34.637963,lng:-58.4138312},{lat:-34.638475,lng:-58.4163847},{lat:-34.639393,lng:-58.416256},{lat:-34.6385456,lng:-58.4124794},{lat:-34.6374864,lng:-58.4128442},{lat:-34.6372569,lng:-58.4109774},{lat:-34.6362329,lng:-58.410634},{lat:-34.6360916,lng:-58.4092822},{lat:-34.6350323,lng:-58.4046474},{lat:-34.6368154,lng:-58.404304},{lat:-34.6364977,lng:-58.4028234},{lat:-34.6396755,lng:-58.4019437},{lat:-34.6401125,lng:-58.4031292},{lat:-34.6404875,lng:-58.4030474},{lat:-34.6408141,lng:-58.4039326},{lat:-34.6412908,lng:-58.4037717},{lat:-34.641026,lng:-58.4029241},{lat:-34.6403993,lng:-58.4006991},{lat:-34.6370096,lng:-58.401536},{lat:-34.6365153,lng:-58.3985963},{lat:-34.6358974,lng:-58.3958497},{lat:-34.6354031,lng:-58.3935752},{lat:-34.6349164,lng:-58.3905449}];
	var area_retiro=[{lat:-34.5906259,lng:-58.3710334},{lat:-34.5885167,lng:-58.3693725},{lat:-34.5854252,lng:-58.366819},{lat:-34.5824927,lng:-58.3719689},{lat:-34.5805847,lng:-58.3751661},{lat:-34.582369,lng:-58.3765394},{lat:-34.583376,lng:-58.3747369},{lat:-34.5842769,lng:-58.3755738},{lat:-34.5864675,lng:-58.3773762},{lat:-34.5891703,lng:-58.372677},{lat:-34.5900025,lng:-58.3733672},{lat:-34.5907974,lng:-58.3739358},{lat:-34.5918131,lng:-58.3719832},{lat:-34.5906259,lng:-58.3710334}];
	function initMap() {
		map = new google.maps.Map(document.getElementById('mapvf-cobertura'),{
			center: center,
			zoom: 16,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false
		});
		geocoder = new google.maps.Geocoder();
		bounds = new google.maps.LatLngBounds();
		google.maps.event.addListenerOnce(map,'tilesloaded',function(evt) { 
			bounds = map.getBounds();
		});
		marker = new google.maps.Marker({
			position: center
		});
		polygon_almagro=new google.maps.Polygon({path:area_almagro,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_almagro.setMap(map);
		polygon_barracas=new google.maps.Polygon({path:area_barracas,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_barracas.setMap(map);
		polygon_boedo=new google.maps.Polygon({path:area_boedo,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_boedo.setMap(map);
		polygon_chacarita=new google.maps.Polygon({path:area_chacarita,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_chacarita.setMap(map);
		polygon_consti=new google.maps.Polygon({path:area_consti,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_consti.setMap(map);
		polygon_hospitales=new google.maps.Polygon({path:area_hospitales,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_hospitales.setMap(map);
		polygon_macrocentro=new google.maps.Polygon({path:area_macrocentro,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_macrocentro.setMap(map);
		polygon_microcentro=new google.maps.Polygon({path:area_microcentro,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_microcentro.setMap(map);
		polygon_pmaderoeste=new google.maps.Polygon({path:area_pmaderoeste,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_pmaderoeste.setMap(map);
		polygon_pmaderooeste=new google.maps.Polygon({path:area_pmaderooeste,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_pmaderooeste.setMap(map);
		polygon_ppatricios=new google.maps.Polygon({path:area_ppatricios,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_ppatricios.setMap(map);
		polygon_retiro=new google.maps.Polygon({path:area_retiro,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_retiro.setMap(map);
		polygon_stelmo=new google.maps.Polygon({path:area_stelmo,geodesic:!0,strokeColor:"#AE1A57",strokeOpacity:.8,strokeWeight:2,fillColor:"#AE1A57",fillOpacity:.4});
		polygon_stelmo.setMap(map);
		var cobertura_status_ok = 'Con cobertura';
		var cobertura_status_error = 'Sin cobertura'
		var cobertura_msg_ok = 'confirmando que tu domicilio cuenta con cobertura para Velocom Fibra y estaremos contactándote a la brevedad.';
		var cobertura_msg_error = 'informando que, por el momento, tu domicilio no cuenta con cobertura para solicitar Velocom Fibra. Igualmente estaremos contactándote a la brevedad, ya que nuestra red se encuentra en constante crecimiento.'
		var address_msg_ok = '<div class="wpcf7-response-inner sent">¡Tu dirección se encuentra en nuestra cobertura!</div>';
		var address_msg_error = '<div class="wpcf7-response-inner warning">Nuestra red se encuentra en constante crecimiento.<br /><strong>Contactanos para analizar tu solicitud de manera personalizada.</strong></div>';
		var button_contact = '<a class="fusion-modal-text-link" data-toggle="modal" data-target=".fusion-modal.contacto-rapido"><span class="menu-text fusion-button button-default button-small">Contactanos</span></a>';
		var input_map_inside = document.getElementById('pac');
		var types = document.getElementById('type-selector');
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input_map_inside);
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);
		var options = {
			types: ['geocode'],
			componentRestrictions: {country:'ar'}
		};
		var gmap1 = new google.maps.places.Autocomplete(jQuery('.pac_input').get(0),options);
		var gmap2 = new google.maps.places.Autocomplete(jQuery('.pac_input').get(1),options);
		google.maps.event.addListener(gmap1,'place_changed', function () {
			var place = gmap1.getPlace();
			resultsOnGmap(place);
		});
		google.maps.event.addListener(gmap2,'place_changed', function () {
			var place = gmap2.getPlace();
			resultsOnGmap(place);
		});
		function resultsOnGmap(place) {
			jQuery('.step2').show();
			marker.setMap(null);
			var newBounds = new google.maps.LatLngBounds(bounds.getSouthWest(),bounds.getNorthEast());
			marker.setPosition(place.geometry.location);
			marker.setMap(map);
			newBounds.extend(place.geometry.location);
			map.fitBounds(newBounds);
			if (
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_almagro) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_barracas) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_boedo) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_chacarita) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_consti) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_hospitales) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_macrocentro) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_microcentro) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_pmaderoeste) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_pmaderooeste) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_ppatricios) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_retiro) || 
				google.maps.geometry.poly.containsLocation(place.geometry.location,polygon_stelmo) ) {
				jQuery('input[name=COBERTURA_STATUS]').val(cobertura_status_ok);
				jQuery('input[name=COBERTURA_MSG]').val(cobertura_msg_ok);
				jQuery('.wpcf7-response-inner').remove();
				jQuery(address_msg_ok).insertAfter('input.controls');
				jQuery(address_msg_ok).insertBefore('#mapvf-cobertura');
				jQuery(button_contact).appendTo('.fusion-title+.wpcf7-response-inner');
				jQuery('.pac_input,#mapvf-cobertura').removeClass('warning').addClass('sent');
			}
			else {
				jQuery('input[name=COBERTURA_STATUS]').val(cobertura_status_error);
				jQuery('input[name=COBERTURA_MSG]').val(cobertura_msg_error);
				jQuery('.wpcf7-response-inner').remove();
				jQuery(address_msg_error).insertAfter('.pac_input');
				jQuery(address_msg_error).insertBefore('#mapvf-cobertura');
				jQuery(button_contact).appendTo('.fusion-title+.wpcf7-response-inner');
				jQuery('.pac_input,#mapvf-cobertura').removeClass('sent').addClass('warning');
			}
			var input_value = jQuery('input.controls.active').val();
			jQuery('input.controls:not(.active)').val(input_value);
			jQuery('input.controls.active').removeClass('active');
		}
		jQuery('input.controls').on('focus',function() {
			jQuery(this).addClass('active');
		});
	}

	// IMPORTANTE
	initMap();

	// CONTACTO - Copiar datos de formulario al escribir
	jQuery('.wpcf7-text').on('input', function(e) {
		var input_name = jQuery(this).attr('name');
		jQuery('input[name='+input_name+']').val(jQuery(this).val());
	});
	jQuery('.wpcf7-select').on('change', function(e) {
		var input_name = jQuery(this).attr('name');
		jQuery('select[name='+input_name+']').val(jQuery(this).val());
		if ( input_name == 'SERVICE' ) {
			jQuery('input[name=TITLE]').val(jQuery(this).val());
		}
	});

	// PRECIOS - Las filas vacías o con menos de 1 caracter agregar clase "blank"
	jQuery('.list-group-item').each(function(i) {
		if ( jQuery(this).text().length < 2 ) {
			jQuery(this).addClass('blank');
		}
	});

	// PRECIOS - Clickear al precionar la columna
	jQuery(document).on('click','.fusion-panel',function(e) {
		jQuery(this).find('.fusion-button').click();
	});

	// MOBILE - Mover link de arrepentimiento
	if ( jQuery(window).width() < 920 ) {
		jQuery('#menu-header-top').hide();
	}
}