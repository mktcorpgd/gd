<?php


// JS/CSS - Customización para front-end
function cssjs_to_front() {
	wp_enqueue_style('theme-style','/wp-content/themes/buddy-child/style.css',array(),null);
	wp_enqueue_style('brand_gd-fonts','https://use.typekit.net/egy2buz.css',array(),null);
	wp_enqueue_style('custom-front-style',plugins_url('custom-front.css',__FILE__),array(),time());
	wp_enqueue_script('custom-front-script',plugins_url('custom-front.js',__FILE__),array(),time());
	wp_enqueue_script('fa','https://kit.fontawesome.com/dffe44e790.js',array(),null);
	wp_enqueue_script('mfp','https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',array(),null);
	// Si es para enviar tarjetas:
	if ( is_page(18546) || is_page(24225) ) {
		wp_enqueue_style('custom-front-tarjetas-style',plugins_url('custom-front-tarjetas.css',__FILE__),array(),null);
		wp_enqueue_script('custom-front-tarjetas-script',plugins_url('custom-front-tarjetas.js',__FILE__),array(),null);
	}
	// Si es para dar altas/bajas:
	if ( is_page(40285) ) {
		wp_enqueue_script('custom-front-altas-script',plugins_url('custom-front-altas.js',__FILE__),array(),time());
	}
	// Si es para enviar un caso:
	if ( is_page(29948) ) {
		wp_enqueue_script('custom-front-casos',plugins_url('custom-front-casos.js',__FILE__),array(),null);
	}
	// Si es un organigrama:
	if ( in_category('organigramas') ) {
		wp_enqueue_style('custom-front-organigrama-style',plugins_url('custom-front-organigrama.css',__FILE__),array(),time());
		wp_enqueue_script('custom-front-organigrama-script',plugins_url('custom-front-organigrama.js',__FILE__),array(),null);
	}
	/* Si es 40 GD:
	if ( is_page(31537) || is_page(33851) ) {
		wp_enqueue_script('script-countdown',plugins_url('script-countdown.js',__FILE__),array(),time());
		//wp_enqueue_script('script-cookies',plugins_url('script-cookies.js',__FILE__),array(),null);
	}*/
}
add_action('get_footer','cssjs_to_front');


// JS/CSS - Quitar archivos embebidos
function dequeue_styles_scripts() {
	wp_dequeue_style('birthdays-css');
	wp_deregister_style('birthdays-css');
	wp_dequeue_style('contact-form-7');
	wp_deregister_style('contact-form-7');
	wp_dequeue_style('fontawesome');
	wp_deregister_style('fontawesome');
	wp_dequeue_style('jquery-style');
	wp_deregister_style('jquery-style');
	wp_dequeue_style('select2css');
	wp_deregister_style('select2css');
	wp_dequeue_style('theme-reset');
	wp_deregister_style('theme-reset');
	wp_dequeue_style('Awesome-Font-5-css');
	wp_deregister_style('Awesome-Font-5-css');
	wp_dequeue_script('flexslider');
	wp_deregister_script('flexslider');
	wp_dequeue_script('touchswipe');
	wp_deregister_script('touchswipe');
	wp_dequeue_script('birthdays-script');
	wp_deregister_script('birthdays-script');
	wp_dequeue_script('wp-embed');
	wp_deregister_script('wp-embed');
	wp_dequeue_style('ghostpool-style');
	wp_deregister_style('ghostpool-style');
	wp_dequeue_script('ghostpool-toggle-init');
	wp_deregister_script('ghostpool-toggle-init');
	wp_dequeue_style('colorbox-theme1.css');
	wp_deregister_style('colorbox-theme1.css');
	wp_dequeue_style('colorbox-theme2.css');
	wp_deregister_style('colorbox-theme2.css');
	wp_dequeue_style('colorbox-theme3.css');
	wp_deregister_style('colorbox-theme3.css');
	wp_dequeue_style('colorbox-theme4.css');
	wp_deregister_style('colorbox-theme4.css');
	wp_dequeue_style('colorbox-theme5.css');
	wp_deregister_style('colorbox-theme5.css');
	wp_dequeue_style('colorbox-theme7.css');
	wp_deregister_style('colorbox-theme7.css');
	wp_dequeue_style('font-awesome.min.css');
	wp_deregister_style('font-awesome.min.css');
	wp_dequeue_style('icons-effects.css');
	wp_deregister_style('icons-effects.css');
	wp_dequeue_style('gridgallerypro-embedded.css');
	wp_deregister_style('gridgallerypro-embedded.css');
	wp_dequeue_style('photobox.css');
	wp_deregister_style('photobox.css');
	wp_dequeue_style('prettyPhoto.css');
	wp_deregister_style('prettyPhoto.css');
	wp_dequeue_style('lightSlider.css');
	wp_deregister_style('lightSlider.css');
	wp_dequeue_style('jquery.flex-images.css');
	wp_deregister_style('jquery.flex-images.css');
	wp_dequeue_style('loaders.css');
	wp_deregister_style('loaders.css');	
}
add_action('wp_enqueue_scripts','dequeue_styles_scripts',PHP_INT_MAX);


