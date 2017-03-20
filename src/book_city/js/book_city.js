$(function () {
    var selector=$(".blue");
    var next=$(".next");
    selector.on('click',function () {
        selector.removeClass('active');
        $(this).addClass('active');
       var i=$(this).index();
       $(next).removeClass('nexts').eq(i).addClass('nexts');
    })
})