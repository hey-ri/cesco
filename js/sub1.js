$(function(){
    $('ul.day li').on('click',function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        var inxNum = $(this).index();
        //console.log(inxNum)
        $('ul.tab_con >li.bottom').eq(inxNum).addClass('on')
        $('ul.tab_con >li.bottom').eq(inxNum).siblings().removeClass('on')
    })
})