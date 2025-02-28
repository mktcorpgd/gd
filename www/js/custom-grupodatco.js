jQuery(document).ready(function() {
	const windowWidth = jQuery(window).width();

	// Mobile - Trasladar elementos del menú
	if (windowWidth < 920) {
		jQuery('.mobile-hidden>ul>li').appendTo('.mobile-append .sub-menu');
	}

	// Escritorio - Mostrar descripción de pilares al pasar el mouse
	if (windowWidth > 920) {
		jQuery('.pilares .fusion_builder_column_inner .fusion-column-wrapper').hover(
			function() {
				jQuery(this).find('.fusion-text').css('height', '70px');
			}, function() {
				jQuery(this).find('.fusion-text').css('height', '0');
			}
		);
	}

	// Datos de países
	const countryData = {
		'ar': { name: 'Argentina', url: 'ar' },
		'br': { name: 'Brasil', url: 'br' },
		'cl': { name: 'Chile', url: 'cl' },
		'mx': { name: 'México', url: 'mx' },
		'pe': { name: 'Perú', url: 'pe' },
		'pr': { name: 'Puerto Rico', url: 'pr' },
		'uy': { name: 'Uruguay', url: 'uy' }
	};

	// Función para actualizar enlaces y elementos según el país
	function updateCountryElements(countryCode) {
		const country = countryData[countryCode];
		if (!country) return;

		const flagUrl = `/wp-content/uploads/flag-${country.url}.svg`;

		jQuery('.fusion-logo-link, .country-flag.menu-item > a').attr('href', `/${country.url}`);
		jQuery('.country-flag.menu-item.fusion-dropdown-menu > a > span > img').attr('src', flagUrl);
		jQuery('.country-flag.menu-item.fusion-dropdown-menu').attr('title', country.name);
		jQuery('.country-flag.menu-item > a > span.menu-text')
			.html(`<img src="${flagUrl}" alt="${country.name}" /><span> ${country.name}</span>`);

		// Agregar parámetro de país a enlaces
		jQuery('a.fusion-button:not(.fusion-modal-text-link):not([href^="#"]), .menu-item:not(.country-flag):not(.country-flag-sub) a:not(.fusion-modal-text-link):not([href^="#"])')
			.each(function() {
				const curhref = jQuery(this).attr('href');
				jQuery(this).attr('href', curhref.includes('?') ? `${curhref}&ctry=${country.url}` : `${curhref}?ctry=${country.url}`);
			});
	}

	// Detectar país por URL y actualizar elementos
	const pathCountry = window.location.pathname.replace(/^\/|\/$/g, '');
	if (countryData[pathCountry]) {
		updateCountryElements(pathCountry);

		// Caso especial para LinkedIn en Chile
		if (pathCountry === 'cl') {
			jQuery('.fusion-social-network-icon[href*="linkedin.com"]').attr('href', 'https://linkedin.com/company/grupodatcocl');
		}
	}

	// Si hay parámetro "ctry" en la URL
	const urlParams = new URLSearchParams(window.location.search);
	const paramCountry = urlParams.get('ctry');
	if (paramCountry && countryData[paramCountry]) {
		updateCountryElements(paramCountry);
	}

});