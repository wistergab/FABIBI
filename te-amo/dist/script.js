$(document).ready(function () {

  $('.title').click(function () {

    $('.container').addClass('open');
    $('body').addClass('open-active');

    // Espera un poco para que termine la animación
    setTimeout(function () {

      $("#miVideo").fadeIn();

      let video = document.getElementById("miVideo");
      video.play();

    }, 1500);

  });

  $('.close').click(function () {

    $('.container').removeClass('open');
    $('body').removeClass('open-active');

    let video = document.getElementById("miVideo");
    video.pause();
    video.currentTime = 0;

    $("#miVideo").hide();

  });

});