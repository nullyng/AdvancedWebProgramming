$(document).ready(function(){
      $('.slider').bxSlider({
          auto: true,
          speed: 500,
          pause: 2000,
          mode: 'horizontal',
          minSlides: 4,
          maxSlides: 4,
          moveSlides: 1,
          slideWidth: 500,
          slideMargin: 40,
          autoHover: true, // 마우스 호버시 애니메이션 정지 여부
          controls: false, // 이전/다음 버튼 노출 여부
          pager: true, // 동그라미 버튼 노출 여부
          adaptiveHeight: true,
      });
});

$(document).ready(function(){
    $('.wideslider').bxSlider({
        auto: true,
        speed: 500,
        pause: 2000,
        mode: 'horizontal',
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        autoHover: true, // 마우스 호버시 애니메이션 정지 여부
        controls: false, // 이전/다음 버튼 노출 여부
        pager: true, // 동그라미 버튼 노출 여부
        adaptiveHeight: true,
    });
});