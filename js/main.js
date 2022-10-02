$(function(){
  /*팝업창 */
  // --- (닫기 버튼)
  $('.popup_close').click(function(){
    $('.popup').hide();
  });
  // --- (오늘 하루 보지 않기)
  $(".notToday").click(function () {
    setCookie( "cescopopup", "done" , 1);
    $('.popup').hide();
  });
  
  function setCookie(name, value, expiredays){
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
  }
  function getCookie(){
    var cookiedata = document.cookie;
    if ( cookiedata.indexOf("cescopopup=done") < 0 ){
        $(".popup").show();
    }
    else {
        $(".popup").hide();
    }
  }
  getCookie();


     /* 슬라이드 */
     const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
      });
})