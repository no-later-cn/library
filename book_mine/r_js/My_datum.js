$('.head-on').on("click",function(){
    $('.show-wrap').addClass('hot').prev().addClass("add");
    $('.head').addClass('hot');    
})

$('.show-wrap').on("click",function(e){
    var target = e.target.nodeName;
    if(target == "DIV"|| target == "BUTTON"){
        $(this).removeClass('hot').prev().removeClass("add");
        $('.head').removeClass('hot');
        $('.sex').removeClass('hot');
    }
})

$('.sex-on').on('click',function(){
    $('.show-wrap').addClass('hot').prev().addClass("add");
    $('.sex').addClass('hot');
    
})