// JS/CSS - Google Analytics
function ga_script() { ?>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-43090042-19"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js',new Date());
	gtag('config','UA-43090042-19');
</script>
<?php
}
add_action('wp_head','ga_script',10);


// HEAD - Agregar código en el head
function add_to_head() {
	if ( is_front_page() ) {
		echo '<script>setTimeout(function(){window.location.reload(1);},900000);</script>';
	}
	$brand_name = 'Grupo Datco';
	$brand_color = '#0E316E';
	$stylesheet_directory = get_stylesheet_directory_uri();
	echo '
	<link id="branding_favicon" rel="shortcut icon" href="'.$stylesheet_directory.'/favicon/favicon.ico">
	<link rel="apple-touch-icon" sizes="180x180" href="'.$stylesheet_directory.'/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="'.$stylesheet_directory.'/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="'.$stylesheet_directory.'/favicon/favicon-16x16.png">
	<link rel="manifest" href="'.$stylesheet_directory.'/favicon/site.webmanifest">
	<link rel="mask-icon" href="'.$stylesheet_directory.'/favicon/safari-pinned-tab.svg" color="'.$brand_color.'">
	<meta name="apple-mobile-web-app-title" content="'.$brand_name.'">
	<meta name="application-name" content="'.$brand_name.'">
	<meta name="msapplication-TileColor" content="'.$brand_color.'">
	<meta name="theme-color" content="'.$brand_color.'">';
}
add_action('wp_head','add_to_head');


// COMENTARIOS - Deshabilitar según ID de categoría
function st_check_for_closed() {
	global $post;
	$my_post_cat = wp_get_post_categories($post->ID);
	$disabled_cat = array('1491','2370','2662');
	$my_result = array_intersect($my_post_cat,$disabled_cat);
	if ( empty($my_result) ) {
		return;
	}
	else {
		add_filter('comments_open','st_close_comments_on_category',10,2);
		add_action('wp_enqueue_scripts','st_deregister_reply_js');
	}
}
function st_deregister_reply_js() {
	wp_deregister_script('comment-reply');
}
function st_close_comments_on_category($open,$post_id) {
	$open = false;
}
add_action( 'the_post','st_check_for_closed' );


// CONTENIDOS - Reemplazar &nbsp; por un espacio real
function replace_content($content) {
	$content = htmlentities($content,null,'utf-8');
	$content = str_replace('&nbsp;',' ',$content);
	$content = html_entity_decode($content);
return $content;
}
add_filter('the_content','replace_content',999999999);


// FORMULARIOS - Agregar entrada a partir del envío
function filter_wpcf7_posted_data( $posted_data ) {
	$posted_data['CATSCASO'] = explode(',',$posted_data['CATSCASO']);
	$postdate = $posted_data['YEARCASO'].'-01-01 12:00:00';
	$args = array(
		'post_date' => $postdate,
		'post_type' => 'post',
		'post_status' => 'draft',
		'post_title' => esc_html($posted_data['TITCASO']),
		'post_content' => $posted_data['CONTCASO'],
		'post_category' => $posted_data['CATSCASO']
	);
	$post_id = wp_insert_post($args);
	return $posted_data;
};
add_filter('wpcf7_posted_data','filter_wpcf7_posted_data',10,1);


// FORMULARIOS - Cambiar cantidad de caracteres permitidos en base de datos
function vsz_display_character_count_callback($count) {
	return 999999;
}
add_filter('vsz_display_character_count','vsz_display_character_count_callback',10,1);


// GENERAL - Agregar clase según el rol del usuario
add_filter('body_class','add_role_to_body');
function add_role_to_body($classes) {
	$current_user = new WP_User(get_current_user_id());
	$user_role = array_shift($current_user->roles);
	$classes[] = 'role-'.$user_role;
	return $classes;
}


// GENERAL - Deshabilitar imágenes responsivas
add_filter('max_srcset_image_width',create_function('','return 1;'));


