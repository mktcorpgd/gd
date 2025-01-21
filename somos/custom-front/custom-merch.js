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

document.addEventListener('DOMContentLoaded', function() {
	const incrementButtons = document.querySelectorAll('.quantity-button.increment');
	const decrementButtons = document.querySelectorAll('.quantity-button.decrement');

	incrementButtons.forEach(button => {
		button.addEventListener('click', function() {
			const productId = button.dataset.productId;
			const input = document.getElementById(`quantity_${productId}`);
			const step = parseInt(input.step) || 1;
			const max = parseInt(input.max) || Infinity;
			const currentValue = parseInt(input.value) || 0;
			input.value = Math.min(max, currentValue + step);
		});
	});

	decrementButtons.forEach(button => {
		button.addEventListener('click', function() {
			const productId = button.dataset.productId;
			const input = document.getElementById(`quantity_${productId}`);
			const step = parseInt(input.step) || 1;
			const min = parseInt(input.min) || 1;
			const currentValue = parseInt(input.value) || 0;
			input.value = Math.max(min, currentValue - step);
		});
	});
});
