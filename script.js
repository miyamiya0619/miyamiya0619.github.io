$(function() {
/* ハンバーガーメニュー */
$('.hamburger-menu').on('click',function(){
  $('.hanburger-navi').toggleClass('open');
  $('.barger-mask').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
});

/* ナビをクリックした場合 */
if ($(window).width() < 769){
  $('.hanburger-navi a').click(function (){
    $('.hanburger-navi').toggleClass('open');
    $('.barger-mask').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる

  });
}


  /* アコーディオン機能 */ 
$('.faq-question').click(function(){
    // [data-target]の属性値を代入する
    var target = $(this).data('target');
    // [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
    $('#'+target).slideToggle();
   });


/* スムーススクロール */
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - $('.page-header').outerHeight();
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });



/* 制作実績箇所のスライダー */
var mySwiper = new Swiper ('.swiper-container', {
  autoplay: {delay: 0,},
  loop: true,
  spaceBetween: 56,
  speed: 5000,
  slidesPerView:1.6,
  //768px以上の場合
  breakpoints:{
    769: {
      slidesPerView:3.6,
    }
  },
  centeredSlides:true,
});


/* アニメーション（AOS) */
AOS.init();

/* プライバシーポリシー同意チェック */

$(document).ready(function () {

  const $submitBtn = $('#submit-btn')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="textarea"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #agree').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
      $submitBtn.css('cursor', 'pointer');
    } else {
      $submitBtn.prop('disabled', true);
      return false;
    }
  });
});

//画面表示しない
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSesFR6gjshrVwA7pkIkq6PfrTEiRfIIqtXsPTz44qW0YrWeww/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});



});