// GENERAL - Deshabilitar emojis
function desactiva_emojis() {
	remove_action('wp_head','print_emoji_detection_script',7);
	remove_action('admin_print_scripts','print_emoji_detection_script');
	remove_action('wp_print_styles','print_emoji_styles');
	remove_action('admin_print_styles','print_emoji_styles');
	remove_filter('the_content_feed','wp_staticize_emoji');
	remove_filter('comment_text_rss','wp_staticize_emoji');
	remove_filter('wp_mail','wp_staticize_emoji_for_email');
	add_filter('tiny_mce_plugins','desactiva_emojis_tinymce');
}
add_action('init','desactiva_emojis');
function desactiva_emojis_tinymce($plugins) {
	if ( is_array($plugins) ) {
		return array_diff($plugins,array('wpemoji'));
	}
	else {
		return array();
	}
} 


// GENERAL - Recortar longitud de extractos y cambiar caracteres de elipsis
function set_length_excerpts($length) {
	if ( is_admin() ) {
		return $length;
	}
	return 30;
}
add_filter('excerpt_length','set_length_excerpts',999);
function new_excerpt_more($more) {
	return '...';
}
add_filter('excerpt_more','new_excerpt_more');


// USUARIOS - Shortcode de tarjeta digital
function show_digital_bcard_func($atts) {
	$current_user = wp_get_current_user();
	$toreplace = array(' ','.');
	$replaced = array('-','-');
	$bcard_usr = str_replace($toreplace,$replaced,esc_html($current_user->user_login));
	$bcard_url_gd = 'https://qr.gdat.co/'.$bcard_usr;
	$bcard_url_headers_gd = @get_headers($bcard_url_gd);
	if( !$bcard_url_headers_gd || strpos($bcard_url_headers_gd[0],'400 Bad Request') !== false || strpos($bcard_url_headers_gd[0],'404 Not Found') !== false ) {
		return '<h4><i class="far fa-unlink"></i><span>¿No tenés tarjeta digital?</span></h4><a href="/marketing/recursos/tarjeta-digital/" class="sc-button blue">Solicitar ahora</a>';
	}
	else {
		$bcard_gd = '<a class="bcard" href="'.$bcard_url_gd.'" target="_blank"><img src="https://qr.gdat.co/d/'.$bcard_usr.'/20/H/3" alt="Mi tarjeta digital" /><input class="url_public_bcard_hidden hidden" type="text" value="'.$bcard_url_gd.'" /><span class="url_public_bcard" >'.preg_replace('#^https?://#','',$bcard_url_gd).'</span></a><a class="sc-button-social" href="https://api.whatsapp.com/send?text='.$bcard_url_gd.'" target="_blank"><i class="fab fa-whatsapp"></i></a><a class="sc-button-social" href="https://www.facebook.com/sharer/sharer.php?u='.$bcard_url_gd.'" target="_blank"><i class="fab fa-facebook"></i></a><a class="sc-button-social" href="mailto:?subject=Mi tarjeta digital&body='.$bcard_url_gd.'" target="_blank"><i class="fas fa-envelope"></i></a><a class="sc-button-social" href="https://qr.gdat.co/l/businesscard/template/vCard.vcf?id='.$bcard_usr.'&d=1&addvcard="><i class="fas fa-download"></i></a><a class="sc-button-social" href="'.$bcard_url_gd.'" target="_blank"><i class="fas fa-external-link"></i></a>';
		$bcard_url_s = 'https://qr.gdat.co/'.$bcard_usr.'-s';
		$bcard_url_headers_s = @get_headers($bcard_url_s);
		if( !$bcard_url_headers_s || strpos($bcard_url_headers_s[0],'400 Bad Request') !== false || strpos($bcard_url_headers_s[0],'404 Not Found') !== false ) {
			$bcard_s = '';
		}
		else {
			$bcard_s = '<a class="bcard silica" href="'.$bcard_url_s.'" target="_blank"><img src="https://qr.gdat.co/d/'.$bcard_usr.'-s/20/H/3" alt="Mi tarjeta digital" /><input class="url_public_bcard_hidden hidden" type="text" value="'.$bcard_url_s.'" /><span class="url_public_bcard" >'.preg_replace('#^https?://#','',$bcard_url_s).'</span></a><a class="sc-button-social" href="https://api.whatsapp.com/send?text='.$bcard_url_s.'" target="_blank"><i class="fab fa-whatsapp-square"></i></a><a class="sc-button-social" href="https://www.facebook.com/sharer/sharer.php?u='.$bcard_url_s.'" target="_blank"><i class="fab fa-facebook-square"></i></a><a class="sc-button-social" href="mailto:?subject=Mi tarjeta digital&body='.$bcard_url_s.'" target="_blank"><i class="fas fa-envelope-square"></i></a><br /><a class="sc-button blue inline" href="https://qr.gdat.co/l/businesscard/template/vCard.vcf?id='.$bcard_usr.'-s&d=1&addvcard="><i class="fas fa-download"></i>Descargar</a><a class="sc-button blue inline" href="'.$bcard_url_s.'" target="_blank"><i class="fas fa-external-link"></i>Ver</a>';
		}
		$bcard_url_v = 'https://qr.gdat.co/'.$bcard_usr.'-v';
		$bcard_url_headers_v = @get_headers($bcard_url_v);
		if( !$bcard_url_headers_v || strpos($bcard_url_headers_v[0],'400 Bad Request') !== false || strpos($bcard_url_headers_v[0],'404 Not Found') !== false ) {
			$bcard_v = '';
		}
		else {
			$bcard_v = '<a class="bcard velocom" href="'.$bcard_url_v.'" target="_blank"><img src="https://qr.gdat.co/d/'.$bcard_usr.'-v/20/H/3" alt="Mi tarjeta digital" /><input class="url_public_bcard_hidden hidden" type="text" value="'.$bcard_url_v.'" /><span class="url_public_bcard" >'.preg_replace('#^https?://#','',$bcard_url_v).'</span></a><a class="sc-button-social" href="https://api.whatsapp.com/send?text='.$bcard_url_v.'" target="_blank"><i class="fab fa-whatsapp-square"></i></a><a class="sc-button-social" href="https://www.facebook.com/sharer/sharer.php?u='.$bcard_url_v.'" target="_blank"><i class="fab fa-facebook-square"></i></a><a class="sc-button-social" href="mailto:?subject=Mi tarjeta digital&body='.$bcard_url_v.'" target="_blank"><i class="fas fa-envelope-square"></i></a><br /><a class="sc-button blue inline" href="https://qr.gdat.co/l/businesscard/template/vCard.vcf?id='.$bcard_usr.'-v&d=1&addvcard="><i class="fas fa-download"></i>Descargar</a><a class="sc-button blue inline" href="'.$bcard_url_v.'" target="_blank"><i class="fas fa-external-link"></i>Ver</a>';
		}
	return $bcard_gd.$bcard_s.$bcard_v.'<br /><a class="sc-button blue" href="/marketing/recursos/tarjeta-digital/">Solicitar nueva</a>';
	}
}
add_shortcode('digital_bcard','show_digital_bcard_func');


