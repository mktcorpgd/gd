jQuery(document).ready(function ($) {
    $('.cart').on('submit', function (e) {
        e.preventDefault();

        let form = $(this);
        let formData = form.serialize();

        $.post('/?wc-ajax=add_to_cart', formData, function (response) {
            if (response && response.fragments) {
                // Actualizar el carrito en la página
                $.each(response.fragments, function (key, value) {
                    $(key).replaceWith(value);
                });
            }
        });
    });
});
