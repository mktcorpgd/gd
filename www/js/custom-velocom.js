// Función para normalizar textos
var normalize=(function(){var from="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",to="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",mapping={};for(var i=0,j=from.length;i<j;i++)mapping[from.charAt(i)]=to.charAt(i);return function(str){var ret=[];for(var i=0,j=str.length;i<j;i++){var c=str.charAt(i);if(mapping.hasOwnProperty(str.charAt(i))){ret.push( mapping[c]);}else{ret.push(c);}}return ret.join('').replace(/[^-A-Za-z0-9]+/g,'-').toLowerCase();}})();


// HEADER - Transformar teléfonos con link:
jQuery('.fusion-contact-info-phone-number').each(function(i) {
	var value = jQuery(this).text();
	jQuery(this).html('<a href="tel:'+value+'">'+value+'</a>');
});


// GENERAL - Función para obtener variables GET
jQuery.getPrm = function(name){var results=new RegExp('[?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}else{return results[1]||0;}}


// CONTENIDO - Cambios para páginas de Internet: mostrar/ocultar según variable GET <lugar>
if ( jQuery('body').hasClass('postid-24725') || jQuery('body').hasClass('postid-23640') ) {
	var lugar_name = decodeURIComponent(jQuery.getPrm('lugar'));
	var lugar_class = normalize(lugar_name.toLowerCase());if(lugar_class.slice(-1)=='-'){lugar_class=lugar_class.slice(0,-1);}
	if ( lugar_class == 'null' && window.location.href.indexOf('internet') > 0 ) {
		jQuery('.caption,.price span,#legales').hide();
		
	}
	else {
		jQuery('.map iframe').attr('src','https://www.velocom.com.ar/_velocom/cobertura/'+lugar_class);
		jQuery('.map').show();
		if ( window.location.href.indexOf('corporativo') > 0 ) {
			jQuery('title').html('Internet Corporativo en '+lugar_name+' &mdash; Velocom');
		}
		else {
			jQuery('title').html('Internet para Hogares en '+lugar_name+' &mdash; Velocom');
		}
		jQuery('.not-selected').removeClass('not-selected');
		jQuery('div:not(.not-selected) .'+lugar_class+'+.not').hide();
		jQuery('select[name="LOC"] option.'+lugar_class+',select[name="LOC"] option:contains('+lugar_name+')').attr('selected','selected');
		jQuery('div:not(.not-selected) .'+lugar_class+',.tfs-slider h2 span.'+lugar_class+',.caption span.'+lugar_class+',#legales .panel-body p span.'+lugar_class+',#legales .panel-body p .cur_month,#legales .panel-body p .cur_year,#legales .panel-body p .last_day,.fusion-title.step2,fusion-separator.step2').show();
		if ( lugar_class == 'bariloche' ) {
			jQuery('.hidden-bariloche').hide();
		}
	}
	/*
	if ( lugar_class == 'bahia-blanca' || lugar_class == 'monte-hermoso' ) {
		var custom_tel = '+54291-571-0383';
		var custom_mail = 'bahia.blanca@velocom.com.ar';
		jQuery('.fusion-secondary-header span.fusion-contact-info-phone-number > a').text(custom_tel).attr('href','tel:'+custom_tel);
		jQuery('.fusion-secondary-header span.fusion-contact-info-email-address > a').text(custom_mail).attr('href','mailto:'+custom_mail);
		jQuery('input[name="RESP"]').val(custom_mail)
	}
	else if ( lugar_class == 'mar-del-plata' || lugar_class == 'chapadmalal' ) {
		var custom_tel = '+54223-540-8251';
		var custom_mail = 'mardelplata@velocom.com.ar';
		jQuery('.fusion-secondary-header span.fusion-contact-info-phone-number > a').text(custom_tel).attr('href','tel:'+custom_tel);
		jQuery('.fusion-secondary-header span.fusion-contact-info-email-address > a').text(custom_mail).attr('href','mailto:'+custom_mail);
		jQuery('input[name="RESP"]').val(custom_mail)
	}
	else if ( lugar_class == 'colon-entre-rios' || lugar_class == 'concepcion-del-uruguay' ) {
		var custom_tel = '+543447-50-9602';
		jQuery('.fusion-secondary-header span.fusion-contact-info-phone-number > a').text(custom_tel).attr('href','tel:'+custom_tel);
	}*/
}


// CONTENIDO - Si cambia la localidad recargar con información respectiva
jQuery('select[name*=LOC]').change(function() {
	if ( jQuery('body').hasClass('home') || jQuery('body').hasClass('postid-24725') || jQuery('body').hasClass('postid-23640') ) {
		if ( !jQuery('body').hasClass('modal-open') && jQuery(this).val() != '' ) {
			jQuery('#cargando-btn').trigger('click');
			var lugar_name = jQuery(this).val();
			var lugar_class = normalize(lugar_name);
			if(lugar_class.slice(-1)=='-'){lugar_class=lugar_class.slice(0,-1);}
			setTimeout(function(){
				if ( jQuery('body').hasClass('home') ) {
					document.location = 'https://www.velocom.com.ar/internet/?lugar='+lugar_name;
				}
				else if ( window.location.href.indexOf('?') > -1 ) {
					var url_parts = window.location.href.split('?');
					var main_url = url_parts[0];
					document.location = main_url+'?lugar='+lugar_name;
				}
				else {
					document.location = window.location.href+'?lugar='+lugar_name;
				}
			},500);
		}
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