// USUARIOS - Shortcodes de nombre, apellido y mail
function show_usr_fname_func($atts) {
	$current_user = wp_get_current_user();
	$usr_fname = '<span class="hidden" id="usrfname">'.esc_html($current_user->user_firstname).'</span>';
	return $usr_fname;
}
add_shortcode('usr_fname','show_usr_fname_func');
function show_usr_lname_func($atts) {
	$current_user = wp_get_current_user();
	$usr_lname = '<span class="hidden" id="usrlname">'.esc_html($current_user->user_lastname).'</span>';
	return $usr_lname;
}
add_shortcode('usr_lname','show_usr_lname_func');
function show_usr_email_func($atts) {
	$current_user = wp_get_current_user();
	$usr_email = '<span class="hidden" id="usremail">'.esc_html($current_user->user_email).'</span>';
	return $usr_email;
}
add_shortcode('usr_email','show_usr_email_func');


// MENÚ - Agregar opción de login/logout al final
add_filter('wp_nav_menu_items','add_login_logout_link',10,2);
function add_login_logout_link($items,$args) {
	ob_start();
	wp_loginout('index.php');
	$loginoutlink = ob_get_contents();
	ob_end_clean();
	$items .= '<li class="log">'.$loginoutlink.'</li>';
	return $items;
}


// MENÚ - Generación de shortcodes
function custom_menu_shortcode($atts) {
	$atts = array_change_key_case((array)$atts,CASE_LOWER);
	$atts = array_map('sanitize_text_field',$atts);
	$menu_name = $atts['name'];
	$menu_class = $atts['class'];
	return wp_nav_menu(array(
		'menu' => esc_attr($menu_name),
		'menu_class' => 'menu '.esc_attr($menu_class),
		'echo' => false)
	);
}
add_shortcode('print-menu','custom_menu_shortcode');