$(function(){
    /* 네비게이션 */
    $('ul.menu >li').hover(function(){
        $(this).children('ul.sub').stop().slideDown({
            start : function(){
                $(this).css({display : 'flex'})
            }
        })
    },function(){
        $(this).children('ul.sub').stop().slideUp()
    });

      /* 푸터 윗 부분 슬라이드 */
      const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.u_d .down',
          prevEl: '.u_d .up',
        },
        
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
      });
})