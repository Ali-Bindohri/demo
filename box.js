$(function(){
    $('#open').click(function(){
    $('.model-container').delay(2000).css('transform',' scale(1)')
    });
    $('body').on('click','.close',function(){
        $('.model-container').css('transform',' scale(0)')
        });
});