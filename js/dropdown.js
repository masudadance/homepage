$('.js-more-open').on('click',function(){
  let $info = $(this).find('.more-detail');
  if($info.hasClass('open')){
    $info.removeClass('open').slideUp(200);
  }else{
    $info.addClass('open').slideDown(200);
  }
})