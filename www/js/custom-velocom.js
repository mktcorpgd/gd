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
//var site_name = jQuery("meta[property='og:site_name']").attr("content");
console.log(jQuery("meta[property='og:site_name']").attr("content"));
console.log(lugar_class);
if ( jQuery('body').hasClass('home') || jQuery('body').hasClass('single-avada_portfolio') ) {
	if ( lugar_class == 'null' ) {
		jQuery('.caption,.price span,#legales').hide();
	}
	else {
		if ( jQuery('.map iframe').length ) {
			jQuery('.map iframe').attr('src','https://www.velocom.com.ar/_velocom/cobertura/'+lugar_class);
			jQuery('.map').show();	
		}
		if ( jQuery('body').hasClass('postid-24725') ) {
			jQuery('title').html('Internet para Hogares en '+lugar_name+' &mdash; '+site_name);
		}
		else if ( jQuery('body').hasClass('postid-23640') ) {
			jQuery('title').html('Internet Corporativo en '+lugar_name+' &mdash; '+site_name);
		}
		else if ( jQuery('body').hasClass('postid-25544') ) {
			jQuery('title').html('Internet por Fibra Óptica en '+lugar_name+' &mdash; '+site_name);
		}
		jQuery('.not-selected').removeClass('not-selected');
		jQuery('div:not(.not-selected) .'+lugar_class+'+.not').hide();
		jQuery('select[name="LOC"] option.'+lugar_class+',select[name="LOC"] option:contains('+lugar_name+')').attr('selected','selected');
		jQuery('div:not(.not-selected) .'+lugar_class+',.tfs-slider h2 span.'+lugar_class+',.caption span.'+lugar_class+',#legales .panel-body p span.'+lugar_class+',#legales .panel-body p .cur_month,#legales .panel-body p .cur_year,#legales .panel-body p .last_day,.step2').show();
		if ( lugar_class == 'bariloche' ) {
			jQuery('.hidden-bariloche').hide();
		}
	}
}


// CONTENIDO - Si cambia la localidad recargar con información respectiva
jQuery('select[name*=LOC]').change(function() {
	var lugar_name = jQuery(this).val();
	if ( jQuery('body').hasClass('home') || jQuery('body').hasClass('single-avada_portfolio') ) {
		if ( !jQuery('body').hasClass('modal-open') || lugar_name != '' ) {
			jQuery('#cargando-btn').trigger('click');
			setTimeout(function(){
				document.location = window.location.href+'?lugar='+lugar_name;
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