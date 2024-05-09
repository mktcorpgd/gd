/*--------------------------------------------------------------
Image Preloader
--------------------------------------------------------------*/

jQuery( function( $ ) {
	$( '.preload' ).hide();
} );

var i = 0;
var int = 0;
jQuery( window ).bind( 'load', function( $ ) {
	var int = setInterval( 'doThis( i )', 100 );
} );

function doThis() {
	var images = jQuery( '.preload' ).length;
	if ( i >= images ) {
		clearInterval( int );
	}
	jQuery( '.preload:hidden ' ).eq( 0 ).fadeIn( 400 );
	i++;
}

jQuery( document ).ready( function( $ ) {

	'use strict';
	
	/*--------------------------------------------------------------
	Screen size class
	--------------------------------------------------------------*/

	function gpScreenSizeClass() {
	
		if ( $( window ).width() <= 767 ) {
		
			$( 'body' ).addClass( 'gp-mobile' ).removeClass( 'gp-desktop' ).removeClass( 'gp-tablet-portrait' ).removeClass( 'gp-tablet-landscape' );
			
		} else if ( $( window ).width() <= 982 ) {
			
			$( 'body' ).addClass( 'gp-tablet-portrait' ).removeClass( 'gp-desktop' ).removeClass( 'gp-tablet-landscape' ).removeClass( 'gp-mobile' );
			
		} else if ( $( window ).width() <= 1082 ) {
			
			$( 'body' ).addClass( 'gp-tablet-landscape' ).removeClass( 'gp-desktop' ).removeClass( 'gp-tablet-portrait' ).removeClass( 'gp-mobile' );	
		
		} else {
			
			$( 'body' ).addClass( 'gp-desktop' ).removeClass( 'gp-tablet-landscape' ).removeClass( 'gp-tablet-portrait' ).removeClass( 'gp-mobile' );
		
		}
		
	}
	
	gpScreenSizeClass();
	$( window ).resize( gpScreenSizeClass );
	
	
	/*--------------------------------------------------------------
	Retina images
	--------------------------------------------------------------*/
	
	if ( $( 'body' ).hasClass( 'gp-retina' ) ) {
		window.devicePixelRatio >= 2 && $( '.post-thumbnail img' ).each( function() {
			$( this ).attr( { src: $( this ).attr( 'data-rel' ) } );
		} );
	}
	
	
	/*--------------------------------------------------------------
	Remove "|" from BuddyPress item options
	--------------------------------------------------------------*/

	$( '.item-options' ).contents().filter( function() {
		return this.nodeType == 3;
	} ).remove();

	
	/*--------------------------------------------------------------
	Slide up/down header mobile navigation
	--------------------------------------------------------------*/

	function gpHeaderMobileNav() {

		$( '#mobile-nav-button' ).toggle( function() {
			$( '#mobile-nav' ).stop().slideDown().removeClass( 'auto-height' );
		}, function() {
			$( '#mobile-nav' ).stop().slideUp().removeClass( 'auto-height' );
			$( '#mobile-nav-button' ).removeClass( 'gp-active' );
		} );
		
	}
	
	gpHeaderMobileNav();


	/*--------------------------------------------------------------
	Slide up/down header mobile dropdown menus
	--------------------------------------------------------------*/

	$( '#mobile-nav .menu li' ).each( function() {
		if ( $( this ).find( 'ul' ).length > 0 ) {
			$( '<i class="mobile-dropdown-icon" />' ).insertAfter( $( this ).children( ':first' ) );		
		}		
	} );
	
	function gpHeaderMobileTopNav() {

		$( '#mobile-nav ul > li' ).each( function() {
			
			var navItem = $( this );
			
			if ( $( navItem ).find( 'ul' ).length > 0 ) {	
		
				$( navItem ).children( '.mobile-dropdown-icon' ).toggle( function() {
					$( navItem ).addClass( 'gp-active' );
					$( navItem ).children( '.sub-menu' ).stop().slideDown()
					$( '#mobile-nav' ).addClass( 'auto-height' );
				}, function() {
					$( navItem ).removeClass( 'gp-active' );
					$( navItem ).children( '.sub-menu' ).stop().slideUp();
				} );
		
			}
					
		} );
	
	}
	
	gpHeaderMobileTopNav();
	
	
	/*--------------------------------------------------------------
	prettyPhoto lightbox
	--------------------------------------------------------------*/

	if ( ! $( 'body' ).hasClass( 'gp-lightbox-disabled' ) ) {
		$( 'a[rel^="prettyPhoto"], a[data-rel^="prettyPhoto"]' ).prettyPhoto( {
			hook: 'data-rel',
			theme: 'pp_default',
			deeplinking: false,
			social_tools: '',
			default_width: '768'
		} );
	}
	
	
	/*--------------------------------------------------------------
	Image Hover
	--------------------------------------------------------------*/

	$( '.lightbox-hover' ).css( { 'opacity':'0' } );
	$( 'a[data-rel^="prettyPhoto"]' ).hover( 
		function() {
			$( this ).find( '.lightbox-hover' ).stop().fadeTo( 750, 1 );
		},
		function() {
			$( this ).find( '.lightbox-hover' ).stop().fadeTo( 750, 0 );
		}
	 );


	/*--------------------------------------------------------------
	Back to top button
	--------------------------------------------------------------*/

	if ( ! $( 'body' ).hasClass( 'gp-no-back-to-top' ) ) {	
		$().UItoTop({ 
			containerID: 'gp-to-top',
			text: '<i class="fa fa-chevron-up"></i>',
			scrollSpeed: 600
		});
	}


	/*--------------------------------------------------------------
	Prevent Empty Search - Thomas Scholz http://toscho.de 
	--------------------------------------------------------------*/

	$.fn.preventEmptySubmit = function( options ) {
		var settings = {
			inputselector: '#searchbar',
			msg          : ghostpool_script.emptySearchText
		};
		if ( options ) {
			$.extend( settings, options );
		}
		this.submit( function() {
			var s = $( this ).find( settings.inputselector );
			if ( !s.val() ) {
				alert( settings.msg );
				s.focus();
				return false;
			}
			return true;
		} );
		return this;
	};

	$( '#searchform' ).preventEmptySubmit();

	
	/*--------------------------------------------------------------
	Switch navigation position if near edge
	--------------------------------------------------------------*/

	function gpSwitchNavPosition() {
		$( '#nav .menu > li' ).each( function() {
			$( this ).on( 'mouseenter mouseleave', function( e ) {
				if ( $( this ).find( 'ul' ).length > 0 ) {
					var menuElement = $( 'ul:first', this ),
						pageWrapper = $( '#header' ),
						pageWrapperOffset = pageWrapper.offset(),
						menuOffset = menuElement.offset(),
						menuLeftOffset = menuOffset.left - pageWrapperOffset.left,
						pageWrapperWidth = pageWrapper.width(),
						menuWidth = menuElement.width() + 200,
						isEntirelyVisible = ( menuLeftOffset + menuWidth <= pageWrapperWidth );	
					if ( ! isEntirelyVisible ) {
						$( this ).addClass( 'gp-nav-edge' );
					} else {
						$( this ).removeClass( 'gp-nav-edge' );
					}
				}   
			} );
		} );	
	}

	gpSwitchNavPosition();
	$( window ).resize( gpSwitchNavPosition )


	/*--------------------------------------------------------------
	Resize header upon scrolling
	--------------------------------------------------------------*/

	function gpResizeHeader() {

		var headerHeight = $( '#header' ).outerHeight();
		
		$( '#gp-fixed-padding' ).css( 'height', headerHeight + 30 );

		$( window ).scroll( function() {
		
			if ( $( 'body' ).hasClass( 'gp-fixed-header' ) ) {

				if ( $( document ).scrollTop() > 1 ) {
				
					$( 'body' ).addClass( 'gp-scrolling' );
					$( '#gp-fixed-padding' ).css( 'position', 'relative' );

				} else {
				
					$( 'body' ).removeClass( 'gp-scrolling' );
					$( '#gp-fixed-padding' ).css( 'position', 'absolute' );
				
				}
			
			} else {
			
				$( 'body' ).removeClass( 'gp-scrolling' );
				$( '#gp-fixed-padding' ).css( 'position', 'absolute' );
			
			}

		});				

	}

	gpResizeHeader();
	$( window ).resize( gpResizeHeader );


	/*--------------------------------------------------------------
	Login box
	--------------------------------------------------------------*/

	// Submit forms
	var formArray = ['.gp-login-form', '.gp-lost-password-form', '.gp-register-form'];
	
	$.each( formArray, function( index, value ) {
	
		$( value ).submit( function() {
			var form = $( this ); 
			form.find( '.gp-login-results' ).html( '<div class="gp-verify-form">' + $( '.gp-login-results' ).data( 'verify' ) + '</div>' ).fadeIn();
			var input_data = form.serialize();
			$.ajax({
				type: 'POST',
				url:  ghostpool_script.url,
				data: input_data,
				success: function( msg ) {
					
					if ( $( '#content .gp-login-form .user_login' ).length && $( '#content .gp-login-form .user_login' ).val().length > 0 ) {
					
						window.location.replace( ghostpool_script.loginRedirect );	
	
					} else {
						
						form.find( '.gp-verify-form' ).remove();
						
						$( msg ).appendTo( form.find( '.gp-login-results' ) ).fadeIn( 'slow' );
						
						if ( $( '.gp-register-form' ).find( '.gp-login-results .gp-success' ) ) {						
							$( '.gp-register-form' ).find( 'p, .gglcptch, .wp-submit' ).hide();
						}
						
					}
					
				},
				error: function( xhr, status, error ) {
				
					// Reset captcha on error
					if ( $( '.gglcptch > div' ).length > 0 ) {
						grecaptcha.getResponse();
						grecaptcha.reset();
					}
										
					form.find( '.gp-verify-form' ).remove();
					
					$( '<div>' ).html( xhr.responseText ).appendTo( form.find( '.gp-login-results' ) ).fadeIn( 'slow' );
					
				}
			});
			return false;
		});
	
	});	
	
	// Switch to login form when clicking links
	$( '.gp-login-link' ).click( function( event ) {
		event.preventDefault();
		$( '.gp-login-form-wrapper' ).show();
		$( '.gp-lost-password-form-wrapper, .gp-social-login-form-wrapper' ).hide();
		$( '.gp-login-results > div' ).remove();
	});
									
	// Switch to lost password form when clicking link								
	$( '.gp-lost-password-link' ).click( function( event ) {
		event.preventDefault();
		$( '.gp-lost-password-form-wrapper' ).show();
		$( '.gp-login-form-wrapper, .gp-social-login-form-wrapper' ).hide();
		$( '.gp-login-results > div' ).remove();
	});
	
	// Close reset success message	
	$( '#gp-close-reset-message' ).click( function() {
		$( '#gp-reset-message' ).remove();
	});
		
});