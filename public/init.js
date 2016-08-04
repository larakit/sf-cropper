var thumbSize_image;
LarakitJs.initSelector('.js-cropper', function(){
    var $preview = $('.js-cropper-preview'),
        parent_w = $preview.width();
    thumbSize_image = $(this).find('.js-cropper-source img');

    if ($preview.attr('data-width') < parent_w) {
        parent_w = $preview.attr('data-width');
    }

    $preview
        .css('height', parseInt(parent_w / $preview.attr('data-ratio')) + 'px')
        .css('width', parent_w + 'px');
    thumbSize_image.cropper({
        aspectRatio: thumbSize_image.attr('data-ratio'),
        strict: false,
        responsive: false,
        preview: ".js-cropper-preview",
        crop: function (data) {
            $("#dataX").val(Math.round(data.x));
            $("#dataY").val(Math.round(data.y));
            $("#dataHeight").val(Math.round(data.height));
            $("#dataWidth").val(Math.round(data.width));
            $("#dataRotate").val(Math.round(data.rotate));
        }
    });

});

LarakitJs.initSelector('.js-cropper-rotate', function () {
    $(this).on('click', function () {
        var deg = $(this).attr('data-option');
        thumbSize_image.cropper('rotateTo', deg);
        return false;
    });
});
