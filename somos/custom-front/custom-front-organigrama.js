/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add'+EventListener;
    var removeEventListener = 'remove'+EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont){
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() {pushed = 0;}, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        if (pushed) {
                            (scroller = el.scroller||el).scrollLeft -=
                                newScrollX = (- lastClientX + (lastClientX=e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (- lastClientY + (lastClientY=e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
             })(dragged[i++]);
        }
    }

      
    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));

jQuery(document).ready(function() {

	// CONTENIDOS - Agregar botones de interacción si es un organigrama
	if ( jQuery('.dragscroll').length ) {
		jQuery('<div class="zoom-org"><div class="buttons"><button class="sc-button" id="in"><i class="fas fa-search-plus"></i>Acercar</button><button class="sc-button" id="out"><i class="fas fa-search-minus"></i>Alejar</button><button class="sc-button" id="fullscreen"><i class="fas fa-expand"></i><span>Pantalla completa</span></button></div></div>').insertBefore('.dragscroll');
		jQuery('#in').click(function(e) {
			var str = jQuery('.dragscroll .jOrgChart').css('transform');
			var x = str.split(',');
			var scale = x[0];
			scale = scale.substring(scale.indexOf('(')+1,scale.length);
			var scalein = parseFloat(scale)+0.1;
			jQuery('.dragscroll .jOrgChart').css('transform','scale('+scalein+')');
		});
		jQuery('#out').click(function(e) {
			var str = jQuery('.dragscroll .jOrgChart').css('transform');
			var x = str.split(',');
			var scale = x[0];
			scale = scale.substring(scale.indexOf('(')+1,scale.length);
			var scaleout = parseFloat(scale)-0.1;
			if ( scaleout > .1 ) {
				jQuery('.dragscroll .jOrgChart').css('transform','scale('+scaleout+')');
			}
		});
		jQuery('#fullscreen').click(function(e) {
			if (
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement
			) {
				jQuery('#fullscreen .fas').attr('class','fas fa-expand');
				jQuery('#fullscreen span').text('Pantalla completa');
				jQuery('#post-content').removeClass('fullscreen');
				if ( document.exitFullscreen ) {
					document.exitFullscreen();
				} else if ( document.mozCancelFullScreen ) {
					document.mozCancelFullScreen();
				} else if ( document.webkitExitFullscreen ) {
					document.webkitExitFullscreen();
				} else if ( document.msExitFullscreen ) {
					document.msExitFullscreen();
				}
			}
			else {
				element = jQuery('#post-content').get(0);
				jQuery('#fullscreen .fas').attr('class','fas fa-compress');
				jQuery('#fullscreen span').text('Salir de pantalla completa');
				jQuery('#post-content').addClass('fullscreen');
				if ( element.requestFullscreen ) {
					element.requestFullscreen();
				} else if ( element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if ( element.webkitRequestFullscreen ) {
					element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if ( element.msRequestFullscreen ) {
					element.msRequestFullscreen();
				}
			}
		});
		document.addEventListener('fullscreenchange', exitHandler);
		document.addEventListener('webkitfullscreenchange', exitHandler);
		document.addEventListener('mozfullscreenchange', exitHandler);
		document.addEventListener('MSFullscreenChange', exitHandler);
		function exitHandler() {
			if ( !document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement ) {
				jQuery('#fullscreen .fas').attr('class','fas fa-expand');
				jQuery('#fullscreen span').text('Pantalla completa');
				jQuery('#post-content').removeClass('fullscreen');
			}
		}
		jQuery('.org_nolink').click(function(e) {
			e.preventDefault();
		});
		var scrollPosition = (jQuery('#post-content').width()/2 + jQuery('.dragscroll').width())/2;
		jQuery('.dragscroll').scrollLeft(scrollPosition);
	}

});