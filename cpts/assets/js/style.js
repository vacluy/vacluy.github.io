$('.dropdown').hover(function() {
    $(this).addClass('open');
    $(this).find('a').data('toggle','');
}, function() {
    $(this).removeClass('open');
    $(this).find('a').data('toggle','dropdown');
});

$('#myModal').on('show.bs.modal', function (e) {
    var $button = $(e.relatedTarget);
    var imgSrc = $button.data('whatever');

    var $modelImg = $(this).find('img');
    $modelImg.prop('src', imgSrc);
  })