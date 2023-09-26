//your JS code here. If required.

		$('.card').click(function () {
            var imgSrc = $(this).find('img').attr('src');
            $('#modal-image').attr('src', imgSrc);
        });