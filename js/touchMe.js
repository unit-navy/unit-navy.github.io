$(function(){

  //間違いタッチ
  $('#title-touch').click(function(){
    $('.title-serifu').fadeIn("slow",function(){
      $(this).delay(2000).fadeOut("slow");
    });
    $('.ikari').css('display','block').delay(2000).fadeOut();
  });
  $('#megane-touch').click(function(){
    $('.megane-serifu').fadeIn("slow",function(){
      $(this).delay(2000).fadeOut("slow");
    });
    $('.ikari').css('display','block').delay(2000).fadeOut();
  });
  $('#yubi-touch').click(function(){
    $('.yubi-serifu').fadeIn("slow",function(){
      $(this).delay(2000).fadeOut("slow");
    });
    $('.ikari').css('display','block').delay(2000).fadeOut();
  });

  //正解タッチ
  $('#love-touch').click(function(){
    $('body').append('<div id="love-modal-overlay"></div>');
    $('#love-modal-overlay').fadeIn("slow");
    $('#love-modal').fadeIn("slow");
    $('.container').css('display','none');
  });
　
  //モーダル閉じる
  $('#love-modal-overlay').unbind().click(function(){
    $('#love-modal,#love-modal-overlay').fadeOut("slow",function(){
      $('#love-modal-overlay').remove();
      $('.container').css('display','block');
    });
  });

  $('#love-modal p').click(function(){
    $('#love-modal,#love-modal-overlay').fadeOut("slow",function(){
      $('#love-modal-overlay').remove();
      $('.container').css('display','block');
    });
  });



});