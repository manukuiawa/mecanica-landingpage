$(document).ready(function () {
  let $menu = $('#mobile_menu');
  let $icon = $('#mobile_btn i');

  $('#mobile_btn').on('click', function () {
    if (!$menu.hasClass('show')) {
      $menu.removeClass('hide').addClass('show').css('display', 'flex');
      $icon.removeClass('fa-bars').addClass('fa-x');
    } else {
      $menu.removeClass('show').addClass('hide');
      $icon.removeClass('fa-x').addClass('fa-bars');

      // Espera a animação terminar pra esconder de vez
      setTimeout(() => {
        $menu.css('display', 'none');
      }, 400); // igual ao tempo do slideUp
    }
  });
});