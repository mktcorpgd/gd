function scrollHeaderTransp(){jQuery(window).scrollTop()<20?jQuery(".fusion-header-wrapper").addClass("on-top"):jQuery(".fusion-header-wrapper").removeClass("on-top")}document.addEventListener("wpcf7submit",(function(e){jQuery(".wpcf7.sending .wpcf7-submit").val(jQuery(".wpcf7.sending .wpcf7-submit").attr("name")).removeClass("sending").removeAttr("readonly"),jQuery(".wpcf7.sending input,.wpcf7.sending select,.wpcf7.sending textarea").removeClass("sending"),jQuery(".wpcf7").removeClass("sending"),jQuery(".wpcf7-submit").trigger("blur")}),!1),jQuery(document).ready((function(){var e,t,n,o=jQuery("html").attr("lang").substring(0,2);if(jQuery(".landing").length&&jQuery(".fusion-wrapper").addClass("landing"),jQuery(".post-content .header-transparent").length&&jQuery("#wrapper").addClass("header-transparent"),jQuery(".post-content .window").length&&jQuery("#wrapper").addClass("window"),scrollHeaderTransp(),jQuery(window).scroll((function(){scrollHeaderTransp()})),jQuery(".no-partners").length&&jQuery("#wrapper").addClass("no-partners"),jQuery(".no-footer-menus").length&&jQuery("#wrapper").addClass("no-footer-menus"),jQuery("#sliders-container").text().trim().length>1&&jQuery("#sliders-container").addClass("has-content"),jQuery(document).on("click","#prensa .fusion-post-content.post-content>h2>a,#prensa span.meta-tags a",(function(e){window.open(this.href,"_blank"),e.preventDefault(),e.stopPropagation()})),jQuery("#content a[title]").each((function(e){jQuery(this).removeAttr("title")})),jQuery("#content img[title]").each((function(e){jQuery(this).removeAttr("title")})),jQuery(".fusion-icon-blogger").each((function(e){jQuery(this).removeAttr("title")})),jQuery(".cur_year").length||jQuery(".cur_month").length){const n=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],o=new Date;var a=(e=o.getMonth()+1,t=o.getFullYear(),new Date(t,e,0).getDate()),r=n[o.getMonth()],i=(new Date).getFullYear();jQuery(".cur_month").text(r),jQuery(".cur_year").text(i),jQuery(".last_day").text(a)}if(jQuery("body.single-format-standard:not(.single-avada_portfolio)").length&&jQuery("#sidebar").insertAfter(".post-content"),jQuery("body.single-format-link").length){var s=jQuery("body").attr("class");s=(s=s.substr(s.indexOf("site-id-")+8,2)).trim();var u=window.location.pathname;u=u.substring(u.indexOf("/")+1,u.length-1),s=1!=s?"sites/"+s+"/":"",jQuery(".wpml-ls-native").length&&(u=u.substring(3,u.length)),jQuery(".avada-page-titlebar-wrapper").css("background-image","url(/wp-content/uploads/"+s+u+"-pdf-large.jpg"),jQuery('<img src="/wp-content/uploads/'+s+u+'-pdf-large.jpg" width="300" class="preview" />').insertBefore("#main .wpcf7")}if(jQuery(".fusion-portfolio").length&&!jQuery(".more-info").length){var l,c,f,p,d,y="fusion-button button-flat fusion-button-round button-default portfolio-button",j=' data-toggle="modal" data-target=".fusion-modal';jQuery(".fusion-portfolio-post").each((function(e){var t=jQuery(".fusion-portfolio-post:eq("+e+") h2 a").attr("href");"es"==o?(l="Más info",c="Conocer más",f="Contactar",j+='.contacto-rapido"'):"en"==o?(l="More info",c="Learn more",f="Contact",j+='.contacto-rapido-en"'):"pt"==o&&(l="Mais info",c="Saber mais",f="Contato",j+='.contacto-rapido-pt"'),jQuery(".fusion-portfolio-post:eq("+e+")").hasClass("tag-solo-contacto")&&jQuery(".fusion-portfolio-post:eq("+e+")").hasClass("c-solo-contacto")||(p='<a class="'+y+'" href="'+t+'"><span class="fusion-button-text">'+c+"</span></a>",d="two"),p+='<a class="'+y+' fusion-modal-text-link" '+j+'><span class="fusion-button-text">'+f+"</span></a>",jQuery(".fusion-portfolio:not(.not-collapsable) .fusion-portfolio-post:eq("+e+") .fusion-portfolio-content").append('<a href="#info" class="more-info"><i class="fa-solid fa-angle-down"></i> <span>'+l+"</span></a>"),jQuery(".fusion-portfolio .fusion-portfolio-post:eq("+e+") .fusion-portfolio-content").append('<div class="fusion-buttons '+d+'">'+p+"</div>")}))}if(jQuery(window).width()>920&&("es"==o?(l="Más info",n="Ocultar"):"en"==o?(l="Info",n="Hide"):"pt"==o&&(l="Mais info",n="Ocultar"),jQuery(".fusion-portfolio:not(.not-collapsable) .fusion-portfolio-post h2 a,.fusion-portfolio:not(.not-collapsable) .fusion-portfolio-content-wrapper .fusion-image-wrapper a").on("click",(function(e){jQuery(this).closest("article").toggleClass("expanded"),jQuery(".fusion-portfolio article").toggleClass("opacity");var t=jQuery(this).closest("article").find(".more-info");t.toggleClass("open"),t.hasClass("open")?t.find("span").text(n):t.find("span").text(l),e.preventDefault()})),jQuery(".fusion-portfolio .more-info").on("click",(function(e){jQuery(this).closest("article").toggleClass("expanded"),jQuery(".fusion-portfolio article").toggleClass("opacity"),jQuery(this).toggleClass("open"),jQuery(this).hasClass("open")?jQuery(this).find("span").text(n):jQuery(this).find("span").text(l),e.preventDefault()})),jQuery(".fusion-portfolio").length)){jQuery("html").on("click",(function(e){e.target.closest(".expanded")||(jQuery(".fusion-portfolio article").removeClass("visible").removeClass("expanded").removeClass("opacity"),jQuery(".more-info").removeClass("open"),jQuery(".more-info span").text(l))})),jQuery(document).on("keydown",(function(e){"Escape"==e.key&&(jQuery(".fusion-portfolio article").removeClass("visible").removeClass("expanded").removeClass("opacity"),jQuery(".more-info").removeClass("open"),jQuery(".more-info span").text(l))}));var Q=999;jQuery(".fusion-portfolio,.fusion-portfolio article").each((function(e){Q--,jQuery(this).css("z-index",Q)}))}if(jQuery(".fusion-breadcrumb-item").each((function(e){jQuery(this).children("a").attr("href").indexOf("flag-")>-1&&jQuery(this).addClass("nopadding")})),jQuery(".fusion-mobile-tab-nav").length&&jQuery(".fusion-mobile-tab-nav").each((function(e){jQuery(this).insertBefore(".tab-pane:first")})),jQuery(".fusion-portfolio-content .fusion-portfolio-meta a").length&&jQuery('.fusion-portfolio-content .fusion-portfolio-meta a[href*="/flag-"]').each((function(){jQuery(this).empty()})),jQuery("#RESP").length){var h=jQuery("#RESP a").attr("href");h=h.substring(h.indexOf("mailto:")+7,h.length),jQuery('input[name="RESP"]').val(h)}if(window.location.href.indexOf("?ctry")>-1){var m=new URLSearchParams(window.location.search);ctry_url=m.get("ctry"),jQuery('input[name="RESP"]').val(ctry_url+"@grupodatco.com")}if(jQuery("#RESP_BCC").length){var g="";jQuery("#RESP_BCC a").each((function(e){var t=jQuery(this).attr("href");t=t.substring(t.indexOf("mailto:")+7,t.length),g+=t+", "})),g=g.substring(0,g.length-2),jQuery('input[name="RESP_BCC"]').val(g)}if(window.location.href.indexOf("#")>-1&&(window.location.href.indexOf("#contacto")>-1?jQuery("#open-contacto-rapido").trigger("click"):window.location.href.indexOf("#contacto-empresas")>-1&&jQuery("#open-contacto-empresas").trigger("click")),jQuery(".wpcf7-select:not(.highlight)").change((function(){jQuery(this).hasClass("selected")||jQuery(this).addClass("selected")})),jQuery('input[name*="ORG"]').on("input",(function(e){jQuery(this).val(jQuery(this).val().toUpperCase())})),jQuery('input[name*="EMAIL"]').on("input",(function(e){jQuery(this).val(jQuery(this).val().toLowerCase())})),jQuery(".comment-author").each((function(e){jQuery(this).find("strong").text(jQuery(this).find("strong").text().toLowerCase())})),jQuery.fn.capitalize=function(e){return jQuery.each(this,(function(){for(var e=this.value.split(" "),t=0,n=e.length;t<n;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].substr(1).toLowerCase();this.value=e.join(" ")})),this},jQuery('input[name*="FNAME"],input[name*="LNAME"],input[name*="ROLE"]').on("input",(function(e){jQuery(this).capitalize()})),jQuery(".address_maps,.pac_input").removeAttr("placeholder"),jQuery(".wpcf7-submit:not([readonly])").on("click",(function(e){if(-1===jQuery(this).val().indexOf("...")){jQuery(this).attr("name",jQuery(this).val());var t="";"es"==o||"pt"==o?t="Enviando...":"en"==o&&(t="Sending..."),jQuery(this).attr({value:t,readonly:"readonly"});var n=jQuery(this).parent().parent().parent().attr("id");jQuery("#"+n).addClass("sending"),jQuery(".wpcf7.sending input,.wpcf7.sending select,.wpcf7.sending textarea").addClass("sending")}})),jQuery('input[name="TITLE"]').length&&jQuery('input[name="TITLE"]').val(document.title),jQuery('input[name*="SRC"]').length){var v=window.location.href;jQuery('input[name*="SRC"]').val(v),jQuery('input[name="HREF"]').length&&jQuery('input[name="HREF"]').val(v)}function w(){var e=jQuery("textarea.activefield[name=MSG]").val();if(jQuery("body").hasClass("page-id-36729")||jQuery("body").hasClass("parent-pageid-36729")){var t=jQuery("select[name=SRV] option:selected").val(),n=jQuery("select[name=SRV]").prop("selectedIndex");if(1==n||2==n)t=t+" ("+jQuery("select[name=SRVSPEED] option:selected").val()+")";e.length>0?(jQuery("input[name=PAINSF]").val(t+" / "+e),jQuery(".activefield").removeClass("activefield")):jQuery("input[name=PAINSF]").val(t)}else jQuery("input[name=PAINSF]").val(e),jQuery(".activefield").removeClass("activefield")}if(jQuery("select[name=SRV],select[name=SRVSPEED").change((function(){jQuery(this).addClass("activefield"),w()})),jQuery("textarea[name=MSG]").on("input",(function(){jQuery(this).addClass("activefield"),w()})),jQuery('input[name="ORIGSF"]').length&&jQuery('input[name="ORIGSF"]').val("Web"),jQuery(document).on("blur",".wpcf7 input",(function(){jQuery("input").each((function(){this.value=jQuery(this).val().trim()}))})),jQuery(".wpcf7-form-control-wrap input").on("input",(function(e){jQuery(this).val().length>0?jQuery(this).siblings(".wpcf7-not-valid-tip").hide():jQuery(this).siblings(".wpcf7-not-valid-tip").show()})),jQuery(".wpcf7-form-control-wrap select").on("change",(function(e){jQuery("option:selected",this).index()>0?jQuery(this).parent(".wpcf7-select-parent").siblings(".wpcf7-not-valid-tip").hide():jQuery(this).parent(".wpcf7-select-parent").siblings(".wpcf7-not-valid-tip").show()})),jQuery(".wpcf7-form-control-wrap input:radio").change((function(){jQuery(this).is(":checked"),jQuery(this).closest(".wpcf7-radio").siblings(".wpcf7-not-valid-tip").hide()})),jQuery(".wpcf7-form-control:not(.wpcf7-submit):not(.hidden):not([type=hidden]").each((function(e){if(jQuery(this).hasClass("wpcf7-validates-as-required"))jQuery(this).parent().addClass("wpcf7-validates-as-required");else{var t=jQuery(this).closest(".wpcf7").attr("id");jQuery("#"+t).hasClass("notallrequired")||jQuery("#"+t).addClass("notallrequired")}})),jQuery(":input").each((function(e){jQuery(this).val().length>0&&jQuery(this).parents(".fusion-layout-column").addClass("focused")})),jQuery(document).on("focus",":input",(function(){jQuery(this).parents(".fusion-layout-column").addClass("focused")})),jQuery(document).on("blur",":input",(function(){""==jQuery(this).val()?(jQuery(this).removeClass("filled"),jQuery(this).parents(".fusion-layout-column").removeClass("focused")):jQuery(this).addClass("filled")})),jQuery("#sidebar .cta-link").length){var C=window.location.pathname,b=(C=C.substring(0,C.length-1)).substring(C.lastIndexOf("/")+1,C.length);jQuery("#sidebar .cta-link").attr({href:"/datasheet-"+b+"/"})}jQuery('li[class*="fusion-modal-text-link"]').length&&jQuery('li[class*="fusion-modal-text-link"]').each((function(e){jQuery('li[class*="fusion-modal-text-link"]:eq('+e+") a").addClass("fusion-modal-text-link"),jQuery('li[class*="fusion-modal-text-link"]:eq('+e+") a").attr("data-toggle","modal");var t=jQuery('li[class*="fusion-modal-text-link"]:eq('+e+") a").attr("href");t=t.substring(1,t.length),jQuery('li[class*="fusion-modal-text-link"]:eq('+e+") a").removeAttr("href"),jQuery('li[class*="fusion-modal-text-link"]:eq('+e+") a").attr("data-target",".fusion-modal."+t)})),jQuery(".fusion-portfolio-post .fusion-modal-text-link").on("click",(function(e){".fusion-modal.demo"==jQuery(this).attr("data-target")?"es"==o?modal_title_lang="Solicitar demo gratuita para":"en"==o?modal_title_lang="Request free trial for":"pt"==o&&(modal_title_lang="Solicite demonstração gratuita para"):"es"==o?modal_title_lang="Contactar por":"en"==o?modal_title_lang="Contact for":"pt"==o&&(modal_title_lang="Contato para");var t=jQuery(this).parent().parent().find("h2 a").text();jQuery('input[name="TITLE"]').val(t),jQuery(".fusion-modal .modal-title").html(modal_title_lang+" <span>"+t+"</span>"),e.preventDefault()})),jQuery("#partners_footer").length&&!jQuery("body").hasClass("page-id-45066")&&jQuery("#partners_footer").insertBefore(".fusion-footer-widget-area"),jQuery(".fusion-footer").attr("id","fusion-footer"),jQuery(".fusion-copyright-notice span.cur_year").text((new Date).getFullYear()),jQuery(".fusion-pricing-table").length&&jQuery(".integer-part").each((function(){var e=jQuery(this).text();jQuery(this).text(e.replace(",","."))})),jQuery(document).on("click",'.fusion-pricing-table .panel-footer .fusion-button,.fusion-button[data-toggle="modal"]',(function(e){if(jQuery('select[name="SRV"]').length){var t=jQuery(".entry-title").text();jQuery('select[name="SRV"] option:contains('+t+")").prop("selected",!0);var n=jQuery("select[name=SRV]").prop("selectedIndex");1!=n&&2!=n||jQuery('div[data-id="internet-velocidad"]').show()}if(jQuery(this).parent().parent(".panel-footer").length>0){var o=jQuery(this).parent().parent().parent().find(".title-row").text();jQuery('select[name="SRVSPEED"] option:contains('+o+")").prop("selected",!0)}}))}));